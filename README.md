<p align="center">
  <img src="frontend/src/assets/logoFlexnative.png" alt="FlexNative Logo" width="200"/>
</p>

# FlexNative - Platform Pembelajaran React Native

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

FlexNative adalah aplikasi web full-stack yang dirancang sebagai platform pembelajaran online interaktif yang berfokus pada pengembangan aplikasi mobile menggunakan React Native. Aplikasi ini menyediakan kursus, manajemen progres pengguna, dan otentikasi menggunakan Google OAuth.

## ✨ Fitur Utama

*   **Otentikasi Pengguna:** Login/Logout aman menggunakan Google OAuth 2.0.
*   **Manajemen Kursus (Backend):** Operasi CRUD (Create, Read, Update, Delete) untuk materi kursus.
*   **Tampilan Kursus (Frontend):** Menampilkan daftar kursus yang tersedia.
*   **Dashboard Pengguna:** Area personalisasi setelah login.
*   **Bookmark Kursus:** Menyimpan kursus yang diminati (fitur di AuthContext).
*   **Jalur Karir (Career Paths):** Kemampuan untuk menambahkan kursus ke jalur karir (fitur di AuthContext).
*   **Landing Page:** Halaman perkenalan yang menarik untuk pengguna baru.
*   **Desain Responsif:** Antarmuka pengguna yang beradaptasi dengan berbagai ukuran layar.

## 💻 Teknologi yang Digunakan

**Backend:**

*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Database:** MongoDB
*   **ODM:** Mongoose
*   **Otentikasi:** Passport.js (Strategi Google OAuth 2.0)
*   **Manajemen Sesi:** express-session
*   **Environment Variables:** dotenv
*   **CORS:** cors

**Frontend:**

*   **Library:** React.js
*   **Build Tool:** Vite
*   **Routing:** React Router DOM
*   **Styling:** Tailwind CSS
*   **State Management:** React Context API (AuthContext)
*   **HTTP Client:** Axios (atau `fetch` bawaan)

**Lainnya:**

*   **Package Manager:** pnpm (berdasarkan `pnpm-lock.yaml`)

## 📁 Struktur Folder

```text
web-app/
├── backend/
│ ├── config/ # Konfigurasi (DB, Passport)
│ │ ├── db.js
│ │ └── passport.js
│ ├── controllers/ # Logika request handler
│ ├── middleware/ # Middleware kustom (authMiddleware.js)
│ │ └── authMiddleware.js
│ ├── models/ # Skema Mongoose (User, Course)
│ │ ├── Course.js
│ │ └── User.js
│ ├── routes/ # Definisi endpoint API
│ │ ├── authRoutes.js
│ │ ├── courseRoutes.js
│ │ └── userRoutes.js # Rute terkait progress pengguna
│ ├── node_modules/
│ ├── .env # File environment variables (PENTING: jangan di-commit!)
│ ├── package.json
│ ├── pnpm-lock.yaml
│ └── server.js # Entry point server Express
│
├── frontend/
│ ├── public/ # Aset statis
│ ├── src/
│ │ ├── assets/ # Gambar, ikon, dll.
│ │ ├── components/ # Komponen UI reusable (Layout, Sidebar, Topbar, dll.)
│ │ ├── context/ # React Context (AuthContext.js)
│ │ ├── pages/ # Komponen halaman utama (LandingPage, Course, dll.)
│ │ ├── App.jsx # Komponen root aplikasi & routing
│ │ ├── index.css # Styling global (Tailwind)
│ │ └── main.jsx # Entry point aplikasi React
│ ├── node_modules/
│ ├── .eslintrc.cjs # Konfigurasi ESLint
│ ├── index.html # Template HTML utama
│ ├── package.json
│ ├── pnpm-lock.yaml
│ └── vite.config.js # Konfigurasi Vite
│
└── .gitignore # File/folder yang diabaikan Git
```

## 🚀 Instalasi & Setup

**Prasyarat:**

