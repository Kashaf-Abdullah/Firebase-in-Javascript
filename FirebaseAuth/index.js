const firebaseConfig = {
    apiKey: "AIzaSyBjh_jm4pC4avu4zcwaLSTenq_OscFTlHE",
    authDomain: "fir-auth-js-f287f.firebaseapp.com",
    projectId: "fir-auth-js-f287f",
    storageBucket: "fir-auth-js-f287f.appspot.com",
    messagingSenderId: "17027716061",
    appId: "1:17027716061:web:c02738411c19f8f1675c34"
  };


  //initialize firebase
  firebase.initializeApp(firebaseConfig)
  const auth=firebase.auth()


auth.onAuthStateChanged(function(user){
    if(user){
      var email=user.email;
   
var users=document.getElementById("users")  
  var text=document.createTextNode(email)
  
  users.appendChild(text)}
  })