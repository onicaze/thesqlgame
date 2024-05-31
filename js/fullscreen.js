// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function () {
    // Start the typing animation
    typeWords(words, function() {
        // Get the loading screen element
        var loadingScreen = document.querySelector('.loading-screen');
        // Add the fade-out class to trigger the animation
        loadingScreen.classList.add('fade-out');
        // After the animation ends, hide the loading screen and display the content
        setTimeout(function () {
            loadingScreen.style.display = 'none';
            // Display the content (replace 'content' with the selector of your content)
            document.getElementById('container').style.display = 'block';
        }, 1000); // Wait for the animation duration
    });
});

const words = ['fullscreen for better experience...'];
const typingSpeed = 100; // Adjust typing speed (milliseconds per character)

function typeWords(words, callback) {
    // Get the typing container
    const typingContainer = document.getElementById('typing-text');

    // Recursive function to type each word
    function typeWord(index) {
        // Base case: if index is equal to words.length, stop typing and execute the callback
        if (index === words.length) {
            callback(); // Execute the callback function
            return;
        }

        // Get the current word
        const word = words[index];

        // Variable to track the character position within the word
        let i = 0;

        // Function to simulate typing
        function type() {
            // Base case: if i is equal to word.length, move to the next word
            if (i === word.length) {
                // Move to the next word after a short delay
                setTimeout(() => {
                    typeWord(index + 1);
                }, 1000); // Wait for 1 second after completing the word
                return;
            }

            // Append the next character to the typing container
            typingContainer.textContent += word[i];
            i++;

            // Call the type function recursively after a short delay
            setTimeout(type, typingSpeed);
        }

        // Start typing the current word
        type();
    }

    // Start typing the words array from index 0
    typeWord(0);
}
