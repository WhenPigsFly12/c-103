// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAE9t-foL2Kk1rb8YFKQ_KAJyWCByIh3dU",
    authDomain: "c-101-3dddf.firebaseapp.com",
    databaseURL: "https://c-101-3dddf-default-rtdb.firebaseio.com",
    projectId: "c-101-3dddf",
    storageBucket: "c-101-3dddf.appspot.com",
    messagingSenderId: "746856330178",
    appId: "1:746856330178:web:0095c03dc4a4e29afd5c5b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



