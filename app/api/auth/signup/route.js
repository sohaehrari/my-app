import { NextResponse } from "next/server";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const MONGODB_URI = process.env.MONGODB_URI;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User =
  mongoose.models.User ||
  mongoose.model("User", userSchema);

async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is missing");
  }

  if (mongoose.connection.readyState === 1) {
    return;
  }

  await mongoose.connect(MONGODB_URI);
}

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

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

    await connectDB();

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    const existingUser = await User.findOne({
      email: cleanEmail,
    });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "An account with this email already exists.",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(
      password,
      12
    );

    const user = await User.create({
      name: cleanName,
      email: cleanEmail,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        message: "Account created successfully.",
        user: {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        },
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
