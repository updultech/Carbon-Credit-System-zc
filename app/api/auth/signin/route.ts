import { findUserByPhone, validateUserPassword } from "@/lib/auth-store"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { phone, password } = body

    // Validation
    if (!phone || !password) {
      return NextResponse.json({ error: "Missing phone or password" }, { status: 400 })
    }

    const user = findUserByPhone(phone)
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    const isPasswordValid = validateUserPassword(user, password)
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Return user data without password
    const { password: _, ...userWithoutPassword } = user
    return NextResponse.json(
      {
        message: "Signed in successfully",
        user: userWithoutPassword,
      },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
