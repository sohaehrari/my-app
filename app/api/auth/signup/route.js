import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is missing from .env.local");
  }

  if (mongoose.connection.readyState === 1) {
    return;
  }

  await mongoose.connect(MONGODB_URI);
}

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, password } = body;

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        {
          message: "Name, email and password are required.",
        },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        {
          message: "Password must be at least 8 characters.",
        },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectDB();

    // Use MongoDB collection directly
    const db = mongoose.connection.db;

    const users = db.collection("users");

    // Check existing user
    const existingUser = await users.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "An account with this email already exists.",
        },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const newUser = {
      name: name.trim(),
      email: email.toLowerCase(),
      password: hashedPassword,
      createdAt: new Date(),
    };

    await users.insertOne(newUser);

    return NextResponse.json(
      {
        message: "Account created successfully.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("SIGNUP SERVER ERROR:", error);

    return NextResponse.json(
      {
        message: "Server error. Unable to create account.",
      },
      { status: 500 }
    );
  }
}
