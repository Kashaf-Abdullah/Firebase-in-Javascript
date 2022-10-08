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



  //signout

  let signoutButton=document.getElementById("signout")
  signoutButton.addEventListener("click",(e)=>{
    e.preventDefault()
    auth.signOut()
    alert("signout")
    window.location="index.html"
  })