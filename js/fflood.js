document.getElementById('btn-donate2')
.addEventListener('click',function(){
   const inputMoney2 = getInputFieldValueById('input2');

   const balance = getTextFieldValueById('balance');
   console.log('balance here is :',balance);

   if(isNaN(inputMoney2) || inputMoney2 <= 0 || inputMoney2 > balance){
    alert('Failed to donate .');
    return ;
   }
   
   const collect2 = getTextFieldValueById('collection2');
   console.log(collect2);

   const newBalance = balance - inputMoney2;
   document.getElementById('balance').innerText = newBalance;

   const newCollected2 = collect2 + inputMoney2;
   document.getElementById('collection2').innerText = newCollected2;

   document.getElementById('modalCash').innerText = inputMoney2;
   const modal = document.getElementById('dialog');
   modal.showModal();

   document.getElementById('btn-close')
   .addEventListener('click',function(){
       modal.close();
   })
  
   const div = document.createElement('div');
   div.innerHTML = `
   ${inputMoney2} Taka is Donated for Flood at Feni, Bangladesh
   `
   document.getElementById('history-section').append(div);
  
//clear the input field
   document.getElementById('input2').value = '';
})