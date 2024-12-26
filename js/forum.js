// const API_BASE_URL = 'http://localhost:3000/api/forum'; // Replace with your backend URL

// // Function to fetch and display forum posts
// async function loadForumPosts() {
//   try {
//     const response = await fetch(API_BASE_URL);
//     const posts = await response.json();

//     if (response.ok) {
//       const forumContainer = document.getElementById('forumContainer');
//       posts.forEach(post => {
//         const postElement = document.createElement('div');
//         postElement.classList.add('forum-post');
//         postElement.innerHTML = `
//           <h3>${post.title}</h3>
//           <p><strong>Posted by:</strong> ${post.author}</p>
//           <p><strong>Discussion:</strong> ${post.content}</p>
//         `;
//         forumContainer.appendChild(postElement);
//       });
//     } else {
//       alert('Failed to load forum posts.');
//     }
//   } catch (error) {
//     console.error('Error fetching forum posts:', error);
//     alert('Failed to load forum posts. Please try again later.');
//   }
// }

// // Load forum posts on page load
// document.addEventListener('DOMContentLoaded', loadForumPosts);




/////////////////////////////////////////////////////////////////////////////////////////


// Firebase configuration
// Firebase configuration
// Firebase configuration
// Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAo21ZP_OCJXqbxxh4M3ujrllWTlJxfng8",
//   authDomain: "alumni-portal-a4a6e.firebaseapp.com",
//   databaseURL: "https://alumni-portal-a4a6e-default-rtdb.firebaseio.com",
//   projectId: "alumni-portal-a4a6e",
//   storageBucket: "alumni-portal-a4a6e.appspot.com",
//   messagingSenderId: "233790086192",
//   appId: "1:233790086192:web:3134c3629720e6d39a21f5"
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const db = firebase.getDatabase(app);

// // DOM Elements
// const messageForm = document.getElementById('messageForm');
// const messageInput = document.getElementById('messageInput');
// const messagesContainer = document.getElementById('messages');

// // Function to add a message to the chat window
// function appendMessage(text, sender) {
//   const messageElement = document.createElement('div');
//   messageElement.className = `message ${sender === 'self' ? 'sent' : 'received'}`;
//   messageElement.textContent = text;
//   messagesContainer.appendChild(messageElement);
//   messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll
// }

// // Real-time listener for messages from Firebase
// firebase.onValue(firebase.ref(db, 'groupChat/messages'), (snapshot) => {
//   messagesContainer.innerHTML = ''; // Clear messages container
//   const messages = snapshot.val();
//   if (messages) {
//     Object.values(messages).forEach((msg) => {
//       appendMessage(msg.text, msg.sender);
//     });
//   }
// });

// // Send message and show it locally
// messageForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const text = messageInput.value.trim();
//   if (text) {
//     // Locally render the message immediately
//     appendMessage(text, 'self');

//     // Send message to Firebase
//     try {
//       const newMessageRef = firebase.push(firebase.ref(db, 'groupChat/messages'));
//       await firebase.set(newMessageRef, {
//         text: text,
//         sender: 'self', // Change to dynamically identify sender if needed
//         timestamp: Date.now()
//       });
//     } catch (error) {
//       console.error('Error sending message:', error);
//       alert('Failed to send the message. Please try again.');
//     }

//     // Clear the input field
//     messageInput.value = '';
//   }
// });



///////////////////////////////////////////////////////////////////////////



// // DOM Elements
// const messageForm = document.getElementById('messageForm');
// const messageInput = document.getElementById('messageInput');
// const messagesContainer = document.getElementById('messages');

// // Function to get messages from localStorage
// function getMessages() {
//   const messages = localStorage.getItem('groupChatMessages');
//   return messages ? JSON.parse(messages) : [];
// }

// // Function to save messages to localStorage
// function saveMessages(messages) {
//   localStorage.setItem('groupChatMessages', JSON.stringify(messages));
// }

// // Function to add a message to the chat window
// function appendMessage(text, sender) {
//   const messageElement = document.createElement('div');
//   messageElement.className = `message ${sender === 'self' ? 'sent' : 'received'}`;
//   messageElement.textContent = text;
//   messagesContainer.appendChild(messageElement);
//   messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll
// }

// // Load messages from localStorage on page load
// document.addEventListener('DOMContentLoaded', () => {
//   const messages = getMessages();
//   messages.forEach((msg) => appendMessage(msg.text, msg.sender));
// });

// // Send message and store it in localStorage
// messageForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const text = messageInput.value.trim();
//   if (text) {
//     // Locally render the message immediately
//     appendMessage(text, 'self');

//     // Save message to localStorage
//     const messages = getMessages();
//     messages.push({ text, sender: 'self', timestamp: Date.now() });
//     saveMessages(messages);

//     // Clear the input field
//     messageInput.value = '';
//   }
// });
///////////////////////////////////////////////////////////////////////////////////////////

function toggleReplyForm(replyId) {
  const replyForm = document.getElementById(replyId);
  if (replyForm.style.display === "block") {
      replyForm.style.display = "none";
  } else {
      replyForm.style.display = "block";
  }
}

function addReply(postId, replyId, replyTextId) {
  const replyText = document.getElementById(replyTextId).value;
  if (replyText.trim() === "") {
      alert("Please write a reply.");
      return;
  }

  const replyContainer = document.getElementById(replyId);
  const newReply = document.createElement("div");
  newReply.classList.add("reply");
  newReply.innerHTML = `<p><strong>You:</strong> ${replyText}</p>`;
  replyContainer.appendChild(newReply);

  document.getElementById(replyTextId).value = ""; // Clear the text area after posting
}

function createPost() {
  const newPostText = document.getElementById("newPostText").value;
  if (newPostText.trim() === "") {
      alert("Please write a discussion topic.");
      return;
  }

  const forumPosts = document.querySelector(".forum-posts");
  const newPost = document.createElement("div");
  newPost.classList.add("post");
  newPost.innerHTML = `
      <h3>${newPostText}</h3>
      <p>Start the discussion!</p>
      <button onclick="toggleReplyForm('reply${forumPosts.children.length + 1}')">Reply</button>
      <div class="replies" id="reply${forumPosts.children.length + 1}"></div>
      <textarea id="replyText${forumPosts.children.length + 1}" placeholder="Write a reply..."></textarea>
      <button onclick="addReply('post${forumPosts.children.length + 1}', 'reply${forumPosts.children.length + 1}', 'replyText${forumPosts.children.length + 1}')">Post Reply</button>
  `;
  forumPosts.appendChild(newPost);

  document.getElementById("newPostText").value = ""; // Clear the text area after creating a post
}
