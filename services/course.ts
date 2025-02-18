import api from "./api";

export const useCourseService = {
    getCourseList: async () => {
      try {
        const response = await api.get("/api/courses/");
        const transformedData: Courses[] = response.data.map((item: APICourses) => ({
            id: item.id,
            title: item.title,
            instructor: item.instructor,
            duration: item.duration,
            enrolled: "34",
            ratings: 4.5,
            price: item.price,
            category: item.category
        }));
        return transformedData;
      } catch (error) {
        throw error;
      }
    },
  
  };