import { NextResponse } from "next/server";
import { sendContactEnquiryEmail } from "@/lib/mailer";
import { getDb } from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, requirement, location, message } = body;

    const trimmedName = String(name || "").trim();
    const trimmedPhone = String(phone || "").trim().replace(/\D/g, "");
    const trimmedEmail = String(email || "").trim();
    const trimmedRequirement = String(requirement || "").trim();
    const trimmedLocation = String(location || "").trim();
    const trimmedMessage = String(message || "").trim();

    if (!trimmedName || !trimmedPhone || !trimmedRequirement || !trimmedMessage) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (Name, Phone, Requirement, and Message)." },
        { status: 400 }
      );
    }

    if (trimmedPhone.length !== 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    const payload = {
      name: trimmedName,
      phone: trimmedPhone,
      email: trimmedEmail,
      requirement: trimmedRequirement,
      location: trimmedLocation,
      message: trimmedMessage,
    };

    // Save to MongoDB if available (non-blocking failure)
    try {
      const db = await getDb();
      await db.collection("enquiries").insertOne({
        ...payload,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: "new",
      });
    } catch (dbErr) {
      console.warn("[API /api/contact] Failed to save enquiry to MongoDB:", dbErr);
    }

    // Send notification email via Nodemailer
    await sendContactEnquiryEmail(payload);

    return NextResponse.json(
      { success: true, message: "Thank you! Your enquiry has been sent successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[API /api/contact] Error processing contact form:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to send enquiry email. Please try again later.",
      },
      { status: 500 }
    );
  }
}
