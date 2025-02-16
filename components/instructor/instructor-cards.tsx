import Image from "next/image";
import { Edit2, Trash2, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import placeholder from "@/public/placeholder.png";

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

interface InstructorCourseCardProps {
  course: Course;
}

export default function InstructorCourseCard({
  course,
}: InstructorCourseCardProps) {
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
          <Badge className="absolute top-2 right-2">{course.level}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">
          {course.title}
        </h3>
        <p className="text-sm text-gray-400 mb-4">{course.category}</p>
        <div className="flex justify-between text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{course.students}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-lg font-semibold text-white">
          {course.price} TZS
        </span>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            <Edit2 className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="destructive">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
