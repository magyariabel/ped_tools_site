const express = require('express');
const cors = require('cors');
const getKPIs = require('./api/getKPIs');
const recommend = require('./api/recommend');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001; // Change 3001 to 3002 or another available port

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Add this new route handler for the root path
app.get('/', (req, res) => {
    res.send('KPI Tool Recommender API is running');
});

app.get('/api/getKPIs', getKPIs);
app.post('/api/recommend', recommend);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
