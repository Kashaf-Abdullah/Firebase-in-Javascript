// modal add
const addModal = document.querySelector('.add-modal');
const addModalForm = document.querySelector('.add-modal .form');


addModalForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    db.collection('users').add({
        firstName: addModalForm.firstName.value,
        lastName: addModalForm.lastName.value,
        phone: addModalForm.phone.value,
        email: addModalForm.email.value,
    })
})