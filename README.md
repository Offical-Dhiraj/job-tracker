# 🚀 AI-Assisted Job Application Tracker

A **full-stack MERN application** that helps users track job applications on a Kanban board and uses **AI to parse job descriptions and generate resume suggestions**.

---

## 📌 Overview

This project allows users to:

* Manage job applications across different stages (Applied → Offer)
* Automatically extract job details using AI
* Generate tailored resume bullet points
* Track progress visually using a Kanban board

Built with a **production-level architecture** using modern tools and best practices.

---

## 🛠️ Tech Stack

### 🔹 Frontend

* React (Vite + TypeScript)
* Tailwind CSS
* Axios

### 🔹 Backend

* Node.js + Express (TypeScript)
* MongoDB + Mongoose
* JWT Authentication
* Zod Validation
* OpenAI API

---

## ✨ Features

### 🔐 Authentication

* Register & Login with JWT
* Secure protected routes
* Persistent login using localStorage

---

### 📊 Kanban Board

* 5 stages:

  * Applied
  * Phone Screen
  * Interview
  * Offer
  * Rejected
* Drag-ready structure
* Clean card-based UI

---

### 🤖 AI Integration

* **Job Description Parser**

  * Extracts: company, role, skills, seniority, location
* **Resume Suggestions**

  * Generates 3–5 tailored bullet points

---

### 📁 Application Management

* Create, update, delete applications
* Status updates (Kanban flow)
* Pagination support
* Ownership-based security

---

## 📂 Project Structure

### Backend

```
backend/
├── src/
│   ├── config/
│   ├── modules/
│   │   ├── auth/
│   │   ├── application/
│   │   └── ai/
│   ├── models/
│   ├── middlewares/
│   ├── utils/
│   ├── app.ts
│   └── server.ts
```

---

### Frontend

```
frontend/
├── src/
│   ├── api/
│   ├── components/
│   ├── features/
│   ├── pages/
│   ├── routes/
│   ├── App.tsx
│   └── main.tsx
```

---

## ⚙️ Environment Variables

Create a `.env` file in the backend:

```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_openai_key
```

Also include `.env.example` in your repo (without values).

---

## 🚀 Getting Started

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/job-tracker.git
cd job-tracker
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔗 API Endpoints

### Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### Applications

* `GET /api/applications`
* `POST /api/applications`
* `PUT /api/applications/:id`
* `PATCH /api/applications/:id/status`
* `DELETE /api/applications/:id`

### AI

* `POST /api/ai/parse`
* `POST /api/ai/resume`

---

## 🧠 Key Design Decisions

* **Service Layer Architecture** → Keeps controllers clean
* **Zod Validation** → Ensures safe input handling
* **JWT Auth** → Secure API access
* **AI Service Isolation** → No logic inside routes
* **MongoDB Indexing** → Improved performance

---

## 🔒 Security Features

* Password hashing with bcrypt
* Rate limiting
* MongoDB query sanitization
* Environment variable protection

---

## 🎯 Future Improvements

* Drag & Drop Kanban (dnd-kit)
* Dashboard analytics
* Search & filter
* Dark mode
* CSV export



---



## 👨‍💻 Author

**Dhiraj Kumar**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!

---
