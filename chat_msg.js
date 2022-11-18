var firebaseConfig = {
    apiKey: "AIzaSyCUclR7k-RqBOk5a3mUzv2Xf_gquw5lXJs",
    authDomain: "kwitter-1-ee87c.firebaseapp.com",
    databaseURL: "https://kwitter-1-ee87c-default-rtdb.firebaseio.com",
    projectId: "kwitter-1-ee87c",
    storageBucket: "kwitter-1-ee87c.appspot.com",
    messagingSenderId: "325044352487",
    appId: "1:325044352487:web:ebb342134eaa7dedf3b942"
 };
 
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("roomname");

function send() {
    var message = document.getElementById("message").value;
    firebase.database().ref("/").child(room_name).update({
        message: message,
        like: 0,
        user: user_name
    });
    document.getElementById("message").value = "";
}