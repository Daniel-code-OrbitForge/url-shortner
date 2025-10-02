// In-memory "database"
const urls = {};  

// Function to generate random code
function generateCode(length = 6) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < length; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

// Store URL and return short code
function shortenURL(longUrl) {
    const code = generateCode();
    urls[code] = longUrl;
    return code;
}

// Retrieve original URL
function redirectURL(code) {
    return urls[code];
}

module.exports = { shortenURL, redirectURL };
