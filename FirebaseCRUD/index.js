const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBjh_jm4pC4avu4zcwaLSTenq_OscFTlHE",
    authDomain: "fir-auth-js-f287f.firebaseapp.com",
    projectId: "fir-auth-js-f287f",
    storageBucket: "fir-auth-js-f287f.appspot.com",
    messagingSenderId: "17027716061",
    appId: "1:17027716061:web:c02738411c19f8f1675c34"
})

// initialize firebase database
const db=firebaseApp.firestore();
const auth=firebaseApp.auth();

const register=()=>{
    const email=document.getElementById('email').value
    const password=document.getElementById('password').value
auth.createUserWithEmailAndPassword(email,password)
.then((res)=>{
    console.log(res.user);
    
})
.catch((err)=>{
console.log(err.message)
})

}


//for login

const login=()=>{
    
    const email=document.getElementById('email').value
    const password=document.getElementById('password').value

    auth.signInWithEmailAndPassword(email,password)
    .then((res)=>{
        console.log(res.user);
        
    })
    .catch((err)=>{
        alert(err.message)
    console.log(err.message)
    })
}





//firebase firstore
const saveData=()=>{

    const email=document.getElementById('email').value
    const password=document.getElementById('password').value


db.collection('users')
.add({
    email:email,
    password:password
})
.then((docRef)=>{
console.log("document written with ID",docRef.id)
})
.catch((err)=>{
console.log(err.message)
})

}


// READ DATA FROM FIRESTORE
const readData=()=>{
    db.collection('users')
    .get()
    .then((data)=>{
        console.log(data.docs);
        console.log(data.docs.map((item)=>{
            return {...item.data(),id:item.id}
        }));
    })
}


//UPDATE DATA
const updateData=()=>{
    db.collection('users').doc('JHxxLUGIK3zzMhgy0D2R')
    .update({
        email:'this23@gmail.com',
        password:'1234354'
    })
    .then(()=>{
        alert('data updated')
    })
}

//DELETE DATA
const deleteData=()=>{
    db.collection('users').doc('JHxxLUGIK3zzMhgy0D2R')
    .delete()
    .then(()=>{
console.log('data deleted');

    })
}