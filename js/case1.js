document.getElementById('btn-donate').
addEventListener('click',function(){
 
    const done = getTheValuesById('input-money');
    console.log(done );
    const balance = getTextValueById('balance');
    const newBalance = balance - done ;

    const donatedAmount = getTextValueById('card1-donate');
    const updateDonated = donatedAmount + done;
    
    document.getElementById('card1-donate').innerText = updateDonated;
    document.getElementById('balance').innerText = newBalance;
    
    // clear the input field
    document.getElementById('input-money').value = '';
   
})