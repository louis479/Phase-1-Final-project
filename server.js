const express = require('express');
const app = express();
const path = require('path');

// Serve static files (CSS, JS, images, etc.) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/admin.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

app.get('/admin-dashboard.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin-dashboard.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/service.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'service.html'));
});

app.get('/confirmation.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'confirmation.html'));
});

// API route for fetching reservations
app.get('/reservations', (req, res) => {
    // You would replace this with real data from a database in production
    res.json({
        reservations: [
            { tableType: 'VIP', name: 'John Doe', phone: '123-456-7890', email: 'john@example.com', date: '2024-10-22', time: '7:00 PM' },
            { tableType: 'Standard', name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com', date: '2024-10-23', time: '8:00 PM' }
        ]
    });
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
