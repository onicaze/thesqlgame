window.onload = function() {
    addQuestion(); 
    updateTrashIcons(); 
    addClickEventsToQuestions();
};

function showFixedBox(questionItem) {
    const fixedBox = document.getElementById('fixedBox');
    const questionRect = questionItem.getBoundingClientRect();
    
   
    const offsetTop = questionRect.top + window.scrollY; 
    const offsetLeft = questionRect.left + window.scrollX + questionItem.offsetWidth; 
    
    fixedBox.style.top = offsetTop + 'px'; 
    fixedBox.style.left = offsetLeft + 30+'px';

    if (!fixedBox.classList.contains('show')) {
        fixedBox.classList.add('show');
        fixedBox.style.display = 'block'; 
    } else {

        fixedBox.style.top = offsetTop + 'px';
    }

    if (window.innerWidth <= 767) {

        fixedBox.style.display = 'flex';
        fixedBox.style.top = 'auto'; 
        fixedBox.style.left = '0'; 
    }
    
    updateTrashIcons(); 
    closeResetOverlay(); 
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 767) {
        showFixedBox();
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth <= 767) {
        
        const fixedBox = document.getElementById('fixedBox');
        fixedBox.style.display = 'flex'; 
    }
});

function addClickEventsToQuestions() {
    const questions = document.querySelectorAll('.question-item');
    questions.forEach(question => {
        question.querySelector('.question-title').addEventListener('click', function() {
            showFixedBox(question);
        });
    });
}

function updateFixedBoxPosition() {
    const questions = Array.from(document.querySelectorAll('.question-item'));
    if (questions.length > 0) {
        const closestQuestion = questions[questions.length - 1]; 
        showFixedBox(closestQuestion);
    } else {
        document.getElementById('fixedBox').style.display = 'none'; 
    }
}

function addQuestion() {
    const questionTemplate = document.getElementById('questionTemplate').content.cloneNode(true);
    const questionsContainer = document.getElementById('questionsContainer');
    
    questionsContainer.appendChild(questionTemplate);

    const lastQuestion = questionsContainer.lastElementChild; 

let currentScaledItem = null;

document.getElementById('questionsContainer').addEventListener('click', function(event) {
    if (event.target.closest('.question-item')) {
        const clickedQuestion = event.target.closest('.question-item');

        if (currentScaledItem && currentScaledItem !== clickedQuestion) {
            currentScaledItem.classList.remove('scale-animation');
        }

        clickedQuestion.classList.add('scale-animation');

        currentScaledItem = clickedQuestion;

        lastQuestion.querySelector('.question-title').addEventListener('click', function() {
            showFixedBox(lastQuestion);
        });
        
    }

    closeResetOverlay();
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.question-item')) {
        if (currentScaledItem) {
            currentScaledItem.classList.remove('scale-animation');
            currentScaledItem = null; 
        }
    }
});

    lastQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' });

    showFixedBox(lastQuestion);

    addClickEventsToQuestions();

    updateTrashIcons();
}

function updateTrashIcons() {
    const questions = document.querySelectorAll('.question-item');
    questions.forEach((question, index) => {
        question.querySelector('.trash-icon').style.display = questions.length === 1 ? 'none' : 'inline-block';
    });
}

document.getElementById('questionsContainer').addEventListener('click', function(event) {
    if (event.target.closest('.question-item')) {
        const clickedQuestion = event.target.closest('.question-item');
        showFixedBox(clickedQuestion);
    }
});


function addOption(button) {
    const optionsContainer = button.previousElementSibling;
    const optionTemplate = document.createElement('div');
    optionTemplate.className = 'option-item';
    optionTemplate.innerHTML = `
        <div class="input-wrapper">
            <input type="text" class="option-input" placeholder="Option text">
            <i class="fa fa-trash trash-icon" onclick="removeOption(this)"></i>
        </div>
    `;
    optionsContainer.appendChild(optionTemplate);
}


function removeOption(icon) {
    icon.closest('.option-item').remove();
}

function changeQuestionType(select) {
    const questionItem = select.closest('.question-item');
    const addOptionBtn = questionItem.querySelector('.add-option-btn');
    const questionOptions = questionItem.querySelector('.question-options');

    switch (select.value) {
        case 'multipleChoice':
        case 'checkboxes':
            addOptionBtn.style.display = 'inline-block';
            break;
        default:
            addOptionBtn.style.display = 'none';
            questionOptions.innerHTML = '';
            break;
    }
}

function toggleAdditionalQuestions() {
    const askAge = document.getElementById('askAge');
    const askRegion = document.getElementById('askRegion');
    const askName = document.getElementById('askName');
    const questionsContainer = document.getElementById('questionsContainer');

    if (askAge.checked) {
        addAdditionalQuestion('What is your age?');
    } else {
        removeAdditionalQuestion('What is your age?');
    }

    if (askRegion.checked) {
        addAdditionalQuestion('What is your region/location?');
    } else {
        removeAdditionalQuestion('What is your region/location?');
    }

    if (askName.checked) {
        addAdditionalQuestion('What is your name?');
    } else {
        removeAdditionalQuestion('What is your name?');
    }

    function addAdditionalQuestion(questionText) {
        if (!Array.from(questionsContainer.children).some(q => q.querySelector('.question-title').value === questionText)) {
            const questionTemplate = document.getElementById('questionTemplate').content.cloneNode(true);
            questionTemplate.querySelector('.question-title').value = questionText;
            questionTemplate.querySelector('.question-title').disabled = true;
            questionsContainer.insertBefore(questionTemplate, questionsContainer.firstChild);
        }
    }

    function removeAdditionalQuestion(questionText) {
        Array.from(questionsContainer.children).forEach(q => {
            if (q.querySelector('.question-title').value === questionText) {
                q.remove();
            }
        });
    }

    updateTrashIcons(); 
}

