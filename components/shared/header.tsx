import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="font-heading text-xl font-bold text-primary">VS Academy</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-gray-600 hover:text-primary">Home</a>
          <a href="/courses" className="text-gray-600 hover:text-primary">Courses</a>
          <a href="/instructor" className="text-gray-600 hover:text-primary">Instructor</a>
          <a href="/learner" className="text-gray-600 hover:text-primary">Learner</a>
        </nav>
        <div className="flex gap-2">
        <Button variant={"outline"} className="">
          Become an Instructor
        </Button>
        <Button className="bg-primary hover:bg-primary-dark text-white">
          Sign in
        </Button>

        </div>
      </div>
    </header>
  );
};

export default Header;