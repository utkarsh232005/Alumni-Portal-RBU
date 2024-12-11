const API_BASE_URL = 'http://localhost:3000/api/profile'; // Replace with your backend URL

// Function to fetch and display user profile
async function loadProfile() {
  try {
    const response = await fetch(API_BASE_URL);
    const user = await response.json();

    if (response.ok) {
      const profileInfoElement = document.getElementById('profileInfo');
      profileInfoElement.innerHTML = `
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Job Status:</strong> ${user.jobStatus || 'Looking for opportunities'}</p>
        <p><strong>Bio:</strong> ${user.bio || 'No bio available'}</p>
      `;
    } else {
      alert('Failed to load profile.');
    }
  } catch (error) {
    console.error('Error fetching profile:', error);
    alert('Failed to load profile. Please try again later.');
  }
}

// Function to handle editing profile
function editProfile() {
  const name = prompt('Enter your name:', 'John Doe');
  const jobStatus = prompt('Enter your job status:', 'Looking for opportunities');
  const bio = prompt('Enter your bio:', 'A passionate student seeking career growth.');

  if (name && jobStatus && bio) {
    const updatedProfile = { name, jobStatus, bio };

    updateProfile(updatedProfile);
  }
}

// Function to update profile
async function updateProfile(profileData) {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profileData),
    });

    if (response.ok) {
      loadProfile();  // Reload profile after updating
    } else {
      alert('Failed to update profile.');
    }
  } catch (error) {
    console.error('Error updating profile:', error);
    alert('An error occurred while updating the profile.');
  }
}

// Add event listener to edit profile button
document.getElementById('editProfileBtn').addEventListener('click', editProfile);

// Load profile on page load
document.addEventListener('DOMContentLoaded', loadProfile);
