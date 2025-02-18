"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    // Here you would typically send the data to your backend API
    console.log("Sign up data:", formData)

    // Redirect to login page after successful sign up
    router.push("/login")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-white">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} />
      </div>
      <div className="text-white">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} />
      </div>
      <div className="text-white">
        <Label htmlFor="phoneNumber">Email</Label>
        <Input id="phone" name="phone number" type="text" required value={formData.phoneNumber} onChange={handleChange} />
      </div>
      <div className="text-white">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="text-white">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" onClick={() => toast.info("Server down. Please try again later")}>
        Sign Up
      </Button>
      <p className="text-center text-gray-400 text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-purple-400 hover:text-purple-300">
          Log in
        </Link>
      </p>
    </form>
  )
}

