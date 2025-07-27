<h1 align="center">PAYTM_APP</h1>

<p align="center"><i>A Hands-On Journey to Build a Full-Stack Paytm Clone with Next.js, Prisma, and Turborepo</i></p>

<p align="center">
  <!-- Project Status -->
  <img src="https://img.shields.io/github/last-commit/ShivamManiMaurya/paytm_app?style=for-the-badge" alt="Last Commit" />
  <img src="https://img.shields.io/github/languages/top/ShivamManiMaurya/paytm_app?label=TypeScript&color=blue&style=for-the-badge" />
  <img src="https://img.shields.io/github/languages/count/ShivamManiMaurya/paytm_app?style=for-the-badge&color=blue" />
  <br/>

  <!-- Frameworks & Tools -->
  <img src="https://img.shields.io/badge/Backend-Express.js-404D59?style=for-the-badge&logo=express" alt="Express.js" />
  <img src="https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Framework-Next.js-000000?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/Monorepo-Turborepo-3178C6?style=for-the-badge&logo=turbo" alt="Turborepo" />
  <img src="https://img.shields.io/badge/ORM-Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/Database-PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Linting-ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/Formatting-Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" />
  <img src="https://img.shields.io/badge/Requests-Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
  <br/>

  <!-- Dev Tools -->
  <img src="https://img.shields.io/badge/Build-esbuild-yellow?style=for-the-badge&logo=esbuild&logoColor=black" />
  <img src="https://img.shields.io/badge/Autoprefixer-DD3735?style=for-the-badge&logo=autoprefixer&logoColor=white" />
  <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white" />
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
  <img src="https://img.shields.io/badge/YAML-red?style=for-the-badge&logo=yaml&logoColor=white" />
  <img src="https://img.shields.io/badge/ENV Variables-yellow?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnubash&logoColor=white" />
  <img src="https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white" />
  <img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" />
</p>




## 📚 Table of Contents

- [📖 Introduction](#-introduction)

- [🎨 UI/UX](#-uiux)
  - [📝 Signup Page](#-signup-page)
  - [🔑 Login Page](#-login-page)
  - [🏠 Landing Page](#-landing-page-states)
  - [🏡 User Home Page](#-user-home-page)
  - [💸 Transfer Page](#-transfer-page-add-money-to-wallet)
  - [📄 Transactions Page](#-user-transactions-page)
  - [💸 P2P Transfer Page](#-p2p-transfer-persontoperson-transfer-page)

- [🧰 Tech Stack](#-tech-stack)

- [🔐 Authentication with NextAuth](#-authentication-with-nextauth)
- [🚀 Future Scope](#-future-scope)
- [🔗 Links](#-links)
- [👨‍💻 Author](#author)


## 📖 Introduction

**PAYTM_APP** is a full-stack clone of the popular Indian payments platform.

This project demonstrates a production-grade implementation of a **digital wallet and peer-to-peer (P2P) payment** system using cutting-edge web technologies like Next.js, Prisma, and Turborepo — all structured within a scalable **monorepo setup**.

The app currently allows users to:

- 🔐 Sign up and log in with phone & password
- 🏦 View and manage wallet balance
- 💸 Add money to their wallet (with simulated webhook)
- 🔁 Send money to other registered users
- 📄 Track all their transactions with filters and summaries

With a focus on clean architecture, modularity, and real-world practices, **PAYTM_APP** is ideal for developers looking to learn modern full-stack development workflows.

Whether you're here to explore the codebase, understand monorepo architecture, or get inspired by real-world payment flows — you're in the right place!

## UI/UX

### 📝 Signup Page

![Signup Page](https://ik.imagekit.io/clynyzjux/paytm-01-signup-page.png?updatedAt=1753619297911)

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

![Login Page](https://ik.imagekit.io/clynyzjux/paytm-02-login.png?updatedAt=1753619297682)

- User logs in with Phone and Password
- Authenticates using secure backend logic (NextAuth or custom handler)
- Stores the session using **HTTP-only cookies**
- On success, user is redirected to the protected landing/dashboard page

---

### 🏠 Landing Page States

#### 🟦 Before Signup/Login

Users who are not logged in are shown this public landing page with **Signup** and **Login** options.

![Before Login Landing Page](https://ik.imagekit.io/clynyzjux/paytm-00-before-sigin-landing-page.png?updatedAt=1753619303570)

---

#### 🟩 After Login Landing Page

Once logged in, users land on a personalized welcome screen with a **"Get Started"** button to proceed to the main dashboard.

![After Login Landing Page](https://ik.imagekit.io/clynyzjux/paytm-03-after-login-landing-page.png?updatedAt=1753619303683)

---

#### ⏳ Loading State (Before Home Page)

After clicking "Get Started", the app enters a loading state briefly before navigating to the main dashboard.

![Loading State](https://ik.imagekit.io/clynyzjux/paytm-04-after-login-landing-page-loadingstate.png?updatedAt=1753619303443)

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

![User Home Page](https://ik.imagekit.io/clynyzjux/paytm-05-homepage.png?updatedAt=1753619297896)

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
![Transfer Page](https://ik.imagekit.io/clynyzjux/paytm-06-transferpage.png?updatedAt=1753619299946)

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

![Transactions Page](https://ik.imagekit.io/clynyzjux/paytm-08-transactionspage-with-filterselect.png?updatedAt=1753619298448)

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

![P2P Transfer Page](https://ik.imagekit.io/clynyzjux/paytm-09-p2ptransaction.png?updatedAt=1753619297944)




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

### 🛡️ Tech Used for Auth

- [NextAuth.js](https://next-auth.js.org/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) – For hashing passwords
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) – For custom login/signup logic
- [Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) – For secure session management

## 🚀 Future Scope

The current version of **PAYTM_APP** focuses on user-centric features like signup, wallet management, P2P transfers, and transaction tracking. Moving forward, the project aims to expand its scope to support **merchants and business payments**.

### 🛒 Merchant Ecosystem (Planned)

The next major phase will introduce a **merchant module**, enabling users to:

- 🔄 **Pay registered merchants** via QR codes or phone numbers
- 🛍️ View and manage **goods/services** listed by merchants
- 📦 Merchants can:
  - Register and manage their store
  - Create a product/service catalog
  - Generate dynamic or static QR codes for receiving payments
- 📊 Merchants will have access to a **dashboard** showing:
  - Total earnings
  - Daily/weekly/monthly reports
  - Transaction breakdowns

### 👨‍💼 Tech & Features for Merchant App (Planned)

- OAuth-based login via **Google** using `NextAuth`
- Separate merchant schema in the **PostgreSQL + Prisma** setup
- Role-based access control to distinguish between users and merchants
- Secure payment flow validations and webhooks
- Future integration with real UPI/payment APIs for live functionality

---

Stay tuned for updates! The merchant flow will complete the digital payment loop — giving users the ability to not only manage money but also **spend** it in a real-world simulation.


## Links

-   [Github Solution](https://github.com/ShivamManiMaurya/Paytm_App)
-   [Live Site](https://paytm-app-user-app-lovat.vercel.app)

## Author

-   Website - [Shivam Maurya](https://shivammanimaurya.github.io/my_portfolio_website/)
-   GitHub Page - [Shivam Maurya GitHub](https://github.com/ShivamManiMaurya)
-   Linkedin - [@shivammanimaurya](https://www.linkedin.com/in/shivammanimaurya)
