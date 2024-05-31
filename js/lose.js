const words = ['you lost wow.', 'this game isnt even that hard.','you are so bad.','go study more.','credits:','chatgpt as the number one contributor.','phoenix - making stuff.','kenneth - making cool stuff.','farrel - also makes cool stuff.','peter - also makes really cool stuff.','music by toby fox','goodbye, and go play something else if you cant beat this game.'];
const typingSpeed = 100; // Adjust typing speed (milliseconds per character)

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
            window.location.href = 'index.html'; // Change 'another-page.html' to the desired URL
        }, 1000); // Adjust the delay before redirection if needed
    }
}

typeWords(words);