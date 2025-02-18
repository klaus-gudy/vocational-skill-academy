import { GraduationCap, PencilIcon, BookOpenIcon } from "lucide-react"
import Link from "next/link";

const features = [
  {
    icon: GraduationCap,
    title: "Learner",
    description: "Learn practical skills from local experts and start earning",
    href: "/courses",
  },
  {
    icon: PencilIcon,
    title: "Instructor",
    description: "Teach what you love, share your expertise and get paid",
    href: "#",
  },
  {
    icon: BookOpenIcon,
    title: "Admin manager",
    description: "Manage your platform, users, and courses with ease",
    href: "#",
  },
]

export default function RolePreview() {
  return (
    <section className="py-24 bg-[#0c0d15]/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">How it works</h2>
          <p className="text-gray-400 text-lg">
            Get started by picking a suitable role
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="hover-card p-6 rounded-lg bg-[#12152b] border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <Link href={feature.href}>
                <div className="h-14 w-14 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

