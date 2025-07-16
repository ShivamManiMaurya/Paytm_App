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

<p align="center"><i>Built with the tools and technologies:</i></p>

<p align="center">
  <img src="https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white" />
  <img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" />
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
  <img src="https://img.shields.io/badge/Autoprefixer-DD3735?style=for-the-badge&logo=autoprefixer&logoColor=white" />
  <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" />
  <img src="https://img.shields.io/badge/esbuild-yellow?style=for-the-badge&logo=esbuild&logoColor=black" />
  <img src="https://img.shields.io/badge/.ENV-yellow?style=for-the-badge" />
  <br/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/GNU%20Bash-4EAA25?style=for-the-badge&logo=gnubash&logoColor=white" />
  <img src="https://img.shields.io/badge/Turbo-00ADD8?style=for-the-badge&logo=turbo&logoColor=white" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
  <img src="https://img.shields.io/badge/YAML-red?style=for-the-badge&logo=yaml&logoColor=white" />
</p>


## 📚 Table of Contents

- [📖 Introduction](#-introduction)

- [🎨 UI/UX](#-uiux)
  - [Login Page](#login-page)
  - [Landing Page](#landing-page)
  - [User Home Page](#user-home-page)
  - [User Transfer Page](#user-transfer-page)
  - [Merchant UI (Future)](#merchant-ui-future)

- [🧰 Tech Stack](#-tech-stack)
  - Turborepo, Next.js (Frontend & Backend), TypeScript, Node.js  
  - Tailwind CSS, Express.js, PostgreSQL, Prisma ORM  
  - Zustand (State Management)

- [🔐 Authentication with NextAuth](#-authentication-with-nextauth)



## 📖 Introduction

**PAYTM_APP** is a full-stack clone of the popular Indian payments platform, Paytm — built as part of the [100xDevs](https://app.100xdevs.com) program.

This project demonstrates a production-grade implementation of a digital payments ecosystem using cutting-edge web technologies. It includes user and merchant flows, secure authentication, real-time state updates, and an extensible architecture — all within a monorepo setup using **Turborepo**.

The primary objective was to recreate core Paytm features like user login, QR-based transactions, and wallet balance management — while maintaining clean architecture, scalability, and modularity across the stack.

Whether you're here to learn from the code, explore modern web dev practices, or see how different tools integrate in a real-world app — you're in the right place!

## 🧰 Tech Stack

This project is built using the following tools and technologies:

- [**Turborepo**](https://turbo.build/repo) – Monorepo build system for high-performance dev workflows  
- [**Next.js**](https://nextjs.org/) – Full-stack React framework for both frontend and backend  
- [**TypeScript**](https://www.typescriptlang.org/) – Strongly typed JavaScript for better code safety and tooling  
- [**Node.js**](https://nodejs.org/) – JavaScript runtime used in backend and tooling  
- [**Tailwind CSS**](https://tailwindcss.com/) – Utility-first CSS framework for building custom UIs quickly  
- [**Express.js**](https://expressjs.com/) – Fast, minimal backend framework used for auxiliary services  
- [**PostgreSQL**](https://www.postgresql.org/) – Open-source relational database used for storing application data  
- [**Prisma ORM**](https://www.prisma.io/) – Type-safe ORM for managing PostgreSQL data with ease  
- [**Zustand**](https://zustand-demo.pmnd.rs/) – Lightweight state management library for React  
- [**NextAuth.js**](https://next-auth.js.org/) – Authentication library for Next.js with credential and OAuth support

## 🔐 Authentication with NextAuth

 - [User App Auth (Credentials)](#user-app-auth-credentials)
  - [Merchant App Auth (Google) (Future)](#merchant-app-auth-google-future)
  - [Client-side Auth Context](#client-side-auth-context)
  - [Server-side Auth Verification](#server-side-auth-verification)

Authentication in this project is handled using [NextAuth.js](https://next-auth.js.org/), enabling secure and scalable login flows for both users and merchants.

### ✅ User App Auth (Credentials)

- Users sign up or log in using **phone number and password**.
- Passwords are hashed using **bcrypt** before storing them in the database.
- If a user doesn't exist, a new one is automatically created upon login attempt.
- This flow is powered by the **Credentials Provider** from NextAuth.


