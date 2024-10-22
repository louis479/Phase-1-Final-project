document.addEventListener('DOMContentLoaded', () => {
    // Fetch reservations from the server
    fetch('reservations')
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
});

