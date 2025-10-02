const express = require("express");
const router = express.Router();
const { shortenURL, redirectURL } = require("../models/urlModel");

// POST: Create short URL
router.post("/shorten", (req, res) => {
    console.log("Body received:", req.body);  // Debugging
    const { longUrl } = req.body;
    if (!longUrl) {
        return res.status(400).json({ error: "URL is required" });
    }
    const shortCode = shortenURL(longUrl);
    res.json({ shortUrl: `http://localhost:3000/${shortCode}` });
});

// GET: Redirect to original URL
router.get("/:code", (req, res) => {
    const code = req.params.code;
    const originalUrl = redirectURL(code);
    if (originalUrl) {
        res.redirect(originalUrl);
    } else {
        res.status(404).json({ error: "URL not found" });
    }
});

module.exports = router;
