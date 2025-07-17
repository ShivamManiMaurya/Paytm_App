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
  - [User Transactions Page](#User-transactions-page)
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

## UI/UX

### 📝 Signup Page

![Signup Page](./public/screens/paytm-01-signup-page.png)

- Allows users to register using:
  - Full Name
  - Phone Number
  - Email
  - Password
- Input validations and inline error messages
- Show/hide password toggle
- After successful signup, the user is redirected to the login page

---

### 🔑 Login Page

![Login Page](./public/screens/paytm-02-login.png)

- User logs in with Phone and Password
- Authenticates using secure backend logic (NextAuth or custom handler)
- Stores the session using **HTTP-only cookies**
- On success, user is redirected to the protected landing/dashboard page

---

### 🏠 Post-Login Landing Page

![Landing Page](./public/screens/paytm-03-after-login-landing-page.png)

- Displays welcome message with user's name
- Shows user-specific data securely
- Offers a **Logout** button that clears the session and redirects to login
- Protected route: unauthenticated access redirects to login automatically

---

### 🏠 Landing Page States

#### 🟦 Before Signup/Login

Users who are not logged in are shown this public landing page with **Signup** and **Login** options.

![Before Login Landing Page](./public/screenshots/paytm-00-before-sigin-landing-page.png)

---

#### 🟩 After Login Landing Page

Once logged in, users land on a personalized welcome screen with a **"Get Started"** button to proceed to the main dashboard.

![After Login Landing Page](./public/screenshots/paytm-03-after-login-landing-page.png)

---

#### ⏳ Loading State (Before Home Page)

After clicking "Get Started", the app enters a loading state briefly before navigating to the main dashboard.

![Loading State](./public/screenshots/paytm-04-after-login-landing-page-loadingstate.png)

### 🛡️ Tech Used for Auth

- [NextAuth.js](https://next-auth.js.org/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) – For hashing passwords
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) – For custom login/signup logic
- [Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) – For secure session management

---

## 🏡 User Home Page

After login, users are directed to the Home Page where they can:

- ✅ View their **current balance**
- 📄 See a list of their **recent transactions**
- 🧮 Filter transactions by type: **All**, **Send**, **Receive**, or **Add**

Each transaction entry includes:
- The **recipient or source**
- **Transaction status** (e.g., Success)
- **Type** of transaction (Send/Add)
- **Amount** (color-coded for debit/credit)
- **Date & time** of transaction

This gives users a quick, intuitive overview of their account activity and funds.

![User Home Page](./public/screenshots/paytm-05-homepage.png)

## 💸 Transfer Page (Add Money to Wallet)

The **Transfer** page allows users to **add money** to their wallet from a selected bank. It is a core part of the application’s wallet management system.

### ✍️ Features:
- **Input Fields:**
  - **Amount** input
  - **Bank selection** dropdown

- **Add Money Button:**
  - Clicking it simulates a NetBanking redirection (dummy flow for development).
  
- **Manual Webhook Trigger:**
  - Since it's a dummy wallet platform, users must click the **"Trigger Webhook"** button to simulate the bank's response.
  - This mimics how real payment gateways notify the server of transaction status.

- **Automation Option:**
  - Option to **automate webhook trigger** post-action for smoother flow.

- **Balance Summary:**
  - Unlocked balance
  - Locked balance
  - Total available balance

- **Recent Additions Panel:**
  - Lists all successful recent wallet additions
  - Includes amount, status, and timestamp

### 🖼️ Screenshot:
![Transfer Page](./public/screenshots/paytm-06-transferpage.png)

## 📄 User Transactions Page

The **Transactions** page displays a comprehensive list of all transactions performed by the user, including wallet additions, payments, and refunds.

### 🔍 Features:

- **Transaction Listing:**
  - Each transaction entry includes:
    - ✅ **Status** (e.g., Success, Failed, Pending)
    - 🔁 **Type** (e.g., Add Money, Payment, Refund)
    - 💰 **Amount**
    - 📅 **Date & Time**

- **Filters:**
  - Users can apply multiple filters to customize the view:
    - **By Status:** Filter by success, failed, or pending transactions
    - **By Type:** Filter by transaction type
    - **By Date:** View transactions for a specific date or range

- **Responsive UI:**
  - Optimized for mobile and desktop devices

### 🖼️ Screenshot:

![Transactions Page](https://dummyimage.com/600x400/cccccc/000000&text=Transactions+Page)

## 💸 P2P Transfer (Person-to-Person Transfer) Page

The **P2P Transfer** page allows users to send money securely to other registered users within the app ecosystem using their phone numbers.

### 🔑 Key Features:

- **Send Money Instantly:**
  - Transfer funds to other users by entering:
    - 📱 **Recipient's Phone Number**
    - 💵 **Amount to Send**

- **Validation:**
  - Automatic check for whether the phone number belongs to a registered user
  - Prompt error message if user is not found

- **Secure Transfer:**
  - All transactions are encrypted and processed through secure channels

- **User Feedback:**
  - Real-time success or failure confirmation messages

### 🖼️ Screenshot:

![P2P Transfer Page](https://dummyimage.com/600x400/cccccc/000000&text=P2P+Transfer+Page)




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

### Links

-   [Github Solution](https://github.com/ShivamManiMaurya/blog-post-app-frontend)
-   [Live Site](https://mern-blog-post-app-five.vercel.app)

## Author

-   Website - [Shivam Maurya](https://shivammanimaurya.github.io/my_portfolio_website/)
-   GitHub Page - [Shivam Maurya GitHub](https://github.com/ShivamManiMaurya)
-   Linkedin - [@shivammanimaurya](https://www.linkedin.com/in/shivammanimaurya)
