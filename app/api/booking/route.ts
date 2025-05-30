import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(request: NextRequest) {
  
  try {
    const body = await request.json();
    const { name, phone, email, service, date, time, notes } = body;

    console.log("New appointment booking:", {
      name,
      phone,
      email,
      service,
      date,
      time,
      notes,
      timestamp: new Date().toISOString(),
    });

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS);
    console.log("EMAIL_RECEIVER:", process.env.EMAIL_RECEIVER);


    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: "New Salon Appointment Booking",
      text: `
        📅 New Appointment Details

        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Service: ${service}
        Date: ${date}
        Time: ${time}
        Notes: ${notes}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);

    return NextResponse.json({
      success: true,
      message: "Appointment booked and email sent successfully!",
    });
  } catch (error) {
    console.error("❌ Error booking appointment:", error);
    return NextResponse.json(
      { success: false, message: "Failed to book appointment" },
      { status: 500 }
    );
  }
}
