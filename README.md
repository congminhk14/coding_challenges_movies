# 🎬 Coding Challenge – Movies App

This is a movie browsing app built with **ReactJS + TypeScript + SCSS**, as part of a frontend coding challenge. It allows users to explore movies from The Movie Database (TMDb), with features like tab navigation, search, list/grid toggle, lazy image loading, infinite scroll, and SSR for detail pages.

---

## 🚀 Features Implemented

### ✅ Required Features

- [x] View list of movies currently playing in theaters
- [x] Poster images load asynchronously
- [x] Tab bar for **Now Playing** and **Top Rated** movies
- [x] Search bar to search movies by title
- [x] View movie details by clicking a movie card
- [x] Show loading spinner when fetching API
- [x] Display error message on network error
- [x] Simple responsive layout

### ✳️ Optional Features

- [x] Segmented control to toggle between **list view** and **grid view**
- [x] Fade-in animation for all images
- [x] Lazy loading for images (performance optimization)
- [x] Customized highlight and selection effect on cards
- [x] Skeleton loading for improved UX
- [x] Enhanced responsive design for different screen sizes

### 🆕 Additional Features

- [x] Infinite scroll to load more movies as user scrolls
- [x] Server-Side Rendering (SSR) for movie detail pages to support SEO with dynamic metadata
- [x] Fully responsive layout for desktop, tablet, and mobile screens

---

## 🖥️ Demo Walkthrough

![Walkthrough](https://github.com/congminhk14/coding_challenges_movies/blob/main/assets/video_walkthrough.GIF)

> Click [here](https://github.com/congminhk14/coding_challenges_movies/blob/main/assets/video_walkthrough.GIF) if the image doesn't load.

---

## 🧑‍💻 Technologies Used

- ⚛️ ReactJS + TypeScript
- 🎨 SCSS (no UI frameworks used)
- 🌐 TMDb API for movie data
- ⚡️ Vite as the build tool
- 🌀 React Router for navigation
- 🔁 Infinite scroll with Intersection Observer
- 🧱 SSR in Next.js for detail pages and metadata

---

## 📦 Getting Started

### 1. Clone the repository

git clone https://github.com/congminhk14/coding_challenges_movies.git
cd coding_challenges_movies

### 2. Install dependencies (with pnpm)
pnpm install

### 3. Start development server
pnpm run dev
Web will be running at: http://localhost:3000

---

## 📄 License

Copyright 2024 Trần Công Minh

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
