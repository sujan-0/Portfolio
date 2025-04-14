
import { z } from "zod"
import { Resend } from "resend"

// In production, you would set this as an environment variable
const resend = new Resend(process.env.RESEND_API_KEY || "your_resend_api_key")

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export type ContactFormState = {
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
    _form?: string[]
  }
  success?: boolean
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Validate form data
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  // Return errors if validation fails
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    }
  }

  // Get form data
  const { name, email, message } = validatedFields.data

  try {
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>", // Use your verified domain in production
      to: "sujankhatiwoda0206@gmail.com", 
      subject: `New contact form submission from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
      // You can also use HTML for a nicer email format
      html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <h3 style="margin-top: 20px;">Message:</h3>
  <p style="white-space: pre-line; background-color: #f9fafb; padding: 15px; border-radius: 5px;">${message}</p>
</div>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return {
        errors: {
          _form: ["Failed to send message. Please try again later."],
        },
        success: false,
      }
    }

    // Return success state
    return {
      success: true,
    }
  } catch (error) {
    console.error("Error in contact form submission:", error)
    // Return error state
    return {
      errors: {
        _form: ["Failed to send message. Please try again later."],
      },
      success: false,
    }
  }
}
