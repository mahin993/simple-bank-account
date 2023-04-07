/* 
step-1: add event handler with the withdraw button
step-2: get the withdraw amount from the withdraw input field
    2.a: also make sure to convert the input into a number by using parseFloat
step-3: get previous withdraw total
step-4: calculate total withdraw amount
    4.a: set total withdraw amount
step-5: get the previous balance total
step-6: calculate new total balance
    6.a: set the balance total
step-7: clear the withdraw field
*/

// step-1: add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2: get the withdraw amount from the withdraw input field
    // 2.a: also make sure to convert the input into a number by using parseFloat
    // always remember to use .value to get text from an input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-3: get previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step-7: clear the withdraw field
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please, enter a valid number');
        return;
    }

    // step-5: get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('You can not withdraw more than current balance');
        return;
    }

    // step-4: calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // 4.a: set total withdraw amount
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6: calculate new total balance
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // step-6: calculate new total balance
    balanceTotalElement.innerText = newBalanceTotal;






})