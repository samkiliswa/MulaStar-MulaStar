# MulaStar – Make Money Online

Official landing website for MulaStar, an online earning platform that provides multiple ways to earn money through digital tasks.

## Features

- **Hero & CTA** – Sign up and login prompts
- **How It Works** – Platform overview
- **Earning Features** – Free Spin, Bet Spin, Blogging, Ad Clicks, TikTok, YouTube, Instagram/Facebook Reels, Affiliate Marketing, Chess & Draughts, Forex Classes, Trivia Quiz, AI Chatbot, Digital Art Marketplace
- **App Installation Guide** – Step-by-step for Android
- **Login & Register** – Instructions
- **Reviews** – User testimonials
- **Pricing** – Activation fees by country (Kenya, Tanzania, Uganda, Rwanda, Burundi, Zambia, Malawi, Botswana, Cameroon, Ghana, South Sudan, West Africa, Nigeria, International)
- **FAQ** – Common questions with accordion

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- **Express.js** – Node.js server for Hostinger deployment (supports static hosting)

## Usage

**Local development:**
```bash
npm install
npm start
```
Runs at http://localhost:3000

**Build for production:**
```bash
npm run build
npm start
```
Build outputs to `dist/`; server serves from `dist/` when present.

## Hostinger Deployment

This project uses **Express.js**, which is supported by Hostinger. Deployment steps:

1. Upload all project files to your Hostinger Node.js hosting.
2. Run `npm install` (Hostinger runs this automatically).
3. Run `npm run build` (optional – prepares `dist/`).
4. Run `npm start` – Hostinger will use this to start your app.

The server listens on `process.env.PORT` (provided by Hostinger) and serves your static site.

## Official Links

- Register: https://mulastar.com/register.php?ref=samkiliswa
