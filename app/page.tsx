import Header from "@/components/shared/header";
import HeroPreview from "@/components/shared/hero-preview";
import RolePreview from "@/components/shared/role-preview";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1116] via-[#151934] to-[#1a1245]">
      <Header />
      <main>
        <section className="container mx-auto px-4 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Empower your future with{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
                Vocational skills
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl">
              Join thousands of Tanzanian youth learning practical skills
              through affordable, high-quality online courses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/courses">
              <Button
                className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white"
              >
                Start Learning
              </Button>
              </Link>
              <Button variant={"outline"} className="">
                Become an Instructor
              </Button>
            </div>
          </div>

          <div className="lg:block"><HeroPreview /></div>
        </div>
        </section>
        <RolePreview />
      </main>
    </div>
  );
}
