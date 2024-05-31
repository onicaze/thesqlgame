const words = ['i lied lol','i will teach you how to backup and export first','but with images this time! so you dont get confused!','enjoy!'];
const typingSpeed = 80; // Adjust typing speed (milliseconds per character)

function typeWords(words, index = 0) {
    if (index < words.length) {
        const word = words[index];
        const typingContainer = document.getElementById('typing-text');
        typingContainer.textContent = ''; // Clear previous text
        let i = 0;

        function type() {
            if (i < word.length) {
                typingContainer.textContent += word[i];
                i++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(() => {
                    typeWords(words, index + 1); // Move to the next word
                }, 1000); // Wait for 1 second after completing the word
            }
        }

        type();
    } else {
        // Redirect to another page after the typing animation is done
        setTimeout(() => {
            window.location.href = 'final_tutorial.html'; // Change 'another-page.html' to the desired URL
        }, 1000); // Adjust the delay before redirection if needed
    }
}

typeWords(words);