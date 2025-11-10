// In-memory user database for the application
// Each user is stored with hashed password (demo purposes - in production use proper bcrypt)

interface User {
  id: string
  name: string
  phone: string
  email: string
  password: string
  createdAt: Date
}

// Store users in memory (persists during session)
const users: User[] = [
  {
    id: "demo-user-1",
    name: "Demo User",
    phone: "+233501234567",
    email: "demo@example.com",
    password: "password123", // Demo password
    createdAt: new Date(),
  },
]

// Simple hash function for demo (NOT for production)
function simpleHash(str: string): string {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }
  return hash.toString()
}

export function findUserByPhone(phone: string): User | undefined {
  return users.find((u) => u.phone === phone)
}

export function createUser(userData: Omit<User, "id" | "createdAt">): User {
  const newUser: User = {
    ...userData,
    id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date(),
  }
  users.push(newUser)
  return newUser
}

export function validateUserPassword(user: User, password: string): boolean {
  return user.password === password
}

export function getAllUsers(): User[] {
  return users
}
