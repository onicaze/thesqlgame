const words = ['wow you did it!','you just completed the basics!','now lets go to the fun stuff...','you will learn about DDL and DML!'
    ,'lets start with DDL.','first up:','DROP','the command is:','DROP DATABASE database_name;','or DROP TABLE table_name;','DROP means that you delete a database or a table!','now next one is:'
    ,'ALTER','ALTER has a bunch of uses!','here are the examples:','ALTER TABLE table_name ADD column4 datatype;','the ADD is for adding another column in the table!'
    ,'ALTER TABLE table_name DROP COLUMN column4;','the DROP COLUMN is for deleting a column in the table','ALTER TABLE table_name RENAME COLUMN column1 to column5;'
    ,'the RENAME COLUMN is for changing a columns name','lastly ALTER table table_name MODIFY COLUMN column1 datatype1, ADD PRIMARY KEY(column1);'
    ,'the MODIFY COLUMN is for changing a columns datatype and can also add a PRIMARY KEY in that example!','a PRIMARY KEY uniquely identifies each record in a table.'
    ,'you can only have one primary key in a table.','mainly used for "ID" columns','lets try a little quiz!'];
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
            window.location.href = 'ddl.html'; // Change 'another-page.html' to the desired URL
        }, 1000); // Adjust the delay before redirection if needed
    }
}

typeWords(words);