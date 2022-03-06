

// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);

function getInputValue() {
    const depositInput = document.getElementById('deposit-amount');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    //reset or clear input field
    depositInput.value = '';
    return depositAmount;
}





document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-amount');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputValue();
    new

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

    const withdrawInput = document.getElementById('withdraw amount');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

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

    //reset or clear input field
    withdrawInput.value = '';

})

