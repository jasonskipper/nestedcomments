# Reddit-Style Nested Comment System

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/React-17+-blue.svg)](https://reactjs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contributing)

A full-stack web application that replicates Reddit's infinitely nested comment system. This project demonstrates how to build a scalable and maintainable application using modern web technologies.

## 📚 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Directory Structure](#-directory-structure)
- [Installation](#-installation)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## ✨ Features

- **Infinite Comment Nesting**: Users can add comments and replies infinitely, mimicking Reddit's comment system.
- **Responsive UI**: Built with React's component-based architecture for a seamless user experience.
- **High-Performance API**: Developed using Fastify and Node.js for efficient server-side operations.
- **Type-Safe Database Operations**: Integrated Prisma ORM with PostgreSQL for reliable data management.

## 🛠 Technologies Used

### Frontend

- **React**
- **Context API**
- **Custom Hooks**
- **CSS**

### Backend

- **Node.js**
- **Fastify**
- **Prisma ORM**
- **PostgreSQL**

## 📂 Directory Structure

```bash
project-root/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Comment.js
│   │   │   ├── CommentForm.js
│   │   │   ├── CommentList.js
│   │   │   ├── IconBtn.js
│   │   │   ├── Post.js
│   │   │   └── PostList.js
│   │   ├── contexts/
│   │   │   └── PostContext.js
│   │   ├── hooks/
│   │   │   ├── useAsync.js
│   │   │   └── useUser.js
│   │   ├── services/
│   │   │   ├── comments.js
│   │   │   ├── makeRequest.js
│   │   │   └── posts.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   ├── .env
│   ├── .gitignore
│   ├── README.md
│   ├── package-lock.json
│   └── package.json
├── server/
│   ├── src/
│   │   ├── index.js
│   │   ├── routes/
│   │   │   ├── comments.js
│   │   │   └── posts.js
│   │   └── prisma/
│   │       └── schema.prisma
│   ├── .env
│   ├── .gitignore
│   ├── README.md
│   ├── package-lock.json
│   └── package.json
├── LICENSE
└── README.md
```

## 🔧 Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **PostgreSQL** database
- **Git**

### Backend Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name/server
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the `server` directory and add your database connection string:

   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/database_name
   ```

4. **Run Database Migrations**

   ```bash
   npx prisma migrate dev
   ```

5. **Start the Server**

   ```bash
   npm run dev
   ```

### Frontend Setup

1. **Navigate to the Client Directory**

   ```bash
   cd ../client
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Client**

   ```bash
   npm start
   ```

## 🚀 Usage

- Open your browser and navigate to `http://localhost:3000`.
- Interact with the comment system by adding new posts, comments, and replies.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

   Click the "Fork" button at the top-right corner of this page.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

3. **Create a New Branch**

   ```bash
   git checkout -b feature/YourFeatureName
   ```

4. **Make Your Changes**

   Implement your feature or bug fix.

5. **Commit Your Changes**

   ```bash
   git commit -m "Add YourFeatureName"
   ```

6. **Push to Your Fork**

   ```bash
   git push origin feature/YourFeatureName
   ```

7. **Open a Pull Request**

   Go to the original repository and click on "New Pull Request".


## 📞 Contact

**Jason Skipper**

- **Email**: [jasonskipper0831@gmail.com](mailto:jasonskipper0831@gmail.com)
- **GitHub**: [https://github.com/jasonskipper](https://github.com/jasonskipper)
- **LinkedIn**: [https://www.linkedin.com/in/jason-skipper](https://www.linkedin.com/in/jason-skipper)

---
