// s-1 set an event handler
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    // preventDefault() behavior added
    event.preventDefault();
    console.log('cash out button is clicked');


    // s-2 To get cash out money and pin number
    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('input-cash-out-pin').value;
    console.log(cashOut, pinNumber);


    //s-3 wrong way to verify pinNumber 
    if(pinNumber === '1234'){
        // console.log('Money is reducing');

      // s-4 get the current balance
      const balance = document.getElementById('account-balance').innerText;
    //   console.log(balance);
    const balanceNumber = parseFloat(balance);

    // s-5 Get the Reduce  balance
    const newBalance = cashOutNumber - balanceNumber;

    // s-6 Update the UI / DOM 
    document.getElementById('account-balance').innerText = newBalance;



    }


    else{
        alert('Failed to cash out. Please! Try again later');
    }
})

