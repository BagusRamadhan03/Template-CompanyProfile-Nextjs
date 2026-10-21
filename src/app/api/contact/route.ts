import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(2, "Nama minimal 2 karakter").max(100),
  email: z.string().email("Format email tidak valid"),
  phone: z.string().min(8, "Nomor telepon minimal 8 karakter").max(20),
  companyName: z.string().optional(),
  serviceCategory: z.string().optional(),
  budgetRange: z.string().optional(),
  message: z.string().min(10, "Pesan minimal 10 karakter").max(5000, "Pesan maksimal 5000 karakter"),
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

    // ponytail: integrate Resend/Nodemailer/DB here; add when real email service ready

    return NextResponse.json({
      success: true,
      message: "Terima kasih! Pesan Anda telah diterima.",
    });
  } catch (error) {
    console.error("Error handling contact submission:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan internal server saat memproses pesan Anda." },
      { status: 500 }
    );
  }
}
