// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2: get the email address inside the email input field
    // 2.a: set id on the html element
    // 2.b: get the element
    // 2.c: get the value from the element
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get the password inside the password input field
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;


    // DO NOT VERIFY email and password on the client side
    // step-4: verify email and password and check whether valid user or invalid user
    if (email === 'user1234@yahoo.com' && password === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Enter the valid Email and Password');
    }

})