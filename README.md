# PCRD

PCRD is an organization website designed to present the organization's identity, work, activities, publications, and information through a modern, responsive, and accessible web experience.

## Table of Contents

* [About the Project](#about-the-project)
* [Features](#features)
* [Built With](#built-with)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Development Server](#development-server)
  * [Production Build](#production-build)
* [Project Structure](#project-structure)
* [Design](#design)
* [Deployment](#deployment)
* [Contributing](#contributing)
* [License](#license)

---

## About the Project

The PCRD website serves as the organization's online presence.

The website was developed to provide visitors with a clear and accessible way to:

* Learn about PCRD and its organization.
* Explore its work and activities.
* View publications and organizational content.
* Access important documents and information.
* Navigate the website easily across different devices.

The project focuses on providing a clean, modern, responsive, and user-friendly interface for both desktop and mobile users.

### Live Website

**PCRD Website:**
https://pcrd-ps.vercel.app/

---

## Features

* Responsive design for desktop, laptop, tablet, and mobile devices.
* Modern and clean user interface.
* Responsive navigation.
* Organization information and content.
* About the organization section.
* Activities and organizational work.
* Publications and related content.
* Organization profile and information.
* Structured content sections.
* Mobile friendly layouts.
* Optimized static assets.
* SEO support.
* Site verification support.
* Accessible and user friendly interface.

---

## Built With

This project was built using the following technologies:

* **Next.js** 
* **React** 
* **TypeScript** 
* **Tailwind CSS** 
* **PostCSS** 
* **Vercel** 

---

## Getting Started

### Prerequisites

Before running the project locally, make sure you have the following installed:

* Node.js
* npm
* Git

### Installation

Clone the repository:

```bash
git clone https://github.com/ZainaAlahmar/PCRDS.git
```

Navigate to the project directory:

```bash
cd PCRD
```

Install the project dependencies:

```bash
npm install
```

### Development Server

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

### Production Build

Create a production build:

```bash
npm run build
```

Run the production build locally:

```bash
npm start
```

---

## Project Structure

```text
PCRD/
├── public/
│   ├── images/
│   ├── icons/
│   └── documents/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── ...
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── sections/
│   │   └── ui/
│   │
│   ├── constants/
│   │
│   ├── data/
│   │
│   ├── types/
│   │
│   └── utils/
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

> The structure may evolve as new pages, components, and features are added to the project.

---

## Design

The website is designed with **responsiveness, accessibility, and usability** in mind.

The interface adapts to different screen sizes to provide a consistent experience across:

* Desktop
* Laptop
* Tablet
* Mobile

Special attention is given to the mobile layout to ensure that PCRD's content remains easy to navigate, read, and interact with on smaller screens.

---

## Deployment

The website is deployed using **Vercel**.

Production deployments are generated from the Next.js application and hosted through Vercel.

### Production

**Live Website:**
https://pcrd-ps.vercel.app/

---

## Contributing

This project is maintained for the PCRD organization website.

For changes or improvements:

1. Create a new branch for your changes.
2. Make the required updates.
3. Test the application locally.
4. Commit your changes.
5. Push the branch to the repository.
6. Open a pull request for review.

---

## License

This project is maintained for the **PCRD organization website**.

All rights reserved unless otherwise specified by the organization.
