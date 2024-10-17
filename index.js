document.getElementById('reservation-form').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevents the form from refreshing the page

    const tableType = document.getElementById('table-type').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const reservationData = { tableType, name, phone, email, date, time };

    // POST request to add a new reservation
    fetch('http://localhost:3000/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reservationData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('confirmation-message').textContent = 'Reservation confirmed!';
    })
    .catch(error => console.error('Error:', error));
});


