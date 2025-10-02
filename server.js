const express = require("express");
const urlRoutes = require("./routes/urlRoutes");
const path = require("path");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to the URL Shortener API 🚀. Use POST /shorten to create a short URL.");
});


// ✅ Parse JSON request body
app.use(express.json());

// ✅ (optional) parse urlencoded form
app.use(express.urlencoded({ extended: true }));

// ✅ Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// ✅ Use routes
app.use("/", urlRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
