// Wait for the DOM to fully load before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const confirmationMessage = document.createElement('div'); // Create a div for the confirmation message
    confirmationMessage.style.display = 'none'; // Initially hide it
    confirmationMessage.style.marginTop = '20px'; // Add some margin
    form.parentNode.appendChild(confirmationMessage); // Insert the message after the form

    // Add a submit event listener to the form
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting the default way (i.e., without reloading the page)
        event.preventDefault();

        // Grab all the values from the form fields
        const tableType = document.getElementById('table').value;
        const name = document.getElementById('name').value;
        const phoneNumber = document.getElementById('number').value;
        const email = document.getElementById('email').value;
        const reservationDate = document.getElementById('date').value;
        const reservationTime = document.getElementById('time').value;

        // Basic validation (you can expand this as needed)
        if (!name || !phoneNumber || !email || !reservationDate || !reservationTime) {
            alert('Please fill out all required fields.');
            return;
        }

        // Process the reservation (e.g., send data to a server or log it)
        console.log({
            tableType: tableType,
            name: name,
            phoneNumber: phoneNumber,
            email: email,
            reservationDate: reservationDate,
            reservationTime: reservationTime
        });

        // Display a confirmation message on the page
        confirmationMessage.innerHTML = `
            <h3>Reservation Confirmed!</h3>
            <p>Thank you, <strong>${name}</strong>. Your reservation for a <strong>${tableType}</strong> 
            on <strong>${reservationDate}</strong> at <strong>${reservationTime}</strong> has been successfully placed. 
            We will contact you at <strong>${phoneNumber}</strong> or <strong>${email}</strong> for any further updates.</p>
        `;
        confirmationMessage.style.display = 'block'; // Show the confirmation message

        // Optionally, you can reset the form after submission
        form.reset();
    });
});

