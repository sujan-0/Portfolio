import type React from "react"
interface EmailTemplateProps {
  name: string
  email: string
  message: string
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, email, message }) => (
  <div style={{ fontFamily: "sans-serif", maxWidth: "600px", margin: "0 auto" }}>
    <h2 style={{ color: "#3b82f6" }}>New Contact Form Submission</h2>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <h3 style={{ marginTop: "20px" }}>Message:</h3>
    <p
      style={{
        whiteSpace: "pre-line",
        backgroundColor: "#f9fafb",
        padding: "15px",
        borderRadius: "5px",
      }}
    >
      {message}
    </p>
  </div>
)

export default EmailTemplate
