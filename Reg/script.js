function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;

    // Validate email 
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Validate password strength
    const passwordStrength = document.getElementById('password-strength');
    if (password.length < 8) {
        passwordStrength.textContent = 'Password is too short';
        return;
    } else {
        passwordStrength.textContent = '';
    }

    

    // Message bar
    alert('Registration successful!');
    window.location.href = 'confirmation.html';
}
