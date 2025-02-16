import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Clock,
  Users,
  Star,
  BookOpen,
  Target,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

const courses = [
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

export default function CourseDetailsPage() {
  const course = courses[0];
  return (
    <main className="min-h-screen bg-gradient-to-br bg-[#e2def4] py-4">
      <div className="container mx-auto px-6">
        <Link
          href="/courses"
          className="inline-flex items-center hover:text-gray-700 text-[#0c0d15]/90  mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Courses
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-black/80 mb-4">
                {course?.title}
              </h1>
              <p className="text-gray-700">{course?.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black/80 mb-4">
                What You&apos;ll Learn
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {course?.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5" />
                    <span className="text-gray-700">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black/80 mb-4">
                Course Curriculum
              </h2>
              <Card className="p-6 bg-[#12152b] hover:shadow-md hover:shadow-purple-500">
                <div className="space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    {course?.curriculum.map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`section-${index}`}
                        className="border-gray-800"
                      >
                        <AccordionTrigger className="text-white hover:text-white:no-underline">
                          <div className="flex items-center gap-3">
                            <BookOpen className="h-5 w-5 text-white" />
                            <span>{item}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-400">
                          <ul className="space-y-2">
                            <li>Lesson 1: Introduction to {item}</li>
                            <li>Lesson 2: Core Concepts of {item}</li>
                            <li>Lesson 3: Practical Applications</li>
                            <li>Lesson 4: Assessment & Review</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </Card>
            </div>
          </div>

          {/* Enrollment Card */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-4 bg-[#12152b]">
              <img
                src={course?.image}
                alt={course?.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              {/* <Image
                src={placeholder}
                alt="course title"
                fill
                className="w-full h-48 object-cover rounded-lg mb-6"
              /> */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">
                    TZS {course?.price.toLocaleString()}
                  </span>
                  <Badge variant="secondary">{course?.level}</Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>{course?.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users className="h-4 w-4" />
                    <span>{course?.students} students</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Star className="h-4 w-4 fill-primary" />
                    <span>{course?.rating} rating</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Target className="h-4 w-4" />
                    <span>{course?.level}</span>
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      Enroll Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Complete Your Enrollment</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p>Course: {course?.title}</p>
                      <p>Price: TZS {course?.price.toLocaleString()}</p>
                      {/* Add payment form/integration here */}
                      <Button className="w-full">Pay Now</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
