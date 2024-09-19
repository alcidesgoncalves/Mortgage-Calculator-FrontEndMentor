const clearButton = document.querySelector('.clear-btn');
const inputs = document.querySelectorAll('.input-subcontainer');
const inputRadio = document.querySelectorAll('.radio-check');
const mortgageAmout = document.getElementById('mortgage-amount');
const mortgageTerm = document.getElementById('mortgage-term');
const mortgageRate = document.getElementById('interest-rate');
const buttonRepayment = document.querySelector('.button-container');

clearButton.addEventListener('click', () => {
    inputs.forEach(input => {
        input.value = "";
    });

    inputRadio.forEach( radio => {
        radio.checked = false;
    }
    )
});

buttonRepayment.addEventListener('click', (e)=> {
    e.preventDefault();
    let amount = mortgageAmout.value;
    let term = mortgageTerm.value;
    let rateAnnual = mortgageRate.value/100;

    let rateMonthly = rateAnnual/12;
    let n = term * 12;

    let result = amount * (rateMonthly * (1 + rateMonthly)**n) / ((1 + rateMonthly)**n - 1);
    console.log(Math.ceil(result));
})


