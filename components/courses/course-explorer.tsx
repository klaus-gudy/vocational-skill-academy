"use client"

import { useCallback, useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import CourseCard from "./course-card"
import { useCourseService } from "@/services/course";

export default function   CourseExplorer() {
  const [courses, setCourses] = useState<Courses[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory] = useState("All Categories")
  const [priceRange] = useState([0, 100000])

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === "All Categories" || course.category.toLowerCase() === selectedCategory.toLowerCase()
    const matchesPrice = course.price >= priceRange[0] && course.price <= priceRange[1]
    return matchesSearch && matchesCategory && matchesPrice
  })

  const fetchCourses = useCallback(() => {
    useCourseService.getCourseList()
      .then((data) => setCourses(Array.isArray(data) ? data : [data]))
      .catch((error) => setError(error instanceof Error ? error.message : 'An unknown error occurred'))
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);
  
  if (error) {
    return <div className="text-center mt-8">{error}</div>
  }
  
  return (
    <div className="min-h-screen bg-[#e2def4]">
      <div className="bg-gradient-to-br from-[#0f1116] via-[#151934] to-[#1a1245] mb-8 px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-2">Explore Our Courses</h1>
        <p className="text-gray-400">
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

