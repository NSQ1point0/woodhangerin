import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      businessType,
      inquiryType,
      message,
    } = body || {}

    if (!email || !message) {
      return NextResponse.json({ error: "Email and message are required" }, { status: 400 })
    }

    const to = "info@woodenhangerin.com"

    // Prefer Resend if available
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "no-reply@woodenhangerin.com",
          to,
          subject: `New Inquiry from ${firstName || ""} ${lastName || ""}`.trim(),
          text: `Name: ${firstName || ""} ${lastName || ""}\nEmail: ${email}\nPhone: ${phone || ""}\nCompany: ${company || ""}\nBusiness Type: ${businessType || ""}\nInquiry Type: ${inquiryType || ""}\n\nMessage:\n${message}`,
        }),
      })
      if (!res.ok) {
        const errorText = await res.text()
        console.error("Resend error:", errorText)
        return NextResponse.json({ error: "Failed to send email" }, { status: 502 })
      }
      return NextResponse.json({ ok: true })
    }

    // Fallback: log only (to avoid server crash without provider)
    console.log("Contact form (no email provider configured):", body)
    return NextResponse.json({ ok: true, notice: "Email provider not configured" })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}


