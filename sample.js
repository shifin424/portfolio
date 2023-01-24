const name =document.getElementById("name")
const password =document.getElementById("phone")

const form = document.getElementById("contactform")
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e) => {
    let messages =[]
    if (name.value === '' || name.value == null){
        messages.push('Name is required')
    }
    if(password.value.length <= 6){
        messages.push("phone number must be longer than 6 numbers")
    }
    if(password.value.length <= 10){
        messages.push("phone number must be 10 numbers")
    }
    if (phone.value === 'password'){
        messages.push('number cannot be 12345678910')
    }
    if(messages.length > 0)
    e.preventDefault()
    errorElement.innerHTML = messages.join(', ')
})