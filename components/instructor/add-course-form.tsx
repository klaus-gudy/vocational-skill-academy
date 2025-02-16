import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Loader2, Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const courseSchema = z.object({
  // Basic Information
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(50, "Description must be at least 50 characters"),
  category: z.enum(["Coding", "Tailoring", "Agriculture"]),
  level: z.enum(["Beginner", "Intermediate", "Advanced"]),

  // Course Details
  price: z.number().min(1000, "Price must be at least 1000 TZS"),
  duration: z.string().min(1, "Duration is required"),
  image: z.string().url("Please enter a valid image URL"),

  // Learning Content
  objectives: z.array(z.string()).min(1, "Add at least one learning objective"),
  curriculum: z.array(z.string()).min(1, "Add at least one curriculum item"),
});

type CourseFormData = z.infer<typeof courseSchema>;

const steps = [
  {
    id: "basic",
    title: "Basic Information",
    description: "Start with the course fundamentals",
  },
  {
    id: "details",
    title: "Course Details",
    description: "Add specific course information",
  },
  {
    id: "content",
    title: "Learning Content",
    description: "Define what students will learn",
  },
];

export function AddCourseForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting] = useState(false);

  const form = useForm<CourseFormData>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "Coding",
      level: "Beginner",
      price: 0,
      duration: "",
      image: "",
      objectives: [""],
      curriculum: [""],
    },
  });

  const handleNext = async () => {
    const fields = getFieldsForStep(currentStep);
    const isValid = await form.trigger(fields);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const getFieldsForStep = (step: number): (keyof CourseFormData)[] => {
    switch (step) {
      case 0:
        return ["title", "description", "category", "level"];
      case 1:
        return ["price", "duration", "image"];
      case 2:
        return ["objectives", "curriculum"];
      default:
        return [];
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-primary-accent text-white hover:bg-orange-600 hover:text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create product group
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-primary-accent">
            Create a product group
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-2 py-2">
          <Form {...form}>
            <form
              className="space-y-8"
            >
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex justify-between">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          index <= currentStep
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <span className="text-sm mt-2">{step.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Content */}
              <div className="space-y-6">
                {currentStep === 0 && (
                  <>
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Course Title</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter course title"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Enter course description"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Coding">Coding</SelectItem>
                                <SelectItem value="Tailoring">
                                  Tailoring
                                </SelectItem>
                                <SelectItem value="Agriculture">
                                  Agriculture
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="level"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Level</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Beginner">
                                  Beginner
                                </SelectItem>
                                <SelectItem value="Intermediate">
                                  Intermediate
                                </SelectItem>
                                <SelectItem value="Advanced">
                                  Advanced
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </>
                )}

                {currentStep === 1 && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Price (TZS)</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                {...field}
                                onChange={(e) =>
                                  field.onChange(Number(e.target.value))
                                }
                                placeholder="Enter price"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="duration"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Duration</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="e.g., 8 weeks" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="image"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Image URL</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Enter image URL" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {currentStep === 2 && (
                  <>
                    <FormField
                      control={form.control}
                      name="objectives"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Learning Objectives</FormLabel>
                          <div className="space-y-2">
                            {field.value.map((_, index) => (
                              <FormControl key={index}>
                                <Input
                                  value={field.value[index]}
                                  onChange={(e) => {
                                    const newObjectives = [...field.value];
                                    newObjectives[index] = e.target.value;
                                    field.onChange(newObjectives);
                                  }}
                                  placeholder="Enter learning objective"
                                />
                              </FormControl>
                            ))}
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="mt-2"
                            onClick={() => field.onChange([...field.value, ""])}
                          >
                            Add Objective
                          </Button>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="curriculum"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Curriculum</FormLabel>
                          <div className="space-y-2">
                            {field.value.map((_, index) => (
                              <FormControl key={index}>
                                <Input
                                  value={field.value[index]}
                                  onChange={(e) => {
                                    const newCurriculum = [...field.value];
                                    newCurriculum[index] = e.target.value;
                                    field.onChange(newCurriculum);
                                  }}
                                  placeholder="Enter curriculum item"
                                />
                              </FormControl>
                            ))}
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="mt-2"
                            onClick={() => field.onChange([...field.value, ""])}
                          >
                            Add Curriculum Item
                          </Button>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={currentStep === 0 ? handleBack : handleBack}
                >
                  {currentStep === 0 ? (
                    "Cancel"
                  ) : (
                    <>
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Back
                    </>
                  )}
                </Button>

                <Button
                  type={currentStep === steps.length - 1 ? "submit" : "button"}
                  onClick={
                    currentStep === steps.length - 1 ? undefined : handleNext
                  }
                  disabled={isSubmitting}
                >
                  {currentStep === steps.length - 1 ? (
                    isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      "Create Course"
                    )
                  ) : (
                    <>
                      Next
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
