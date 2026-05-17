# 🎬 Watch List – Movie & Series Tracker

Deployed Link(netlify): https://shimmering-blancmange-001466.netlify.app/

Watch List is an interactive ReactJS web application that allows users to discover, organize, review, and manage movies and TV series in one place. The application combines watchlist management, ratings, reviews, quizzes, news updates, and personalized features into a single entertainment hub.

---

## 📌 Project Overview

The purpose of Watch List is to provide users with a platform where they can:

- Create an account and log in
- Explore movies and series
- Add and manage watchlist entries
- Rate and review content
- Maintain a bucket list
- Stay updated with entertainment news
- Take fun movie quizzes
- Customize the application's appearance

The application focuses on delivering a simple and engaging user experience using ReactJS.

---

## 🚀 Features

### 🔐 User Authentication
Users can:

- Register with username and password
- Log in with existing credentials
- Log out securely
- Switch between login and registration pages

Current implementation uses React state for authentication.

---

### 🏠 Home Page

The homepage introduces users to the application and explains its purpose.

Features:

- Welcome screen
- App description
- Quick navigation through "Get Started"

---

### 🎥 Watchlist Management

Core functionality of the project.

Users can:

- Browse available movies and TV series
- Search by title
- Filter content by streaming platform
- Sort entries alphabetically
- Sort by average ratings
- Navigate through pages using pagination

---

### ➕ Add New Movie/Series

Users can create custom entries by entering:

- Title
- Description
- Streaming platform
- Watch link
- Poster URL
- Content type (Movie/Series)

New entries immediately appear in the watchlist.

---

### ⭐ Rating System

Each movie/series supports:

- 1–5 star rating
- Average rating calculation
- Interactive hover effects

---

### 📝 Review System

Users can:

- Write reviews
- Submit ratings with reviews
- Read previously submitted reviews

---

### 🪣 Bucket List

Users can create personal entertainment goals.

Examples:

- Movies to watch later
- Series recommendations
- Personal goals

Features:

- Add entries
- Add descriptions
- Delete entries

---

### 📰 Entertainment News

The application includes a news section containing:

- Trending entertainment updates
- Streaming announcements
- Industry news

Features:

- Randomized display
- Refresh button

---

### 🧠 Movie Quiz

Interactive quiz system with:

- Randomly selected questions
- Multiple choice answers
- Score calculation

Questions include:

- Movies
- Actors
- Series
- Pop culture

---

### 🌄 Dynamic Background Customization

Users can personalize the interface by:

- Entering an image URL
- Updating application background instantly

---

## 🛠️ Technologies Used

Frontend:

- ReactJS
- JavaScript
- HTML5
- CSS3

React Concepts:

- Functional Components
- useState
- useEffect
- Props
- Event Handling
- Conditional Rendering

---
📷 Application Screenshots
Login Page
<img width="1919" height="1079" alt="Screenshot 2026-05-17 224015" src="https://github.com/user-attachments/assets/6a85c1e5-4086-4dde-b681-c67aef863e7f" />
Registration Page
<img width="1919" height="1079" alt="Screenshot 2026-05-17 223958" src="https://github.com/user-attachments/assets/0292223a-868d-4397-aaba-c3028ea47732" />
Home Page
<img width="1919" height="1079" alt="Screenshot 2026-05-17 224025" src="https://github.com/user-attachments/assets/cda02828-996e-4ef4-adb7-98230cff4f78" />
Watchlist
<img width="1919" height="1079" alt="Screenshot 2026-05-17 224033" src="https://github.com/user-attachments/assets/37478e1d-500d-4b93-bbf0-2859d8d5aabe" />
Add Movie Section
<img width="1919" height="1079" alt="Screenshot 2026-05-17 224110" src="https://github.com/user-attachments/assets/4793e3db-77ff-4d61-a243-4314b93c4308" />
Rating and Reviews
<img width="318" height="915" alt="image" src="https://github.com/user-attachments/assets/9b85e29d-5b70-464b-82ca-1f922e2c97e8" />
Bucket List
<img width="1919" height="1079" alt="Screenshot 2026-05-17 224038" src="https://github.com/user-attachments/assets/7df235fa-1a1b-4e57-b99d-c372bd5acc11" />
News Section
<img width="1918" height="1079" alt="Screenshot 2026-05-17 224042" src="https://github.com/user-attachments/assets/6111e8ca-829b-4cf7-a54a-f962eb77f5b0" />
Quiz Section
<img width="1919" height="1079" alt="Screenshot 2026-05-17 224046" src="https://github.com/user-attachments/assets/46ec9aae-ae22-4212-b48d-ce37cb8c229f" />

---

## 📂 Project Structure

```text
src/
│
├── App.js
├── index.js
├── index.css
├── styles.css
├── App.test.js
├── reportWebVitals.js
│
└── Components embedded inside App.js
      ├── LoginPage
      ├── RegisterPage
      ├── HomePage
      ├── WatchListPage
      ├── BucketListPage
      ├── NewsPage
      ├── QuizPage
      ├── ReviewForm
      └── StarRating
