// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    console.log('submit btn-submit');
    // get the email address inside the email inputfield
//  always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');

const email = emailField.value;
console.log(email);
// setp-3: get password
//3.a: set id on the html element
//3.b:get the element
//3.c: get the value from the element
const passwordField = document.getElementById('user-password');
const password = passwordField.value;
console.log(email,password);
//DANGER: do not varify email password on the client side
//stem-4 varify email and password
if(email==='s@a.com' && password === '123456')
{
    console.log('valid user');
    window.location.href = 'bank.html';
}
else{
    alert("invalid user use email= s@a.com password = 123456");
}
}
)