// This is a simple example of a counter.js file. You can modify and expand on this code as needed.
// It increments a counter variable every time it's accessed.

const count = 0; // Initialize the count to 0

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('increment-counter');
    button.onclick = function() {
        count++;
        console.log(count); // Log the current value of the counter
    };
});
