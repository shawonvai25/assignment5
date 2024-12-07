document.getElementById('btn-donate1')
.addEventListener('click',function(){
   const inputMoney1 = getInputFieldValueById('input1');

   const balance = getTextFieldValueById('balance');
   console.log('balance here is :',balance);

   if(isNaN(inputMoney1) || inputMoney1 <= 0 || inputMoney1 > balance){
    alert('Failed to donate .');
    return ;
   }
   
   const collect1 = getTextFieldValueById('collection1');
   console.log(collect1);

   const newBalance = balance - inputMoney1;
   document.getElementById('balance').innerText = newBalance;

   const newCollected1 = collect1 + inputMoney1;
   document.getElementById('collection1').innerText = newCollected1;

  
   const modal = document.getElementById('dialog');
   modal.showModal();

   document.getElementById('btn-close')
   .addEventListener('click',function(){
       modal.close();
   })
  
//clear the input field
   document.getElementById('input1').value = '';
})

