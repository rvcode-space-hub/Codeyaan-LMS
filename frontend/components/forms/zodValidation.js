import {  z } from "zod";

const authSchema = (isSignUp) =>
  z
    .object({
      name: isSignUp
        ? z.string().min(2, "Name is required")
        : z.string().optional(),

      // ✅ LOGIN → identifier (email OR username)
      identifier: !isSignUp
        ? z.string().min(3, "Email or Username is required")
        : z.string().optional(),

      // ✅ SIGNUP → email required
      email: isSignUp
        ? z.string().email("Invalid email format")
        : z.string().optional(),

      password: z.string().min(6, "Password must be at least 6 characters"),
      
    })

export default authSchema;