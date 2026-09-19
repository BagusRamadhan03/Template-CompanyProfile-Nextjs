import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Format email tidak valid"),
  phone: z.string().min(8, "Nomor telepon minimal 8 karakter"),
  companyName: z.string().optional(),
  serviceCategory: z.string().optional(),
  budgetRange: z.string().optional(),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Server-side schema validation
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      const errorMsg = result.error.issues[0]?.message || "Input tidak valid";
      return NextResponse.json({ error: errorMsg }, { status: 400 });
    }

    const { fullName, email, phone, companyName, serviceCategory, budgetRange, message } =
      result.data;

    // In a production environment, you would integrate Resend / Nodemailer or save to a database.
    // Example:
    // await resend.emails.send({ ... })
    // For now we log the structured lead:
    console.log("=== NEW INCOMING LEAD ===");
    console.log({
      receivedAt: new Date().toISOString(),
      fullName,
      email,
      phone,
      companyName,
      serviceCategory,
      budgetRange,
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Terima kasih! Pesan Anda telah kami terima dan tim konsultan kami akan segera menghubungi Anda.",
    });
  } catch (error) {
    console.error("Error handling contact submission:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan internal server saat memproses pesan Anda." },
      { status: 500 }
    );
  }
}
