const clearButton = document.querySelector('.clear-btn');
const inputs = document.querySelectorAll('.input-subcontainer');

clearButton.addEventListener('click', () => {
    inputs.forEach(input => {
        input.value = "";
    });
});




