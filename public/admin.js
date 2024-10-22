document.addEventListener('DOMContentLoaded', () => {
    // Fetch reservations from the server
    fetch('/reservations')
        .then(response => response.json())
        .then(data => {
            const reservationList = document.getElementById('reservation-list');

            if (data.reservations && data.reservations.length > 0) {
                data.reservations.forEach(reservation => {
                    const reservationItem = document.createElement('div');
                    reservationItem.classList.add('reservation-item');
                    reservationItem.innerHTML = `
                        <p><strong>Table Type:</strong> ${reservation.tableType}</p>
                        <p><strong>Name:</strong> ${reservation.name}</p>
                        <p><strong>Phone:</strong> ${reservation.phone}</p>
                        <p><strong>Email:</strong> ${reservation.email}</p>
                        <p><strong>Date:</strong> ${reservation.date}</p>
                        <p><strong>Time:</strong> ${reservation.time}</p>
                    `;
                    reservationList.appendChild(reservationItem);
                });
            } else {
                reservationList.innerHTML = '<p>No reservations found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching reservations:', error);
            document.getElementById('reservation-list').innerHTML = '<p>Error loading reservations.</p>';
        });

    // Hardcoded credentials (for demonstration purposes only)
    const correctUsername = 'admin';
    const correctPassword = 'password123';

    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get the input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check if the credentials match
        if (username === correctUsername && password === correctPassword) {
            // Redirect to the admin dashboard
            window.location.href = 'admin-dashboard.html';
        } else {
            // Show error message
            document.getElementById('error-message').innerText = 'Invalid username or password.';
        }
    });
});



