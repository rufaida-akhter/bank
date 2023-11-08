document.getElementById('btn-deposit').addEventListener('click',function(){
    //get new deposit value from user
const depositadd = document.getElementById('user-deposit');
const newdepositAmountstring = depositadd.value;
const depositAmount = parseFloat(newdepositAmountstring);
console.log(depositAmount);
depositadd.value = '';
if(isNaN(depositAmount)){
    alert('not valid');
    return;
}
if(!Number(depositAmount)){
    alert('not valid');
    return;
}
//step 3 : get the current total
const depositTotaladd = document.getElementById('depositTotal');
const depositTotalstring = depositTotaladd.innerText;
const depositTotal = parseFloat(depositTotalstring);
depositTotaladd.innerText = depositAmount+depositTotal;
//get current balance total
const balance = document.getElementById('balanceTotal');
const currentbalanceTotal = balance.innerText;
const balanceTotal = parseFloat(currentbalanceTotal);
balance.innerText = balanceTotal+depositAmount;
//step: clear the depositfield


})