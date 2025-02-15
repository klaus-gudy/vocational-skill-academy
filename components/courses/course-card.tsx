import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Clock, Star, Users } from "lucide-react";
import placeholder from "@/public/placeholder.png";

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    category: string;
    instructor: string;
    duration: number;
    enrolled: number;
    ratings: number;
    price: number;
    image: string;
  };
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="bg-[#272c4d] transition-all duration-300">
      <CardHeader className="p-0">
        <div className="aspect-video relative">
          <Image
            src={placeholder}
            alt={course.title}
            fill
            className="object-cover rounded-t-lg"
          />
          <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white px-2 py-1 rounded-full text-sm font-medium">
            {course.category}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">
          {course.title}
        </h3>
        <p className="text-sm text-gray-400 mb-4">by {course.instructor}</p>
        <div className="flex justify-between text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration} weeks</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{course.enrolled} enrolled</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-lg font-semibold text-white">
          {course.price} TZS
        </span>
        <Button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white">
          View courses
        </Button>
      </CardFooter>
    </Card>
  );
}
