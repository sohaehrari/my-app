import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import mongoose from "mongoose";

const secret = new TextEncoder().encode(
  process.env.AUTH_SECRET
);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User =
  mongoose.models.User ||
  mongoose.model("User", userSchema);

async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  await mongoose.connect(process.env.MONGODB_URI);
}

export async function GET(request) {
  try {
    const token = request.cookies.get("auth-token")?.value;

    if (!token) {
      return NextResponse.json({
        user: null,
      });
    }

    const { payload } = await jwtVerify(
      token,
      secret
    );

    await connectDB();

    const user = await User.findById(
      payload.userId
    ).select("name email");

    if (!user) {
      return NextResponse.json({
        user: null,
      });
    }

    return NextResponse.json({
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("ME_ERROR:", error);

    return NextResponse.json({
      user: null,
    });
  }
}
