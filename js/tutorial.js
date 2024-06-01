const words = ['this game uses this kind of tools needed:','COMMAND PROMPT','hello welcome to the tutorial.', 'my name is ####### and i will teach you all about MySQL (not all).','now lets begin.','we will start with:','CREATE','the command is:','CREATE DATABASE database_name;','with this you will create a database!','a database is basically a system that store tables!','theres also CREATE TABLE','the command is:','CREATE TABLE table_name(column1 datatype,column2 datatype,column3 datatype, ....);','its to make a table inside the database (works like excel).','the second one is:','SHOW','the command is:', 'SHOW DATABASES;','it basically means showing all database that you created.','third:','DESCRIBE','the command is:','DESCRIBE table_name;','it will show you the structure of a table!','and lastly:','USE','this is the most important one.','after you create a database make sure you do:','USE database_name;','it is so that we can operate on that specific database!','if you are still confused, try this out!'];
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
            window.location.href = 'basics.html'; // Change 'another-page.html' to the desired URL
        }, 1000); // Adjust the delay before redirection if needed
    }
}

typeWords(words);