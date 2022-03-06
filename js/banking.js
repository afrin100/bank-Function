

// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //reset or clear input field
    inputField.value = '';
    return amountValue;
}





document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-amount');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputValue('deposit-amount');


    //get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount;



    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousbalanceTotal + depositAmount;
});

//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {

    // const withdrawInput = document.getElementById('withdraw amount');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    const withdrawAmount = getInputValue('withdraw amount');

    //get current withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawAmountTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawAmountTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    //update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousbalanceTotal - withdrawAmount;

})

