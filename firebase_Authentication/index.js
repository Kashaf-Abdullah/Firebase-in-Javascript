var firebaseConfig = {
    apiKey: "AIzaSyDhVYhULmMaWeqOyw5nGHeT_pIAQAQCzCU",
    authDomain: "fir-js-179e6.firebaseapp.com",
    projectId: "fir-js-179e6",
    storageBucket: "fir-js-179e6.appspot.com",
    messagingSenderId: "887561440108",
    appId: "1:887561440108:web:487fb819fa767fcad44149"
  };//initialize forebase

  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth()

  //signup function

  let signUpButton= document.getElementById("signup")
  
signUpButton.addEventListener("click",(e)=>{
    //prevent default behaviour
    e.preventDefault()
    var email=document.getElementById("inputemail")
    var password=document.getElementById("inputpassword")
    console.log(email.value,password.value)

    auth.createUserWithEmailAndPassword(email.value,password.value)
    .then((userCredentials)=>{
        location.reload()
        console.log(userCredentials);
       var user=userCredentials.user;
       console.log(user.email);
        
    }).catch((err)=>{
        var errorCode=err.message;
        alert(errorCode)
    })

})











  //signin function

  let signInButton= document.getElementById("signin")
  
signInButton.addEventListener("click",(e)=>{
    //prevent default
    e.preventDefault()
    var email=document.getElementById("inputemail")
    var password=document.getElementById("inputpassword")
    console.log(email.value,password.value)

    auth.signInWithEmailAndPassword(email.value,password.value)
    .then((userCredentials)=>{
        console.log(userCredentials);
       var user=userCredentials.user;
       alert(user.email)
       window.location="dash.html"
       console.log(user.email);
        
    }).catch((err)=>{
        var errorCode=err.message;
        alert(errorCode)
    })

})


















//This method gets invoked in the UI when there are changes in the 
//authentication state

//1.) Right after the listener has been registered
//2.) When a user is signed in
//3.) When the current is signed out
//4.) When thr current user changes

auth.onAuthStateChanged(function(user){


    if(user){
        var email=user.email;


        var users=document.getElementById("users")
        var text=document.createTextNode(email)


        users.appendChild(text)
    }
})