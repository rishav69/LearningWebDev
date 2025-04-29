document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // prevents the form from submitting
        let display = document.querySelector('input[name="display"]');
        try {
            display.value = eval(display.value.replace(/x/g, '*')); // handles the 'x' for multiplication
        } catch (e) {
            display.value = "Error";
        }
    }
});
