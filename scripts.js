// Validate login form (index.html)
function validateLogin() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Basic validation for name and phone number
    if (name === "" || phone === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    // Redirect to room availability page after successful login
    window.location.href = "check_rooms.html";
    return false;
}

// Check room availability (check_rooms.html)
function checkAvailability() {
    const checkDate = document.getElementById('checkDate').value;
    const today = new Date().toISOString().split("T")[0];

    if (checkDate < today) {
        alert("Please select a valid date.");
        return false;
    }

    // Simulate room availability based on date (for now)
    document.getElementById('availableRooms').innerHTML = `
        <h2>Available Rooms on ${checkDate}</h2>
        <ul>
            <li>Single Room - $100</li>
            <li>Double Room - $150</li>
            <li>Suite - $250</li>
        </ul>
        <a href="rooms.html">Proceed to Book a Room</a>
    `;

    return false; // Prevent form submission
}

// Book room (rooms.html)
function bookRoom(roomType) {
    alert(`You have successfully booked a ${roomType} room!`);
}

// Cancel room (rooms.html)
function cancelRoom(roomType) {
    const confirmation = confirm(`Are you sure you want to cancel your ${roomType} room booking?`);
    if (confirmation) {
        alert(`${roomType} room booking has been canceled.`);
    }
}
