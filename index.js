//login btn event hundler
const loginBtn = document.getElementById("login")
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

//deposit event handler
const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener("click", function(){
    
    const depositNumber = getInputNumber("depositAmount")

    updateSpanText("currentDeposit",depositNumber);
    updateSpanText("currentBalance",depositNumber);

    document.getElementById("depositAmount").value = "";

})

//withdraw event handler
    const withdrawBtn = document.getElementById("withdrawBtn");
    withdrawBtn.addEventListener("click",function(){
        const withdrawNumber = getInputNumber("withdrawAmount");
      

        
        updateSpanText("currentWithdraw",withdrawNumber);
        updateSpanText("currentBalance",-1 * withdrawNumber);
        document.getElementById("withdrawAmount").value = "";
    })

function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}    

function updateSpanText(id,depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}




