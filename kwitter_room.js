// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBthsK_q9mV6sLQ1Nd-CFrRq1B2lgldiOo",
      authDomain: "kwitter-61652.firebaseapp.com",
      projectId: "kwitter-61652",
      storageBucket: "kwitter-61652.appspot.com",
      messagingSenderId: "43058697612",
      appId: "1:43058697612:web:76e446b21ffa3825f672a9",
      measurementId: "G-CWM850CP3S"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
