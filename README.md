# PlayShifu Home Page Clone

This project replicates the PlayShifu Home Page using modern web technologies, with dynamic product rendering via a full-stack setup.

<img width="1440" alt="Screenshot 2025-04-14 at 8 43 09 AM" src="https://github.com/user-attachments/assets/5d6bdc5f-3816-47c7-b84e-533801a06f25" />

## 🛠 Tech Stack

- **Frontend:** Next.js, Tailwind CSS (or CSS Modules)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **API:** REST API to fetch product data

<img width="1432" alt="Screenshot 2025-04-14 at 8 43 35 AM" src="https://github.com/user-attachments/assets/757d2c5c-4466-4ae7-b4d9-a16f89ca9717" />

## 📱 Features

- Responsive layout (mobile + desktop)
- Dynamic product rendering via API
- MongoDB for storing and querying product data
- Fully matches the provided design layout

<img width="1440" alt="Screenshot 2025-04-14 at 8 43 24 AM" src="https://github.com/user-attachments/assets/60a56972-1e36-4898-b5cd-7276f5aaa921" />

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/shubham51919/Playshifu.git
cd playshifu
```

### 2. Set up the frontend

```bash
# Inside the root folder
npm install
npm run dev
```

### 3. Set up the backend

```bash
cd backend
npm install
npm run dev
```

### 4. Add environment variables

Update your mongoDB url in `.env` file in the root directory with the following:


### 5. Seed the database

```bash
# Inside backend folder
npm run seed
```

### 6. Restart both frontend and backend

The app should now be live and fetching product data from MongoDB via the Express backend.
