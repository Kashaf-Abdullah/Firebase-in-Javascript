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



  //signput

  let signoutButton=document.getElementById("signout")
  signoutButton.addEventListener("click",(e)=>{
e.preventDefault()
auth.signOut();
alert("signout")
window.location="index.html"
  })