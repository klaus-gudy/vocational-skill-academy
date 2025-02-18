"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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


    console.log("Login data:", formData)
    router.push("/")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-white">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} />
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
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" onClick={() => toast.info("Server down. Please try again later")}>
        Log In
      </Button>
      <p className="text-center text-gray-400 text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-purple-400 hover:text-purple-300">
          Sign up
        </Link>
      </p>
    </form>
  )
}

