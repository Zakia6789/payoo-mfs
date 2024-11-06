/**
 * 1. add event listener to the add money button (form submit)
 *  . Make sure the preventDeafault() so that bpage doesn't reload.
 * 2. Get the money user wants to add. Also get the pin number provided.
 * 3. verify the pin number. For wrongpin number, ===> 'failed to add'. And  forright pinnumber, allow to add the number to the account balance .
 * 4.Get the current balance
 * 5.add money to be added with the current balance
 * 6.Display / update the current balance in the DOM /UI.
 *  
 */


// step 1: Add event bhandler to the add money button 
document.getElementById('btn-add-money').addEventListener('click', function(event){
//  . Make sure the preventDeafault() so that bpage doesn't reload.
      event.preventDefault();
    console.log('added the nevent handler');



    // step 2: get money and the pin Number
const addMoney = document.getElementById('input-add-money').value;
const addMoneyNumber = parseFloat(addMoney);
const pinnumber = document.getElementById('input-pin-number').value;
// console.log(addMoney, addNumber);


// step 3:verify the pin number.
if(pinnumber === '1234'){
    //add money to the account


    // step 4: get the current balance 
    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);

    // step 5.New Balance / add money to be added with the current balance
    const newBalance = balanceNumber + addMoneyNumber;
    // step 6: update the balance with DOM 
    document.getElementById('account-balance').innerText = newBalance;

}
else{
    alert('Failed to add money. please try again later');
}

});



