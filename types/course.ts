interface Courses {
    id: string
    title: string
    instructor: string
    duration: number
    enrolled: number
    ratings: number
    price: number
    category: string
}

interface APICourses {
    id: string
    title: string
    instructor: string
    duration: number
    price: string
    category: string
}
