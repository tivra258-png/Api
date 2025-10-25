# Cricket API 🏏

A Node.js API for fetching cricket matches and match details.

## Domain
**Live API:** https://api-chi-rouge-91.vercel.app

## API Endpoints

### 1. Get All Matches
```
GET https://api-chi-rouge-91.vercel.app/api/matches
```

### 2. Get Match Details
```
GET https://api-chi-rouge-91.vercel.app/api/match/:eventId
```

### 3. Health Check
```
GET https://api-chi-rouge-91.vercel.app/api/health
```

### 4. API Info
```
GET https://api-chi-rouge-91.vercel.app/
```

## Setup Instructions

### 1. Install Node.js
- Download from: https://nodejs.org/
- Install Node.js (version 18 or higher)

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally
```bash
npm start
# or
npm run dev
```

### 4. Deploy to Vercel
```bash
npm install -g vercel
vercel login
vercel --prod
```

## Features
- ✅ Cricket matches data
- ✅ Match details by event ID
- ✅ CORS enabled
- ✅ Error handling
- ✅ Health check endpoint
- ✅ Vercel deployment ready

## Author
**tivra258-png**

## Repository
https://github.com/tivra258-png/Api.git