function simulateMouseClicks() {
    function clickElement(element) {
        if (element) {
            const event = new MouseEvent('click', { bubbles: true, cancelable: true, view: window });
            element.dispatchEvent(event);
        }
    }

    const elementsToClick = [
        document.querySelector('#element1'), 
        document.querySelector('#element2'), 
        document.querySelector('#element3')  
    ];

    elementsToClick.forEach((element, index) => {
        setTimeout(() => clickElement(element), index * 100); 
    });

document.addEventListener('click', function(event) {
    const fixedBox = document.getElementById('fixedBox');
    
    if (!event.target.closest('.question-item') && !event.target.closest('#fixedBox')) {
        if (fixedBox.classList.contains('show')) {
            fixedBox.classList.remove('show');
            fixedBox.style.display = 'none'; 
        }
    }
});
}

function removeQuestion(icon) {
    const questionItem = icon.closest('.question-item');
    const questionText = questionItem.querySelector('.question-title').value;
    const fixedBox = document.getElementById('fixedBox');

    fixedBox.style.display ='none';

    questionItem.remove();

    const askAge = document.getElementById('askAge');
    const askRegion = document.getElementById('askRegion');
    const askName = document.getElementById('askName');

    if (Array.from(document.querySelectorAll('.question-item .question-title')).some(input => input.value === 'What is your age?')) {
        askAge.checked = true;
    } else {
        askAge.checked = false;
    }

    if (Array.from(document.querySelectorAll('.question-item .question-title')).some(input => input.value === 'What is your region/location?')) {
        askRegion.checked = true;
    } else {
        askRegion.checked = false;
    }

    if (Array.from(document.querySelectorAll('.question-item .question-title')).some(input => input.value === 'What is your name?')) {
        askName.checked = true;
    } else {
        askName.checked = false;
    }

    simulateMouseClicks();
    updateTrashIcons();
}

function showFormPreview() {
    generateForm(); 
    document.getElementById('formPreviewOverlay').style.display = 'flex'; 
}

document.getElementById('closePreview').addEventListener('click', function() {
    closeFormPreview(); 
});

function closeFormPreview() {
    document.getElementById('formPreviewOverlay').style.display = 'none';
}

function generateForm() {
    const formPreview = document.getElementById('generatedForm');
    formPreview.innerHTML = '';

    const questions = document.querySelectorAll('.question-item');
    questions.forEach(question => {
        const questionText = question.querySelector('.question-title').value;
        const questionType = question.querySelector('.question-type').value;
        const questionOptions = question.querySelector('.question-options').children;

        const questionElement = document.createElement('div');
        questionElement.className = 'form-control';
        questionElement.innerHTML = `<label>${questionText}</label>`;

        switch (questionType) {
            case 'text':
                questionElement.innerHTML += `<input type="text" class="form-control">`;
                break;
            case 'multipleChoice':
            case 'checkboxes':
                const optionsContainer = document.createElement('div');
                optionsContainer.className = 'answer-options';

                Array.from(questionOptions).forEach(option => {
                    const optionText = option.querySelector('.option-input').value;

                    const optionLabel = document.createElement('label');
                    optionLabel.innerHTML = `
                        <input type="${questionType === 'multipleChoice' ? 'radio' : 'checkbox'}" name="${questionText}">
                        ${optionText}
                    `;

                    optionsContainer.appendChild(optionLabel);
                });

                questionElement.appendChild(optionsContainer);
                break;
            case 'numbersOnly':
                questionElement.innerHTML += `<input type="number" class="form-control">`;
                break;
            case 'date':
                questionElement.innerHTML += `<input type="date" class="form-control">`;
                break;
        }

        formPreview.appendChild(questionElement);
    });
}

document.getElementById('confirmReset').addEventListener('click', function() {
    document.getElementById('questionsContainer').innerHTML = '';
    document.getElementById('generatedForm').innerHTML = '';
    document.getElementById('askAge').checked = false;
    document.getElementById('askRegion').checked = false;
    addQuestion();
    closeResetOverlay();
});

document.getElementById('cancelReset').addEventListener('click', function() {
    closeResetOverlay();
});

function showResetOverlay() {
    document.getElementById('resetOverlay').style.display = 'flex';
}

function closeResetOverlay() {
    document.getElementById('resetOverlay').style.display = 'none';
}

function resetForm() {
    showResetOverlay(); 
}

function updateSurveyName() {
    const surveyName = document.getElementById('surveyName').value;
    document.getElementById('formNamePreview').textContent = surveyName ? surveyName : 'Preview Form';
}

function goBack() {
    window.history.back(); 
}

document.addEventListener('DOMContentLoaded', updateTrashIcons);
