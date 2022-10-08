console.log('dd');

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


  //signup function
let signupButton=document.getElementById("signup")

signupButton.addEventListener("click",(e)=>{
    e.preventDefault();
    var email=document.getElementById("inputemail")
    var password=document.getElementById("inputpassword")
    console.log(email.value,password.value)
    auth.createUserWithEmailAndPassword(email.value,password.value).
    then((userCredentials)=>{
        console.log(userCredentials)
        window.location="login.html"


    }).catch((err)=>{
        alert(err.message)
    })
})



