// const API_BASE_URL = 'http://localhost:3000/api/jobs'; // Replace with your backend URL

// // Function to fetch and display job posts
// async function loadJobs() {
//   try {
//     const response = await fetch(API_BASE_URL);
//     const jobs = await response.json();

//     if (response.ok) {
//       const jobContainer = document.getElementById('jobContainer');
//       jobs.forEach(job => {
//         const jobElement = document.createElement('div');
//         jobElement.classList.add('job-post');
//         jobElement.innerHTML = `
//           <h3>${job.title}</h3>
//           <p><strong>Company:</strong> ${job.company}</p>
//           <p><strong>Location:</strong> ${job.location}</p>
//           <p><strong>Description:</strong> ${job.description}</p>
//         `;
//         jobContainer.appendChild(jobElement);
//       });
//     } else {
//       alert('Failed to load job posts.');
//     }
//   } catch (error) {
//     console.error('Error fetching job posts:', error);
//     alert('Failed to load job posts. Please try again later.');
//   }
// }
// // Load jobs on page load
// document.addEventListener('DOMContentLoaded', loadJobs);//THIS WAS THE MAIN JAVASCRIPT






// {Retrieve job posts from LocalStorage
// function loadJobPosts() {
//   const jobPostsContainer = document.getElementById('jobPostsContainer');

//   // Get posts from LocalStorage
//   const jobPosts = JSON.parse(localStorage.getItem('jobPosts')) || [];

//   // Clear the container
//   jobPostsContainer.innerHTML = '';

//   if (jobPosts.length === 0) {
//       jobPostsContainer.innerHTML = '<p>No job opportunities available at the moment.</p>';
//       return;
//   }

//   // Create and append job posts dynamically
//   jobPosts.forEach(post => {
//       const postElement = document.createElement('div');
//       postElement.classList.add('job-post');

//       postElement.innerHTML = `
//           <h2>${post.jobTitle}</h2>
//           <p><strong>Company:</strong> ${post.companyName}</p>
//           <p><strong>Location:</strong> ${post.location}</p>
//           <p>${post.jobDescription}</p>
//           <a href="${post.applyLink}" target="_blank">Apply Here</a>
//       `;

//       jobPostsContainer.appendChild(postElement);
//   });
// }

// // Call the function to load job posts on page load
// document.addEventListener('DOMContentLoaded', loadJobPosts);}//THIS WAS ASLO DOES SAME THING BUT FOR NOW WE HAVE TO DUMB THIS







document.addEventListener('DOMContentLoaded', function () {
  const jobContainer = document.getElementById('jobContainer');
  const jobPosts = JSON.parse(localStorage.getItem('jobPosts')) || [];

  // Clear the container
  jobContainer.innerHTML = '';

  if (jobPosts.length === 0) {
      jobContainer.innerHTML = '<p>No job opportunities available at the moment.</p>';
      return;
  }

  // Create and append job posts dynamically
  jobPosts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('job-post');
      postElement.innerHTML = `
          <h2>${post.jobTitle}</h2>
          <p><strong>Company:</strong> ${post.companyName}</p>
          <p><strong>Location:</strong> ${post.location}</p>
          <p><strong>Description:</strong>${post.jobDescription}</p>
          <a href="${post.applyLink}" target="_blank">Apply Here</a>
      `;
      jobContainer.appendChild(postElement);
  });
});
