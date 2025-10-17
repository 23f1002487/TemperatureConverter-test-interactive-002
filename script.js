// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    // Set the document title as required
    document.title = 'Temp Convert Pro';

    // Select the input, button, and result elements
    const celsiusInput = document.querySelector('#celsius-input');
    const convertBtn = document.querySelector('#convert-btn');
    const fahrenheitResult = document.querySelector('#fahrenheit-result');

    // Add click event listener to the convert button
    convertBtn.addEventListener('click', function() {
        const celsiusValue = parseFloat(celsiusInput.value);
        if (isNaN(celsiusValue)) {
            // Show error if input is invalid
            fahrenheitResult.textContent = 'Please enter a valid number';
            return;
        }
        // Calculate Fahrenheit
        const fahrenheit = (celsiusValue * 9/5) + 32;
        // Display the result truncated to 2 decimal places
        fahrenheitResult.textContent = fahrenheit.toFixed(2) + ' °F';
    });
});