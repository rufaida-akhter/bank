// 1: add event handeler to the withdraw field
// 2. get the withdraw amount from the input field
document.getElementById('btn-withdraw').addEventListener('click',function(){

const withdrawField = document.getElementById('withdrawField');
const newwithdrawFieldstring = withdrawField.value;
const newwithdrawField = parseFloat(newwithdrawFieldstring);

withdrawField.value ='';

// get current withdrawtotal


//....................
//get current balance total
const balance = document.getElementById('balanceTotal');
const currentbalanceTotal = balance.innerText;
const balanceTotal = parseFloat(currentbalanceTotal);


if(isNaN(newwithdrawField)){
    alert('not valid');
    return;
}
if (balanceTotal < newwithdrawField){
    alert("taka nai");
    return;
}

const currentwithdrawtotal = document.getElementById('withdrawtotal');
const currentwithdrawtotalstring = currentwithdrawtotal.innerText;
const currentwithdrawtotalAmount = parseFloat(currentwithdrawtotalstring);
currentwithdrawtotal.innerText = currentwithdrawtotalAmount+newwithdrawField;


balance.innerText = balanceTotal-newwithdrawField;


})