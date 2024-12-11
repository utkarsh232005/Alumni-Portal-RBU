document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
  
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
  
      // Basic validation
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }
  
      if (email && password && confirmPassword) {
        // You can send the signup data to your backend for registration.
        // For now, let's check if the email is a college email.
        if (email.endsWith('@college.edu')) {
          alert('Signup successful!');
          // Redirect to the login page after successful signup
          window.location.href = 'login.html';
        } else {
          alert('Please use your college email ID.');
        }
      } else {
        alert('Please fill in all fields.');
      }
    });
  });
  