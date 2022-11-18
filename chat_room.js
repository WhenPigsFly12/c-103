// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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

  username = localStorage.getItem("user_name");
  console.log(username);
  //document.getElementById("USERNAME").innerHTML = "Welcome" + username + "!";

   function addRoom() {
        var room = document.getElementById("roomname").value;
        firebase.database().ref("/").child(room).update({
          purpose: "adding room"
        });
        window.location = "chat_msg.html";
   }

   function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log(Room_names);
    row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(roomname) {
     localStorage.setItem("roomname", roomname);
     window.location = "chat_msg.html";
}

function logOut() {
     localStorage.removeItem("username");
     localStorage.removeItem("roomname")
     window.location = index.html;
}