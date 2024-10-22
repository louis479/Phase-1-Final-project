document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    const tableType = document.getElementById('table-type').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Create an object to store reservation data
    const reservationData = {
        tableType,
        name,
        phone,
        email,
        date,
        time,
    };

    // Save reservation data to localStorage
    localStorage.setItem('reservationData', JSON.stringify(reservationData));

    // Check if the user has granted notification permission
    if (Notification.permission === 'granted') {
        // Send a congratulations notification
        new Notification('Congratulations!', {
            body: 'Your reservation has been successfully made!',
            icon: '/icon.png' // Optional icon for the notification
        });
    } else if (Notification.permission !== 'denied') {
        // Request notification permission
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                // Send the notification if permission is granted
                new Notification('Congratulations!', {
                    body: 'Your reservation has been successfully made!',
                    icon: '/icon.png' // Optional icon for the notification
                });
            }
        });
    }

    // Redirect to confirmation page
    window.location.href = 'confirmation.html';
});
