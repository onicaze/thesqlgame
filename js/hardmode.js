document.getElementById('backgroundMusic').volume = 0.1; // Volume range is 0.0 to 1.0

// Define your questions array
const questions = [
    { question: 'show all data in companies table', answer: ['select * from companies;'] },
    { question: 'show all data in workers table', answer: ['select * from workers;'] },
    { question: 'show company, contact, and address from companies table', answer: ['SELECT company, contact, address FROM companies;','SELECT company, address, contact FROM companies;','SELECT contact,company,address FROM companies;','SELECT contact, address, company FROM companies;','SELECT address, company, contact FROM companies;','SELECT address, contact, company FROM companies;'] },
    { question: 'show all data in companies table from japan', answer: ["select * from companies WHERE country='japan';",'select * from companies where country="japan";'] },
    { question: 'show all data in companies table from indonesia with id = 3', answer: ['select * from companies where country="indonesia" and id=3;',"select * from companies where country='indonesia' and id=3;"] },
    { question: 'show all data in companies table from hungary or uk', answer: ["SELECT * FROM companies WHERE country = 'hungary' OR country = 'uk';",'SELECT * FROM companies WHERE country = "hungary" OR country = "uk";','SELECT * FROM companies WHERE country = "uk" OR country = "hungary";',"SELECT * FROM companies WHERE country = 'uk' OR country = 'hungary';"] },
    { question: 'show all data in workers table, sort it by name in descending', answer: ['SELECT * FROM workers ORDER BY name DESC;'] },
    { question: 'show a worker with the highest workerid in workers table', answer: ['SELECT MAX(workerid) FROM workers;'] },
    { question: 'show all data in companies table with address containing the word "bandung"', answer: ["SELECT * FROM companies WHERE address LIKE '%bandung%';",'SELECT * FROM companies WHERE address LIKE "%bandung%";'] },
    { question: 'show all data in companies table with address starting with "a"', answer: ["SELECT * FROM companies WHERE address LIKE 'a%';",'SELECT * FROM companies WHERE address LIKE "a%";'] },
];

// Maintain the current question index and HP
let currentQuestionIndex = 0;
let hp = 1; // Initialize HP with a starting value of 1
let correctHp = 10; // Initialize correctHp with a starting value of 10

// Function to check if Enter key is pressed
function submitOnEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default form submission
        checkAnswer(event); // Call the function to check the answer
    }
}

// Attach event listener to input field to listen for keydown event
document.getElementById('answer').addEventListener('keydown', submitOnEnter);

function generateRandomText() {
    var numberOfElements = 50;
    var positions = [];
    var javascriptCode = '';

    for (let i = 0; i < numberOfElements; i++) {
        let randomTop = Math.floor(Math.random() * 100);
        let randomLeft = Math.floor(Math.random() * 100);

        while (isColliding(randomTop, randomLeft, positions)) {
            randomTop = Math.floor(Math.random() * 100);
            randomLeft = Math.floor(Math.random() * 100);
        }

        positions.push({ top: randomTop, left: randomLeft });

        let timeDelay = i * 100;
        javascriptCode += `setTimeout(function() {
            var div = document.createElement('div');
            div.className = 'random-text vibrate-1';
            div.style.top = '${randomTop}vh';
            div.style.left = '${randomLeft}vw';
            div.innerHTML = '<div class="loader"></div>';
            document.body.appendChild(div);
            
            setTimeout(function() {
                div.parentNode.removeChild(div);
            }, 3000);
        }, ${timeDelay});`;
    }

    // Execute the generated JavaScript code
    eval(javascriptCode);
}

function isColliding(top, left, positions) {
    for (let pos of positions) {
        if (Math.abs(top - pos.top) < 10 && Math.abs(left - pos.left) < 10) {
            return true;
        }
    }
    return false;
}

// Define the original, success, and completion image sources
const originalImageSrc = 'image/hm_boss.png'; // Original image path
const successImageSrc = 'image/hm_bosshit.png'; // Success image path
const completionImageSrc = 'image/hm_bossdead.png'; // Completion image path

function checkAnswer(event) {
    event.preventDefault();
    const userAnswer = document.getElementById('answer').value.toLowerCase().replace(/\s+/g, '');
    const correctAnswers = questions[currentQuestionIndex].answer.map(answer => answer.toLowerCase().replace(/\s+/g, ''));
    // Check if the answer is correct
    if (correctAnswers.includes(userAnswer)) {
        // Move to the next question
        currentQuestionIndex++;

        // If all questions have been answered, show a completion message
        if (currentQuestionIndex === questions.length) {
            const imageElement = document.querySelector('.main-topleft img');
            if (imageElement) {
                imageElement.src = completionImageSrc;

                // Redirect to another page after 3 seconds
                setTimeout(function() {
                    window.location.href = "loading3.html";
                }, 3000); // 3 seconds
            }
            return;
        }

        // Deplete correctHp
        correctHp--;
        updateCorrectHPDisplay();

        // Display the next question
        displayQuestion();

        // Switch the image to success image
        const imageElement = document.querySelector('.main-topleft img');
        if (imageElement) {
            imageElement.src = successImageSrc;

            // Revert back to the original image after 2 seconds
            setTimeout(() => {
                imageElement.src = originalImageSrc;
            }, 1500);
        }
        // Flash the main-topleft container
        if (currentQuestionIndex < questions.length) {
            const mainTopleftContainer = document.querySelector('.main-topleft');
            mainTopleftContainer.classList.add('flash-red');
            setTimeout(() => {
                mainTopleftContainer.classList.remove('flash-red');
            }, 1500); // Remove the flashing class after 1 second
        }
    } else {
        // Decrease HP
        hp--;
        updateHPDisplay();

        // Check if HP is depleted
        if (hp <= 0) {
            // Redirect to another page when HP is 0
            window.location.href = "lose.html";
            return;
        }

        // Generate random text
        generateRandomText();
    }
}

// Function to update the HP display
function updateHPDisplay() {
    const hpDisplay = document.getElementById('hpDisplay');
    hpDisplay.textContent = 'HP: ' + hp;
}

// Function to update the correct HP display
function updateCorrectHPDisplay() {
    const correctHpDisplay = document.getElementById('correctHpDisplay');
    correctHpDisplay.textContent = 'boss HP: ' + correctHp;
}

// Function to display the current question
function displayQuestion() {
    document.querySelector('.question').textContent = questions[currentQuestionIndex].question;
    document.getElementById('answer').value = ''; // Clear the answer field
}

// Display the first question when the page loads
displayQuestion();
updateHPDisplay();
updateCorrectHPDisplay();