*   Node.js (v16 atau lebih tinggi direkomendasikan)
*   pnpm (`npm install -g pnpm`)
*   MongoDB (server lokal atau akun MongoDB Atlas)
*   Akun Google Cloud Platform untuk kredensial OAuth 2.0

**Langkah-langkah:**

1.  **Clone Repository:**
    ```bash
    git clone <URL_REPOSITORY_ANDA>
    cd web-app
    ```

2.  **Setup Backend:**
    ```bash
    cd backend
    pnpm install  # Instal dependensi backend
    ```
    *   Buat file `.env` di dalam folder `backend`.
    *   Salin isi dari `.env.example` (jika ada) atau tambahkan variabel berikut:
        ```dotenv
        # MongoDB Connection
        MONGO_URI=<STRING_KONEKSI_MONGODB_ANDA>

        # Google OAuth Credentials
        GOOGLE_CLIENT_ID=<CLIENT_ID_GOOGLE_ANDA>
        GOOGLE_CLIENT_SECRET=<CLIENT_SECRET_GOOGLE_ANDA>

        # Session Configuration
        SESSION_SECRET=<SECRET_ACAK_UNTUK_SESI_ANDA>

        # Frontend URL (PENTING untuk redirect setelah login)
        CLIENT_URL=http://localhost:5173 # Sesuaikan jika port frontend berbeda

        # Server Port (Opsional, default 5000)
        PORT=5000
        ```
    *   **Penting:** Dapatkan `GOOGLE_CLIENT_ID` dan `GOOGLE_CLIENT_SECRET` dari [Google Cloud Console](https://console.cloud.google.com/). Pastikan Anda mengkonfigurasi **Authorized JavaScript origins** (misal: `http://localhost:5000`) dan **Authorized redirect URIs** (misal: `http://localhost:5000/auth/google/callback`) di kredensial OAuth Anda. Sesuaikan port jika berbeda.

3.  **Setup Frontend:**
    ```bash
    cd ../frontend
    pnpm install # Instal dependensi frontend
    ```
    *   Pastikan URL API di frontend (misalnya di `axios` atau `fetch` calls seperti di `AuthContext.js` dan `App.jsx`) mengarah ke server backend Anda (default: `http://localhost:5000`).

## ▶️ Menjalankan Aplikasi

1.  **Jalankan Server Backend:**
    ```bash
    cd backend
    pnpm run dev # Atau 'node server.js' / 'nodemon server.js' jika script 'dev' tidak ada
    ```
    Server akan berjalan di `http://localhost:5000` (atau port yang Anda tentukan di `.env`).

2.  **Jalankan Aplikasi Frontend:**
    ```bash
    cd ../frontend
    pnpm run dev
    ```
    Aplikasi frontend akan berjalan di `http://localhost:5173` (default Vite) atau port lain yang ditampilkan di terminal.

3.  **Buka Aplikasi:**
    Buka browser Anda dan navigasikan ke URL frontend (misalnya `http://localhost:5173`).

## 📝 API Endpoints Utama (Backend)

*   `GET /auth/google`: Memulai proses otentikasi Google OAuth.
*   `GET /auth/google/callback`: Callback URL setelah otentikasi Google berhasil/gagal.
*   `GET /auth/logout`: Logout pengguna dan menghancurkan sesi.
*   `GET /auth/user`: Mendapatkan data pengguna yang sedang login (jika terotentikasi via sesi).
*   `GET /api/user`: Endpoint alternatif untuk mendapatkan data pengguna (sesuai `server.js`).
*   `GET /courses`: Mendapatkan semua kursus.
*   `POST /courses`: Membuat kursus baru.
*   `PUT /courses/:id`: Memperbarui kursus berdasarkan ID.
*   `DELETE /courses/:id`: Menghapus kursus berdasarkan ID.
*   `GET /users/progress`: Mendapatkan progress pengguna (memerlukan otentikasi via JWT).
*   `POST /users/progress`: Memperbarui progress pengguna (memerlukan otentikasi via JWT).

---
