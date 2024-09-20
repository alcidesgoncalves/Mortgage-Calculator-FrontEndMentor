const clearButton = document.querySelector('.clear-btn');
const inputs = document.querySelectorAll('.input-subcontainer');
const inputRadio = document.querySelectorAll('.radio-check');
const buttonRepayment = document.querySelector('.button-container');
const monthlyRepayment = document.getElementById('mon-repayment');

clearButton.addEventListener('click', () => {
    inputs.forEach(input => {
        input.value = "";
    });

    inputRadio.forEach( radio => {
        radio.checked = false;
    }
    )
});

function areInputsValid() {
    const mortgageAmount = document.getElementById('mortgage-amount').value;
    const mortgageTerm = document.getElementById('mortgage-term').value;
    const mortgageRate = document.getElementById('interest-rate').value/100;
    return mortgageAmount !== "" && mortgageTerm !== "" && mortgageRate !== "";
}

function isOperationSelected() {
    const selectedOperation = document.querySelector('input[name="mortgage-type"]:checked');
    return selectedOperation !== null;
}

function calculate(mortgageAmount, mortgageTerm, mortgageRate, mortgageType) {
    const amount = parseFloat(mortgageAmount);
    const term = parseFloat(mortgageTerm);
    const rate = parseFloat(mortgageRate);
    let rateMonthly = rate/12;
    let n = term * 12;

    if (mortgageType === "repay"){
        return amount * (rateMonthly * (1 + rateMonthly)**n) / ((1 + rateMonthly)**n - 1);
    } else if (mortgageType === "interest") {
        console.log("Ainda não fiz");
    } else {
        throw new Error("Operação inválida");
    }
}

function validateAndCalculate(e) {
    e.preventDefault();
    
    if (!areInputsValid()) {
        alert('Por favor, preencha todos os campos numéricos.');
        return;
    }

    if (!isOperationSelected()) {
        alert('Por favor, selecione uma operação.');
        return;
    }
    const mortgageAmount = document.getElementById('mortgage-amount').value;
    const mortgageTerm = document.getElementById('mortgage-term').value;
    const mortgageRate = document.getElementById('interest-rate').value/100;
    const mortgageType = document.querySelector('input[name="mortgage-type"]:checked').value;

    try {
        const result = calculate(mortgageAmount, mortgageTerm, mortgageRate, mortgageType);
        monthlyRepayment.textContent = Math.ceil(result)
    } catch (error) {
        console.log(error);
        alert("Ocorreu algum erro!");
    }
    
}

buttonRepayment.addEventListener('click', validateAndCalculate);

