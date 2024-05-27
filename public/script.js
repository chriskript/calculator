document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.dataset.value;
      if (value === '=') {
        try {
          const result = eval(display.value);
          display.value = result;
        } catch (error) {
          display.value = 'Error';
        }
      } else if (value === 'Clear') {
        display.value = ''; // Clear the input field
      } else if (value === '√') { // Updated condition for square root operation
        try {
          const result = Math.sqrt(parseFloat(display.value));
          display.value = result;
        } catch (error) {
          display.value = 'Error';
        }
      } else {
        display.value += value;
      }
    });
  });
});
