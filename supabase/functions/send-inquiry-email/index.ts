import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface InquiryEmailRequest {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, subject, message }: InquiryEmailRequest = await req.json();

    console.log("Processing inquiry email for:", name, email);

    // Send notification email to business owner
    const notificationResponse = await resend.emails.send({
      from: "Freez Home <onboarding@resend.dev>",
      to: ["purvi.freezhome@gmail.com"],
      subject: `New Inquiry: ${subject || 'Contact Form Submission'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">
            New Contact Form Inquiry
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Customer Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Subject:</strong> ${subject || 'Not specified'}</p>
          </div>
          
          <div style="background-color: #fff; border-left: 4px solid #007bff; padding: 20px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #666;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #888; font-size: 12px;">
            <p>This email was sent from your Freez Home website contact form.</p>
          </div>
        </div>
      `,
    });

    console.log("Notification email sent:", notificationResponse);

    // Send confirmation email to customer
    const confirmationResponse = await resend.emails.send({
      from: "Freez Home <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting Freez Home!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Thank You for Your Inquiry!
          </h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            Dear ${name},
          </p>
          
          <p style="line-height: 1.6; color: #666;">
            Thank you for reaching out to Freez Home! We have received your inquiry and appreciate your interest in our home appliances and services.
          </p>
          
          <div style="background-color: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">What happens next?</h3>
            <ul style="color: #666; line-height: 1.6;">
              <li>Our team will review your inquiry within 24 hours</li>
              <li>We'll contact you via phone or email with a response</li>
              <li>For urgent matters, please call us directly</li>
            </ul>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Your Inquiry Summary</h3>
            <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          
          <p style="line-height: 1.6; color: #666;">
            If you have any urgent questions, please don't hesitate to contact us directly.
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p style="color: #666; font-weight: bold;">Best regards,<br>The Freez Home Team</p>
          </div>
          
          <div style="margin-top: 20px; color: #888; font-size: 12px;">
            <p>This is an automated confirmation email. Please do not reply to this message.</p>
          </div>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        notificationId: notificationResponse.data?.id,
        confirmationId: confirmationResponse.data?.id 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-inquiry-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);