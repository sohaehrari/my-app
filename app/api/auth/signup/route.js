import { NextResponse } from "next/server";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const MONGODB_URI = process.env.MONGODB_URI;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User =
  mongoose.models.User ||
  mongoose.model("User", userSchema);

async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not configured.");
  }

  if (mongoose.connection.readyState === 1) {
    return;
  }

  await mongoose.connect(MONGODB_URI);
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const password = body.password;

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        {
          message: "Name, email and password are required.",
        },
        { status: 400 }
      );
    }

    // Validate name
    if (name.length < 2) {
      return NextResponse.json(
        {
          message: "Name must be at least 2 characters.",
        },
        { status: 400 }
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Validate password
    if (password.length < 8) {
      return NextResponse.json(
        {
          message: "Password must be at least 8 characters.",
        },
        { status: 400 }
      );
    }

    await connectDB();

    // Check existing user
    const existingUser = await User.findOne({ email });

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
    const user = await User.create({
      name,
      email,
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
    console.error("SIGNUP_ERROR:", error);

    // Handle duplicate email race condition
    if (error?.code === 11000) {
      return NextResponse.json(
        {
          message: "An account with this email already exists.",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
