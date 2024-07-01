document.addEventListener('DOMContentLoaded', () => {
    const registerNowBtn = document.getElementById('register-now-btn');
    const signUpFormContainer = document.getElementById('sign-up-form-container');
    const loginFormContainer = document.getElementById('login-form-container');
    const signUpForm = document.getElementById('sign-up-form');
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');

    const users = [];

    registerNowBtn.addEventListener('click', () => {
        signUpFormContainer.classList.toggle('hidden');
        loginFormContainer.classList.add('hidden');
    });

    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;
        const phone = document.getElementById('signup-phone').value;
        const qualification = document.getElementById('signup-qualification').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        if (qualification === 'certificate') {
            alert('Sign up failed: Diploma in Computer required.');
            return;
        }

        users.push({ email, password });
        alert('Sign up successful!');
        signUpForm.reset();

        signUpFormContainer.classList.add('hidden');
        loginFormContainer.classList.remove('hidden');
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            alert('Login successful!');
            loginError.textContent = '';
            window.location.href = 'studen-register-form.html';
        } else {
            loginError.textContent = 'Invalid email or password';
        }
    });
});
