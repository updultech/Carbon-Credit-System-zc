import { createUser, findUserByPhone } from "@/lib/auth-store"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, password, confirmPassword } = body

    // Validation
    if (!name || !phone || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ error: "Passwords do not match" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 })
    }

    const existingUser = findUserByPhone(phone)
    if (existingUser) {
      return NextResponse.json({ error: "Phone number already registered" }, { status: 400 })
    }

    const newUser = createUser({
      name,
      phone,
      email: email || "",
      password,
    })

    // Return user data without password
    const { password: _, ...userWithoutPassword } = newUser
    return NextResponse.json(
      {
        message: "Account created successfully",
        user: userWithoutPassword,
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
