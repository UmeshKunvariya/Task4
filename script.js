document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'umesh' && password === 'Umesh@123') {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').textContent = 'Login successful!';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').textContent = 'Invalid username or password';
    }
});
