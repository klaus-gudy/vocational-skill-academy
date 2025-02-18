"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import InstructorCourseCard from "./instructor-cards";
import { toast } from "sonner";

export interface Course {
  id: number;
  title: string;
  instructor: string;
  category: string;
  level: string;
  price: number;
  rating: number;
  students: number;
  duration: string;
  image: string;
  description: string;
  objectives: string[];
  curriculum: string[];
}

const sampleCourses: Course[] = [
  {
    id: 2,
    title: "Fashion Design Basics",
    instructor: "Sarah Johnson",
    category: "Tailoring",
    level: "Beginner",
    price: 45000,
    rating: 4.6,
    students: 189,
    duration: "6 weeks",
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Master the fundamentals of fashion design and garment construction. Learn to create your own patterns and bring your designs to life.",
    objectives: [
      "Learn basic sewing techniques",
      "Understand fabric selection and properties",
      "Create basic clothing patterns",
      "Design and construct simple garments",
    ],
    curriculum: [
      "Introduction to Fashion Design",
      "Sewing Basics",
      "Fabric Types and Selection",
      "Garment Construction",
      "Design Principles",
      "Color Theory",
    ],
  },
];

export default function InstructorDashboard() {
  const [courses] = useState<Course[]>(sampleCourses);
  return (
    <div className="min-h-screen bg-[#e2def4]">
      <div className="flex justify-between items-center bg-gradient-to-br from-[#0f1116] via-[#151934] to-[#1a1245]  mb-8 px-4 py-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Courses</h1>
          <p className="text-gray-400">
            Manage your courses and create new ones
          </p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => toast.info("Server down. Please try again later")}>
          <Plus className="w-4 h-4 mr-2" />
          Add New Course
        </Button>
      </div>

      <div className="px-4">
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          {courses.map((course) => (
            <InstructorCourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
