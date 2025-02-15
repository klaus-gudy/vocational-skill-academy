"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import CourseCard from "./course-card"

// Sample course data
const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    instructor: "John Doe",
    duration: 8,
    enrolled: 156,
    ratings: 4.5,
    price: 50000,
    category: "coding",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Modern Tailoring Techniques",
    instructor: "Sarah Smith",
    duration: 6,
    enrolled: 89,
    ratings: 4.2,
    price: 35000,
    category: "tailoring",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Sustainable Agriculture Practices",
    instructor: "Michael Johnson",
    duration: 10,
    enrolled: 234,
    ratings: 4.8,
    price: 45000,
    category: "agriculture",
    image: "/placeholder.svg",
  },
]

const categories = ["All Categories", "Coding", "Agriculture", "Tailoring"]

export default function   CourseExplorer() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [priceRange, setPriceRange] = useState([0, 100000])

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === "All Categories" || course.category.toLowerCase() === selectedCategory.toLowerCase()
    const matchesPrice = course.price >= priceRange[0] && course.price <= priceRange[1]
    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <div className="min-h-screen bg-[#e2def4]">
      <div className="bg-gradient-to-br from-[#0f1116] via-[#151934] to-[#1a1245] text-center mb-8 px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-4">Explore Our Courses</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover high-quality courses designed to help you master practical skills and advance your career
        </p>
      </div>

      <div className="px-4">

        <div className="space-y-6">
          <div className="flex gap-4">
            <Input
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className=" w-1/3 bg-white"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

