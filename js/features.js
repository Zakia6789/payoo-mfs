// Active Cash Out Button 
document.getElementById('btn-show-cash-out'). addEventListener('click', function(){
    console.log('show-cash-out-button is clicked');


    document.getElementById('cash-out-form').classList.remove('hidden');

    // 2  hide the add money form
    document.getElementById('add-money-form').classList.add('hidden');
})


// Show add money form and hide the cash out form 

document.getElementById('btn-show-add-money').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden');

    document.getElementById('cash-out-form').classList.add('hidden');
})