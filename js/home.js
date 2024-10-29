// add money to the acccount

// step 1: Added an event handler
// prevent page reload after form submit 
// step 2: get money to be added to the account balance and get the pin number
// step 3: verify the pin number 

// step 1: Add an event handler to the add money button insid the form 
document.getElementById('btn-add-money').addEventListener('click', function(event){
          //prevent page reload after form submit
    event.preventDefault();

    // step 2: get money and pin to added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log( addMoneyInput, pinNumberInput);

    // step 3: verify the pin number (not the right way)
    if(pinNumberInput ==='1234'){
        console.log('adding money to your account');

        // step 4: get the current balance
    const balance = document.getElementById('account-balance').innerText;
    console.log( balance);

        // step 5: add addMoneyInput with balance 
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber ;
        console.log(newBalance);


        
    // step 6: update the balance in the UI/DOM
    document.getElementById('account-balance').innerText = newBalance;

    }


    else{
        alert('Failed to add money! Please try again');
    }


})