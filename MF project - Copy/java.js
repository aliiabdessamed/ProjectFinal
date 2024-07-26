document.getElementById('signup-form').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form data
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const childName = document.getElementById('child-name').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Check if all fields are filled
    if (!firstName || !lastName || !childName || !dob || !email || !password) {
        alert('Please fill out all fields.');
        return;
    }

    // Redirect to the thank-you page
    window.location.href = 'thankyou.html';
});
