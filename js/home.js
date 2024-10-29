// add money to the acccount

// step 1: Added an event handler
// prevent page reload after form submit 
// step 2: get money to be added to the account

// step 1: Add an event handler to the add money button insid the form 
document.getElementById('btn-add-money').addEventListener('click', function(event){
          //prevent page reload after form submit
    event.preventDefault();

    // step 2: get money and pin to added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(addMoneyInput, pinNumberInput);

})