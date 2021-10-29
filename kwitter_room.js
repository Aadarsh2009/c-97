
//ADD YOUR FIREBASE LINKS HERE
      var firebaseConfig = {
      apiKey: "AIzaSyCSGeGyeC9JBb1N8t7QpfniQoYckcphUqM",
      authDomain: "kwittertestproject.firebaseapp.com",
      databaseURL: "https://kwittertestproject-default-rtdb.firebaseio.com",
      projectId: "kwittertestproject",
      storageBucket: "kwittertestproject.appspot.com",
      messagingSenderId: "613592898710",
      appId: "1:613592898710:web:6ebf08c542d65011d5b6b7"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
