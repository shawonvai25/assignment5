document.getElementById('btn-donate3')
.addEventListener('click',function(){
   const inputMoney3 = getInputFieldValueById('input3');

   const balance = getTextFieldValueById('balance');
   console.log('balance here is :',balance);

   if(isNaN(inputMoney3) || inputMoney3 <= 0 || inputMoney3 > balance){
    alert('Failed to donate .');
    return ;
   }
   
   const collect3 = getTextFieldValueById('collection3');
   console.log(collect3);

   const newBalance = balance - inputMoney3;
   document.getElementById('balance').innerText = newBalance;

   const newCollected3 = collect3 + inputMoney3;
   document.getElementById('collection3').innerText = newCollected3;

   document.getElementById('modalCash').innerText = inputMoney3; 

  const modal = document.getElementById('dialog');
  modal.showModal();
 
  document.getElementById('btn-close')
.addEventListener('click',function(){
    modal.close();
})
  
//clear the input field
   document.getElementById('input3').value = '';
})



