const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static('public'));

// Route to get reservations
app.get('/reservations', (req, res) => {
    fs.readFile(path.join(__dirname, 'db.json'), 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read database' });
        }
        res.json(JSON.parse(data));
    });
});

// Route to add a new reservation
app.post('/reservations', (req, res) => {
    const newReservation = req.body;

    // Read existing reservations
    fs.readFile(path.join(__dirname, 'db.json'), 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read database' });
        }
        const db = JSON.parse(data);
        db.reservations.push(newReservation);

        // Write updated reservations back to the db.json file
        fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(db, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save reservation' });
            }
            res.status(201).json(newReservation);
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
