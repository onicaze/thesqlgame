const words = ['now DML..','its a bit long and because of that i will give you a gift!','you will be given a game after you learn about DML!'
                ,'you can go to your NOTES however much you want during the game!','lets go over the command that you will use in the game!','SELECT'
                ,'the command is:','SELECT * from table_name;','there are tons of commands in SELECT alone.','and it means showing a data or all datas or some datas in a table'
                ,'you will now be directed to the game, enjoy!'
];
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
            window.location.href = 'mysql3.html'; // Change 'another-page.html' to the desired URL
        }, 1000); // Adjust the delay before redirection if needed
    }
}

typeWords(words);