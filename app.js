
const express = require('express');
const cors = require('cors'); 

const app = express();
const port = 3000;

app.use(cors());


const heroContent = {
    headline: 'Welcome to ECell KIIT!',
    subtext: 'Empowering students to become future entrepreneurs and innovators.',
    ctaLabel: 'Join Us'
};


app.get('/api/hero', (req, res) => {
    res.json(heroContent);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
