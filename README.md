# 🚀 After Effect – Digital Communication Platform

## 📌 Overview

**After Effect** is a modern digital communication platform that not only enables messaging but also transforms conversations into **real-time actionable insights**.

It analyzes chat data to provide **user activity tracking, message trends, word analytics, and content moderation**, making it ideal for teams, organizations, and monitoring systems.

---

## ✨ Key Features

### 💬 Communication System

* Real-time messaging using Supabase
* Clean and responsive chat interface
* Scalable architecture for multi-user support

### 📊 Analytics Dashboard

* Total messages exchanged
* Most active users (Leaderboard)
* Message trends over time
* Most frequently used words

### 🧠 Smart Insights

* Detect repeated words and patterns
* Identify communication trends
* Analyze large volumes of messages instantly

### 🚫 Content Moderation

* Detect restricted/inappropriate words
* Highlight flagged messages

### ⚡ Real-Time Updates

* Live dashboard updates using Supabase Realtime
* Instant reflection of new messages in analytics

### 🔐 Authentication

* Magic Link login (passwordless authentication)
* Secure session handling using Supabase Auth

### 📈 Data Visualization

* Interactive charts using Recharts:

  * Messages over time
  * Top users
  * Word frequency

---

## 🛠️ Tech Stack

### Frontend

* React.js (Vite)
* Material UI (MUI)
* Recharts (for graphs)

### Backend (BaaS)

* Supabase

### Database

* PostgreSQL

---

## 📂 Project Structure

```
after-effect/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── hooks/
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── index.html
└── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/after-effect.git
cd after-effect
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file:

```
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

---

### 4️⃣ Run the Project

```bash
npm run dev
```

---

## 🗄️ Database Schema

```sql
create table messages (
  id uuid default uuid_generate_v4() primary key,
  content text,
  user_name text,
  created_at timestamp default now()
);
```

---

## 🔌 Core Functional Modules

* **Message Service** → Handles CRUD operations
* **Analytics Engine** → Processes message insights
* **Realtime Listener** → Syncs live updates
* **Authentication Service** → Handles login/logout

---

## 🧠 Future Enhancements

* 🤖 AI Sentiment Analysis
* 🧾 Chat Summarization (NLP)
* 👥 Multi-room chat system
* 📤 Export analytics (PDF/CSV)
* 🔔 Smart alerts & anomaly detection

---

## 🎯 Use Cases

* Team communication analytics
* Workplace monitoring systems
* Social chat analysis platforms
* Moderation and safety tools

---

## 🏆 Why This Project Stands Out

* Combines **communication + analytics + AI thinking**
* Real-time insights (not static dashboards)
* Clean, scalable architecture
* Practical real-world application

---

## 📢 Pitch Line

> “After Effect transforms everyday conversations into intelligent insights, enabling organizations to understand communication patterns, detect risks, and make data-driven decisions in real time.”

---

## 👨‍💻 Author

**Praveen Kumar**

---

## 📄 License

This project is open-source and available under the MIT License.
