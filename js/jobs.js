const API_BASE_URL = 'http://localhost:3000/api/jobs'; // Replace with your backend URL

// Function to fetch and display job posts
async function loadJobs() {
  try {
    const response = await fetch(API_BASE_URL);
    const jobs = await response.json();

    if (response.ok) {
      const jobContainer = document.getElementById('jobContainer');
      jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.classList.add('job-post');
        jobElement.innerHTML = `
          <h3>${job.title}</h3>
          <p><strong>Company:</strong> ${job.company}</p>
          <p><strong>Location:</strong> ${job.location}</p>
          <p><strong>Description:</strong> ${job.description}</p>
        `;
        jobContainer.appendChild(jobElement);
      });
    } else {
      alert('Failed to load job posts.');
    }
  } catch (error) {
    console.error('Error fetching job posts:', error);
    alert('Failed to load job posts. Please try again later.');
  }
}

// Load jobs on page load
document.addEventListener('DOMContentLoaded', loadJobs);
