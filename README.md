## CodeAlpha Task One | Simple URL Shortener
# @Harrion Daniel Chinomso

A beginner-friendly URL Shortener built with Node.js (Express).
This project allows users to submit a long URL and get back a unique short link that redirects to the original site.

---

## Project Structure

```bash```
url-shortner/
|--- server.js              # Main server file (starts Express app)
|--- /routes
|    └── urlRoutes.js       # API routes (shorten + redirect)
|--- /models
|    └── urlModel.js        # In-memory "database" + logic
|--- /public
|--- └── index.html         # Simple frontend page
|--- README.md              # Project documentation


---

## Features
- Shorten any long URL into a short unique code.
- Redirect short URL → original long URL.
- Minimal frontend (HTML + JavaScript) for user input.
- In-memory storage (data resets when server restarts).

---

## Installation & Setup

1. Clone the repo (or create your folder):
```bash```
git clone https://github.com/Daniel-code-OrbitForge/url-shortner.git
cd url-shortner

2. Install Dependencies:
```bash```
npm init -y
npm install express

3. Run the server
bash
node server.js

---

###  Usage
**Option 1 — Frontend Page**

- Open **http://localhost:3000** in your browser
- Paste a long *URL* and click the *Shorten* button
- Get a short version of the *url* that redirects properly.

**Option 2 - API (POSTMAN/ cURL)**
- Create a **new project** on POSTMAN
- Create a **GET** request and on the *url input space*, open/ paste **http://localhost:3000** and send

- **OR**

- Create a POST request, add /shorten to the root **http://localhost:3000/shorten**
- On the first tab below the url: **params** by defualt, click on *body*, switch to **raw**
- Add this or any url of your choice to the body:

```json```
{
  "longUrl": "https://www.google.com"
}

- On the second tab, below the first tab: **HTML** by defualt, switch to **JSON**
- Response should be:

```json```
{
  "shortUrl": "http://localhost:3000/aB3xYz"
}

## GET /:code
- Example: http://localhost:3000/aB3xYz
- Redirects to original long URL.

---

## How It Works

- User submits a long URL (via API or form).
- Server generates a random short code (6 characters).
- Mapping is stored in memory (urls object inside urlModel.js).
- When short URL is visited, server looks up original and redirects.

---

## Limitations

- Uses in-memory storage → all data is lost if the server restarts.
- No custom short codes yet.
- No database persistence (SQLite, MongoDB, etc. can be added later).

---

## Future Improvements

- Add database (MongoDB, SQLite, or PostgreSQL).
- Custom short codes (/my-link).
- Analytics (click count, timestamps).
- Authentication for user-specific short URLs.
- Deploy to cloud (Heroku, Vercel, etc.).

## Tech Stack

- Node.js (runtime)
- Express.js (server)
- Vanilla HTML + JS (frontend)

---

## Learning Notes

- Express.js was used to build the server because it makes handling routes (like /shorten and /:code) simple.
- Models (urlModel.js) hold the core logic generating short codes and storing URL mappings.
- Routes (urlRoutes.js) separate the API endpoints from the server setup, keeping code clean.
- Public folder is used by Express to serve static files (like index.html), which gives us a simple frontend.
- This separation of concerns makes it easier to scale and maintain the app later.

## Summary

This project is a simple, functional URL Shortener app designed to demonstrate the basics of building a Node.js + Express server, routing, and frontend integration.
It’s lightweight, easy to understand, and can be extended into a fully-featured web service.

## Thanks

Thanks for checking out this project! 
I built it as a learning project **(internship @CodeAlpha 2025)**, but feel free to use it, improve it, and share feedback.

## Contact Information

I’d love to connect! Whether it’s for **collaboration, research,internship opportunities, freelancing, or remote work opportunities**, feel free to reach out through any of the following channels:

- **Email**: [harrisonjrn@proton.me](mailto:harrisonjrn@proton.me)  
- **Phone**: [+233 (0) 559-080-863](tel:+233559080863)  
- **Location**: Accra, Ghana  

### Social Profiles
- [GitHub](https://github.com/Daniel-code-OrbitForge)  
- [LinkedIn](https://www.linkedin.com/in/harrison-daniel-36bb84378)  
- [Twitter / X](https://x.com/DanielH62532053)  
- [Facebook](https://www.facebook.com/Harrison.c.daniel)  

I’m always open to professional conversations, networking, and sharing ideas.  
Don’t hesitate to drop me a message, I look forward to hearing from you!

---