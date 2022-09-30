
var firebaseConfig = {
    apiKey: "AIzaSyDbMbAAtwhqgZQycZhpKR3RAS0yYymV9t4",
    authDomain: "fir-storage-js-ac738.firebaseapp.com",
    projectId: "fir-storage-js-ac738",
    storageBucket: "fir-storage-js-ac738.appspot.com",
    messagingSenderId: "731555393146",
    appId: "1:731555393146:web:d742402fc8b3dfc73b95c3"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);








let profileView=document.getElementById('profile-view')
var signupView=document.getElementById('signup-view')


let email=document.getElementById('email')
let pword=document.getElementById('pword')
let img=document.getElementById('img')



let file={}



function chooseFile(e){
    file=e.target.files[0]
}






function signUpButtonPressed(){


    firebase.auth().createUserWithEmailAndPassword(email.value,pword.value).then(auth=>{
        console.log(auth);

firebase.storage().ref('users'+ auth.user.uid+ '/profile.jpg').put(file).then(function(){
    console.log('successfully uploaded');
    
})
        
    }).catch(error=>{

        console.log(error.message)

    })


}








firebase.auth().onAuthStateChanged(user=>{
    if(user){
        firebase.storage().ref('users'+user.uid +'/profile.jpg').getDownloadURL().then(imgUrl=>{
            img.src=imgUrl;
            signupView.style.visibility='hidden'
            profileView.style.visibility='visible'
        })
    }

    else{
        signupView.style.visibility='visible'
        profileView.style.visibility='hidden'

    }
})



// signout

function signOutButtonPressed(){
    firebase.auth().signOut();
}