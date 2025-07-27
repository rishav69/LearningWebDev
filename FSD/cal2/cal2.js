const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

//event listener (click)
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var value = button.textContent;

        if (value === 'AC') {
            display.value = '';
        } else if(value === '<'){
            display.value = display.value.slice(0,-1);
        } else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'invalid';
            }
        } else {
            display.value += value;
        }
    });
});