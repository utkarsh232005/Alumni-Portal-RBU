// // Handle form submission
// document.getElementById('jobPostForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     // Get form values
//     const jobTitle = document.getElementById('jobTitle').value;
//     const companyName = document.getElementById('companyName').value;
//     const jobDescription = document.getElementById('jobDescription').value;
//     const location = document.getElementById('location').value;
//     const applyLink = document.getElementById('applyLink').value;

//     // Create a job post object
//     const newPost = {
//         jobTitle,
//         companyName,
//         jobDescription,
//         location,
//         applyLink,
//     };

//     // Get existing posts from LocalStorage
//     const existingPosts = JSON.parse(localStorage.getItem('jobPosts')) || [];

//     // Add the new post to the list
//     existingPosts.push(newPost);

//     // Save updated posts to LocalStorage
//     localStorage.setItem('jobPosts', JSON.stringify(existingPosts));

//     // Reset the form
//     document.getElementById('jobPostForm').reset();

//     // Show a success message
//     const formMessage = document.getElementById('formMessage');
//     formMessage.textContent = 'Job post created successfully!';
//     setTimeout(() => {
//         formMessage.textContent = '';
//     }, 3000);
// });


/// Updated post.js: Save job posts to localStorage
document.getElementById('jobPostForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const jobTitle = document.getElementById('jobTitle').value;
    const companyName = document.getElementById('companyName').value;
    const jobDescription = document.getElementById('jobDescription').value;
    const location = document.getElementById('location').value;
    const applyLink = document.getElementById('applyLink').value;

    // Create a job post object
    const newPost = {
        jobTitle,
        companyName,
        jobDescription,
        location,
        applyLink,
    };

    // Get existing posts from LocalStorage
    const existingPosts = JSON.parse(localStorage.getItem('jobPosts')) || [];

    // Add the new post to the list
    existingPosts.push(newPost);

    // Save updated posts to LocalStorage
    localStorage.setItem('jobPosts', JSON.stringify(existingPosts));

    // Reset the form
    document.getElementById('jobPostForm').reset();

    // Show a success message
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = 'Job post created successfully!';
    setTimeout(() => {
        formMessage.textContent = '';
    }, 3000);
});