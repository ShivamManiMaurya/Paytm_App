<h1 align="center">PAYTM_APP</h1>

<p align="center"><i>A Hands-On Journey to Build a Full-Stack Paytm Clone with Next.js, Prisma, and Turborepo</i></p>

<p align="center">
  <img src="https://img.shields.io/github/last-commit/ShivamManiMaurya/paytm_app?style=for-the-badge" alt="Last Commit" />
  <img src="https://img.shields.io/badge/framework-Next.js-000000?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/backend-Express.js-404D59?style=for-the-badge&logo=express" alt="Express.js" />
  <img src="https://img.shields.io/badge/monorepo-Turborepo-3178C6?style=for-the-badge&logo=turbo" alt="Turborepo" />
  <img src="https://img.shields.io/badge/database-PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/ORM-Prisma-2D3748?style=for-the-badge&logo=prisma" alt="Prisma" />
  <img src="https://img.shields.io/badge/styling-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/github/languages/top/ShivamManiMaurya/paytm_app?label=TypeScript&color=blue&style=for-the-badge" />
  <img src="https://img.shields.io/github/languages/count/ShivamManiMaurya/paytm_app?style=for-the-badge&color=blue" />
</p>

---

## 📚 Table of Contents

- [📖 Introduction](#introduction)
- [🎨 UI/UX](#uiux)
  - [Signup Page](#signup-page)
  - [Login Page](#login-page)
  - [Landing Page (All States)](#landing-page-all-states)
  - [User Home Page](#user-home-page)
  - [Transfer Page](#transfer-page)
  - [Transactions Page](#transactions-page)
  - [P2P Transfer Page](#p2p-transfer-page)
  - [Merchant UI (Future)](#merchant-ui-future)
- [🧰 Tech Stack](#tech-stack)
- [🔐 Authentication](#authentication)
- [🔗 Links](#links)
- [👨‍💻 Author](#author)

---

## 📖 Introduction

**PAYTM_APP** is a full-stack Paytm clone developed as part of the [100xDevs](https://app.100xdevs.com) initiative.

This project showcases:

- ✅ End-to-end authentication
- 💳 Wallet & P2P transfers
- 🔄 Webhook simulation
- 🏦 Transaction tracking
- ⚡ Turbocharged monorepo dev flow

Built with **Next.js**, **PostgreSQL**, **Prisma**, and **Tailwind**, the app offers a production-grade architecture.

---

## 🎨 UI/UX

### 📝 Signup Page

![Signup Page](./public/screens/paytm-01-signup-page.png)

- Fields: Full Name, Phone, Email, Password
- Form validation with error prompts
- After signup → redirected to login

---

### 🔑 Login Page

![Login Page](./public/screens/paytm-02-login.png)

- Login with Phone & Password
- Validates via server + bcrypt
- Uses HTTP-only cookies
- Redirects to protected dashboard

---

### 🏠 Landing Page (All States)

#### 🟦 Before Login

![Before Login Landing](./public/screenshots/paytm-00-before-sigin-landing-page.png)

- Public landing page with Login/Signup options

#### 🟩 After Login

![After Login Landing](./public/screenshots/paytm-03-after-login-landing-page.png)

- Personalized welcome with “Get Started”

#### ⏳ Loading State

![Loading State](./public/screenshots/paytm-04-after-login-landing-page-loadingstate.png)

- Temporary screen before navigating to dashboard

---

### 🏡 User Home Page

![User Home Page](./public/screenshots/paytm-05-homepage.png)

- Shows current balance
- Recent transactions
- Filters by: All / Send / Receive / Add
- Displays: name, status, type, amount, date

---

### 💸 Transfer Page

![Transfer Page](./public/screenshots/paytm-06-transferpage.png)

- Input: Amount + Bank
- Simulated NetBanking flow
- Manual or Auto webhook trigger
- Breakdown of balance:
  - Unlocked
  - Locked
  - Total
- Lists recent wallet top-ups

---

### 📄 Transactions Page

![Transactions Page](https://dummyimage.com/600x400/cccccc/000000&text=Transactions+Page)

- Complete transaction history
- Filters by:
  - Status (Success / Failed / Pending)
  - Type (Add / Payment / Refund)
  - Date
- Responsive UI for all screen sizes

---

### 🔁 P2P Transfer Page

![P2P Transfer Page](https://dummyimage.com/600x400/cccccc/000000&text=P2P+Transfer+Page)

- Transfer funds to another user
- Input: Phone Number + Amount
- Validates recipient exists
- Real-time success/failure feedback

---

## 🧰 Tech Stack

- **Turborepo** – High-performance monorepo setup
- **Next.js** – Full-stack React framework
- **TypeScript** – Type-safe JavaScript
- **Tailwind CSS** – Utility-first styling
- **PostgreSQL** – Database
- **Prisma ORM** – DB schema and queries
- **Express.js** – Backend APIs and webhook
- **Zustand** – Lightweight state management

---

## 🔐 Authentication

### ✅ User Credentials Flow

- Implemented via **NextAuth.js (Credentials Provider)**
- Passwords hashed using **bcryptjs**
- Sessions handled via **HTTP-only cookies**
- Fully secure and scalable auth

### 🔐 Tools

- [NextAuth.js](https://next-auth.js.org/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [MDN Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

---

## 🔗 Links

- 🛠 [Frontend Repo](https://github.com/ShivamManiMaurya/blog-post-app-frontend)
- 🌐 [Live Demo](https://mern-blog-post-app-five.vercel.app)

---

## 👨‍💻 Author

- **Website**: [shivammanimaurya.github.io](https://shivammanimaurya.github.io/my_portfolio_website/)
- **GitHub**: [@ShivamManiMaurya](https://github.com/ShivamManiMaurya)
- **LinkedIn**: [@shivammanimaurya](https://www.linkedin.com/in/shivammanimaurya)

---
