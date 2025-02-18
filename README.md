# Vocational Skill Academy

## Overview

VAS is an online platform that empowers Tanzanian youth to learn practical skills (e.g., coding, tailoring, agriculture) through affordable, high-quality courses. Instructors can create and manage courses, while students can browse, enroll, and pay for courses using Azam Pay.


## Features

- **User Authentication**: Register and log in functionality.
- **Service Selection**: Display available online courses with pricing information.
- **Payment Integration**: Users can select a course and make payments using Azam Pay.
- **Transaction History**: Users can view their payment history.
- **Responsive UI**: Modern, clean, and mobile-friendly design.

## API Integration

The frontend connects to our Django backend API. Make sure the backend server is running and the API URL is correctly configured in your environment variables.

## Mobile Money Integration

The application supports various mobile money payment providers:

- **Airtel**
- **Tigo**
- **Halopesa**
- **Mpesa**

Payment status updates are handled through **webhook callbacks**.

## Authentication

The application uses **JWT authentication**. Tokens are stored securely and refreshed automatically when needed.

## Contributing and installation

We welcome contributions! Follow these steps to contribute:

1. **Clone the repository**
```
git clone https://github.com/klaus-gudy/vocational-skill-academy.git
```
2. **Install dependency**  
```
npm install
```
3. **Environmental setup**
create a ```.env.local``` and add a backend URL

4. **Run the development server**
```
npm run dev
```
> [!TIP]
> Why the hustle while you can view on live environment 

## 🚀 Live Demo

**Front-End:** [Vocational Skill Academy](vocational-skill-academy-git-main-klaus-gudys-projects.vercel.app/)

**Project Link:** [https://github.com/klaus-gudy/vocational-skill-academy](https://github.com/klaus-gudy/vocational-skill-academy)

> Check @klaus-gudy for help