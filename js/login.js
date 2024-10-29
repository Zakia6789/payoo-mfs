//search: from  submit reloading the page

// step 1: set event handler
// document.getElementById('button-login').addEventListener('click', function(event){
    // step 2: prevent default behavior (prevent reloading browser )
    // event.preventDefault(); //vejal to beginner
    // console.log('login button is clicked');

    // step 3:get the phone number 
    // const phoneNumber = document.getElementById('phone-mumber').value;
    // const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    // step 4: Validate phone and pin number 
    // this is temporary .You should do like this .
    // if(phoneNumber === '5' && pinNumber === '1234'){
    //     console.log('You are logged in');
        // step5: Allow user to use the website
//     }

//     else{
//         alert('Wrong phone or pin number');
//     }
// })





document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();


    // get the phone and pin 
    const phoneNumber = document.getElementById('phone-mumber').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);

    // bad way to validation 
    if (phoneNumber === '5' && pinNumber === '1234'){
        console.log('You are logged in');
        window.location.href ='/home.html';
    }

    else{
        alert('Wrong phone number or pin');
    }
})