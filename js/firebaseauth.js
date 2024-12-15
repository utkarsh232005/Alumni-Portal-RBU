// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js"
import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo21ZP_OCJXqbxxh4M3ujrllWTlJxfng8",
  authDomain: "alumni-portal-a4a6e.firebaseapp.com",
  projectId: "alumni-portal-a4a6e",
  storageBucket: "alumni-portal-a4a6e.firebasestorage.app",
  messagingSenderId: "233790086192",
  appId: "1:233790086192:web:3134c3629720e6d39a21f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function showMessage(message, divId){
    var messageDiv = document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);

}
const signUp = document.getElementById("submit");
signUp.addEventListener('click', (event)=>{
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmPassword').value;

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password, confirmpassword)
    .then((userCredential)=>{
        const user=userCredential.user;
        const userData={
            email: email
            // firstname: firstname,
            // lastname: lastname
        };

        showMessage("Account Created Successfully!", 'signUpMessage');
        const docRef=doc(db, "users", user.uid);
        setDoc(docRef, userData)
        .then(()=>{
            window.location.href='login.html';
        })
        .catch((error)=>{
            console.error("error writing document", error);
        });
    })
    .catch((error)=>{
        const errorCode = error.code;
        if(errorCode=='auth/email-already-in-use'){
            showMessage("Email Id Already Exist !!", 'signUpMessage');
        }
        else{
            showMessage('Kindly Use College Email Id', 'signUpMessage');
        }
    })
});

const signIn = document.getElementById('submit');
signIn.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const auth=getAuth();


    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        showMessage('Login Successfull !', 'signInMessage');
        const user=userCredential.user;
        localStorage.setItem('loggedInUserId', user.uid);
        window.location.href="dashboard.html";
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode==='auth/invalid-credential'){
            showMessage('Incorrect Credentials !!', 'signInMessage');
        }
        else{
            showMessage('Account Does not Exist !!', 'signInMessage');
        }
    })

})