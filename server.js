const express = require('express');
const app = express();
const port = 3000;

// Mock database (JSON format)
const heroContent = {
    headline: 'Welcome to ECell KIIT!',
    subtext: 'Empowering students to become future entrepreneurs and innovators.',
    ctaLabel: 'Join Us Now'
};

// Endpoint to fetch hero content
app.get('/api/hero', (req, res) => {
    res.json(heroContent);
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
