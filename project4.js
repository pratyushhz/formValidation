console.log("Form validation project");
let validname1 = false;
let validemail = false;
let validphone = false;
$(`#failure`).hide();
$(`#success`).hide();
// GRAB NAME:
const name1 = document.getElementById('name1');
name1.addEventListener('blur', ()=> {
    // console.log("name1 is blurred");
    // VALIDATE NAME HERE
    let regex = /^[a-zA-Z ]{2,30}$/; //must start with [a-zA-Z]([a-zA-Z] and ends with {2,20}characters
    let str = name1.value;
    console.log(regex, str);
    // Matching the regex: validation
    if(regex.test(str)) {
        console.log("Name is valid")
        // remove is-invalid class as name is match
        name1.classList.remove("is-invalid");
        validname1 = true;
    } else {
        console.log("Name is not valid");
        // add is-invalid class as it doesn't match
        name1.classList.add("is-invalid");
        validname1 = false;
    }
})

// GRAB EMAIL:
const email = document.getElementById("email");
email.addEventListener('blur', ()=> {
    console.log("The email is blurred");
    // VALIDATE EMAIL HERE
    let regex1 = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]){2,10}$/;
    // regex1 = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let str1 = email.value;
    console.log(regex1, str1)
    if(regex1.test(str1)) {
        console.log("The email is valid")
        // remove is-invalid class:
        email.classList.remove("is-invalid");
        validemail = true;
    } else {
        console.log("Enter a valid mail id");
        email.classList.add("is-invalid");
        validemail = false;
    }

})

// GRAB PHONE NO:
const phone = document.getElementById("phone");
phone.addEventListener('blur', ()=> {
    // console.log("phone is blurred");
    // VALIDATE PHONE NO
    let regex2 = /^([0-9]){11}$/;
    let str2 = phone.value;
    console.log(regex2, str2);
    if(regex2.test(str2)) {
        console.log("The number is valid");
        // remove is-valid class:
        phone.classList.remove("is-invalid");
        validphone = true;
    } else {
        console.log("The number is not valid");
        phone.classList.add("is-invalid");
        validphone = false;
    }
});

// GRAB THE SUBMIT BUTTON:
let submit = document.getElementById("submit");
submit.addEventListener('click', (e)=> {
    // console.log("Form submitted");
    // form submission
    console.log(validname1,validemail,validphone);
    if(validname1 && validemail && validphone) {
        let failure = document.getElementById('failure');
        console.log("Name, Email and Phone are valid");
        let success = document.getElementById('success');
        success.classList.add("show");
        // remove failure
        // failure.classList.remove("show")
        // using jquery:
        $('#failure').hide();
        $('#success').show();
        
    } else {
        console.log("One of the name, phone and email are not valid.Enter valid details and try again");
        let failure = document.getElementById('failure');
        failure.classList.add("show");
        // success.classList.remove("show");
        $('#success').hide();
        $('#failure').show();
    }
    // reloading
    e.preventDefault();
    

})





