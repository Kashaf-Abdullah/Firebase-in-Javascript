
const userId=document.getElementById('userId');
const firstName =document.getElementById('firstName')
const lastName=document.getElementById('lastName')
const age=document.getElementById('age')
const addBtn=document.getElementById('addBtn')
const updateBtn=document.getElementById('updateBtn')
const removeBtn=document.getElementById('removeBtn');


const database=firebase.database();

const rootref=database.ref('users');
//add Data
addBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    //1st
// database.ref('/users/'+userId.value)
// 2nd
// rootref.child(userId.value)
//3rd
const autoId=rootref.push().key;
rootref.child(autoId)
.set({
    firs_name:firstName.value,
    last_name:lastName.value,
    age:age.value
})
})



//updating data(1)
// updateBtn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     const newData={
//         age:age.value,

//         //add new field
//         // full_name:firstName.value+' '+lastName.value

//     };
//     rootref.child(userId.value).update(newData)
// })


//update data(2)
updateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const newData={
        age:age.value,
        firs_name:firstName.value,
        last_name:lastName.value
    };
    const updates={};
    updates['/users/'+userId.value]=newData;
    updates['/super-users/'+userId.value]=newData;
    database.ref().update(updates)
})



//delete data

removeBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    // rootref.child(userId.value).remove()


    database.ref('/super-users').child(userId.value).remove()
    .then(()=>{
        alert('user removed')
    }).catch((err)=>{
        alert(err.message)

    })
})





//read data


// rootref.on('child_changed', snapshot=>{
//     console.log('An event occured on the databse');
//     console.log(snapshot.value());
    
// })


// rootref.child(0).on('child_changed', snapshot=>{
//     console.log('An event occured on the databse');
//     console.log(snapshot.value());
    
// })



//
// QUERIES  FORMAT
//Refrence.OroderingFunction().QueryingFunction()

// (1)
// rootref.orderByKey().on('value',snapshot=>{
//     console.log(snapshot.val());
    
// })
// (2)
// LimitToLast
// rootref.orderByKey().limitToFirst(2).on('value',snapshot=>{
//     console.log(snapshot.val());
    
// })

// (3)
// rootref.orderByChild('firs_name').limitToFirst(2).on('value',snapshot=>{
//     console.log(snapshot.val());
    
// })


// (4)
// rootref.orderByChild('firs_name').equalTo('Hamna').on('value',snapshot=>{
//     console.log(snapshot.val());
    
// })


// (5)
// rootref.orderByChild('firs_name').startAt('S').on('value',snapshot=>{
//     console.log(snapshot.val());
    
// })

// (6)

database.ref()