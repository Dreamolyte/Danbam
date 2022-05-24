let form = document.getElementById("form")
form.addEventListener('submit', function(event) {
    event.preventDefault()
    let error = document.getElementById("error")
    let message = ""
    let name, email, gender, danbamLocation, danbamMessage, agreement
    name = document.getElementById("name")
    email = document.getElementById("email")
    gender = document.getElementById("gender")
    danbamLocation = document.getElementById("danbamLocation")
    danbamMessage = document.getElementById("danbamMesaage")
    agreement = document.getElementById("agreement")

    if(name.value.length < 3 || name.value.length > 20){
        message ="Name must have 3 - 20 characters";
    }
    else if(!checkAlphabet(name.value)){
        message = "Name can't be filled with numbers and symbols"
    }
    else if(email.value == ""){
        message = "Email must be filled"
    }
    else if(!checkEmail(email.value)){
        message = "Email is not valid"
    }
    else if(gender.value == ""){
        message = "Gender must be chosen"
    }
    else if(danbamLocation.value == ""){
        message = "Danbam Location must be filled"
    }
    else if(danbamMessage.value.length < 8){
        message = "Message must have atleast 8 characters"
    }
    else if(!agreement.checked) {
        message = "You need to agree to send your latest information"
    }
    else{
        alert("Message successfully sent")
    }

    error.textContent = message
})

function checkAlphabet(string){
    string = string.toLowerCase()
    let valid = true
    Array.from(string).forEach(character => {
        if(character < 'a' || character > 'z') valid = false
        if(character == ' ') valid = true

    })
    return valid
}

function checkEmail(email){
    if(!email.includes('@')) return false
    if(!email.endsWith('.com')) return false
    if(email.includes('@.') || email.includes('.@') || email.includes('..')) return false
    return true
}