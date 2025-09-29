## Overview

This project demonstrates blue-green deployment and dynamic routing for a SaaS pricing page. It features a modular Node.js/Express backend and a creative React frontend styled with Tailwind CSS.

## Project Structure

```
Ghack/
  backend/
    data/
      blue-pricing.json
      green-pricing.json
    config/
      routing.json
    middleware/
      routing.js
    routes/
      pricing.js
    server.js
    package.json
  frontend/
    src/
      App.js
      index.js
      index.css
    public/
      index.html
    tailwind.config.js
    package.json
```

## Getting Started

### Backend

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   node server.js
   ```
   The backend runs on port 3001 by default.

### Frontend

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```
   The frontend runs on port 3000 and proxies `/pricing` requests to the backend.

## Configuration

- Edit `backend/config/routing.json` to change routing strategies and traffic split.
- Update `backend/data/blue-pricing.json` and `green-pricing.json` with pricing.

## How It Works

- The backend serves pricing data based on routing rules and logs each request.
- The frontend fetches pricing data and displays it in a modern, responsive UI.
- Sticky sessions ensure users see the same pricing version across visits.
