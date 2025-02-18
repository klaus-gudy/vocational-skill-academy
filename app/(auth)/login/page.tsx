import LoginForm from "@/components/auth/login-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f1116] via-[#151934] to-[#1a1245] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-[#12152b] border-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">Welcome Back</CardTitle>
          <CardDescription className="text-gray-400">Log in to your account to continue learning</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  )
}
