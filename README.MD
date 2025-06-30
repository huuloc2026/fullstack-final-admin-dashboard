# 📌 Project Name: Scalable Subscription-Based System

## 📖 Overview
This project is a high-performance, scalable subscription-based system designed with a microservices architecture. The system supports secure transactions, real-time order tracking, and optimized API responses using Redis caching and database optimizations. The application includes an admin dashboard with Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR) to enhance performance and provide a seamless user experience.
## 📝 Notes:

This repository is a merged result of two separate development repositories:

- **Front-end:** [https://github.com/huuloc2026/admin-dashboard](https://github.com/huuloc2026/admin-dashboard)
- **Back-end:** [https://github.com/huuloc2026/nestjs-hexagonal-2025](https://github.com/huuloc2026/nestjs-hexagonal-2025)

## 🎬 Overview
- Video Demo: [Click here](https://www.youtube.com/watch?v=4OVb5hOW2Js)

## 👀 Screenshot of project

## 🚀 Features
- **Optimized Performance**: Improved API response speed by 40% through optimized SQL queries and Redis caching.
- **Secure Transactions**: Processed over 500 simulated transactions securely using Stripe API.
- **Scalable Microservices Architecture**: Reduced downtime and improved maintainability through a well-structured microservices system.
- **Authentication & Authorization**: Developed JWT authentication with role-based access control (RBAC) and API Gateway for secure user management.
- **Real-time Updates**: Designed RESTful APIs with WebSocket integration for real-time order tracking.
- **Admin Dashboard**: Built using Next.js with SSR and ISR, providing fast and optimized rendering.
- **Containerization**: Services are containerized using Docker, and multi-container orchestration is managed with Docker Compose.

## 🛠 Tech Stack
- **Frontend**: Next.js (React, TypeScript, SSR, ISR)
- **Backend**: NestJS (TypeScript, REST API, WebSocket)
- **Database**: PostgreSQL (Prisma ORM)
- **Caching & Queue**: Redis, BullMQ
- **Payments**: Stripe API
- **Containerization**: Docker, Docker Compose

## ⚡ Installation & Setup
### 1️⃣ Clone the Repository
```bash
  git clone https://github.com/huuloc2026/fullstack-final-admin-dashboard
```

### 2️⃣ Set Up Environment Variables
Create a `.env` file and configure necessary variables such as database connection, Redis, and Stripe keys.

### 3️⃣ Start the Services

- setup .env for Front end - Nextjs
```bash
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
```
- setup .env for Back end-Nestjs
```bash
APP_PORT=
GLOBAL_PREFLX=
DATABASE_URL=
CACHE_URL=
CACHE_TTL=
CACHE_HOST=
CACHE_PORT=
CACHE_username=
CACHE_password=


AT_SECRET=
AT_EXPIRE=
RT_SECRET=
RT_EXPIRE=

#SMTP 
MAIL_SERVICE=
MAIL_HOST=
MAIL_PORT=
MAIL_SECURE=
MAIL_USER=
MAIL_PASS=


#Stripe
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=


```
- Setup database
```bash
  cd be-nestjs
```
```bash
  docker-compose up --d
```

### 4️⃣ Access the Application
- Frontend: `http://localhost:3000`
- API Gateway: `http://localhost:8386`
- Admin Dashboard: `http://localhost:3000/admin`

## 📌 Future Enhancements
- Implementing GraphQL support for flexible API queries.
- Adding multi-tenant support for enterprise-level scalability.
- Enhancing CI/CD pipeline for seamless deployment.

## 🤝 Contribution
Feel free to fork the repository, create a branch, and submit a pull request. We welcome contributions to improve the system further!

## 📜 License
This project is licensed under the MIT License.

---
![Screenshot](be-nestjs/screenshot/bullboard.png/)
![Screenshot](be-nestjs/screenshot/cached-token.png/)
![Screenshot](be-nestjs/screenshot/sendEmail-Bull.png/)
![Screenshot](be-nestjs/screenshot/swagger-ui.png)
![Screenshot](screenshot/fullstack001.png)
![Screenshot](screenshot/fullstack002.png)
![Screenshot](screenshot/fullstack003.png)
![Screenshot](screenshot/fullstack004.png)
![Screenshot](screenshot/fullstack005.png)
![Screenshot](screenshot/fullstack006.png)
![Screenshot](screenshot/fullstack007.png)
![Screenshot](screenshot/fullstack008.png)
![Screenshot](screenshot/fullstack009.png)
![Screenshot](screenshot/fullstack010.png)
![Screenshot](screenshot/fullstack011.png)
![Screenshot](screenshot/fullstack012.png)
![Screenshot](screenshot/fullstack013.png)
![Screenshot](screenshot/fullstack014.png)
![Screenshot](screenshot/fullstack015.png)
![Screenshot](screenshot/fullstack016.png)
![Screenshot](screenshot/fullstack017.png)
![Screenshot](screenshot/fullstack018.png)
![Screenshot](screenshot/fullstack019.png)
![Screenshot](screenshot/fullstack020.png)
![Screenshot](screenshot/fullstack021.png)
![Screenshot](screenshot/fullstack022.png)
---
🚀 **Built with passion by Bui Huu Loc**
