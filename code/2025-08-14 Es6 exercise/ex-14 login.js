const userIdInput = document.getElementById('userId');
const passwordInput = document.getElementById('password');
const statusText = document.getElementById('status');

const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');

// Check if already logged in
if (localStorage.getItem('userId')) {
    statusText.textContent = `Logged in as: ${localStorage.getItem('userId')}`;
} else {
    statusText.textContent = "Not logged in.";
}

// Login button click
loginBtn.addEventListener('click', () => {
    const userId = userIdInput.value.trim();
    const password = passwordInput.value.trim();

    if (userId && password) {
        localStorage.setItem('userId', userId);
        statusText.textContent = `Logged in as: ${userId}`;
        alert("Login successful!");
    } else {
        alert("Please enter both User ID and Password.");
    }
});

// Logout button click
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('userId');
    statusText.textContent = "Not logged in.";
    alert("Logged out successfully!");
});
