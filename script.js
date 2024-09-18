const clearButton = document.querySelector('.clear-btn');
const inputs = document.querySelectorAll('.input-subcontainer');
const inputRadio = document.querySelectorAll('#radio-container');

clearButton.addEventListener('click', () => {
    inputs.forEach(input => {
        input.value = "";
    });

    inputRadio.forEach( radio => {
        radio.checked = false
    }
    )
});




