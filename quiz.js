

function checkAnswer() {
    const correctAnswer = 4;
    let userAnswer = parseInt(document.querySelector('input[name="quiz"]:checked').value, 10);
    let feedBack = document.querySelector('#feedback');

    if(userAnswer === correctAnswer) {
        feedBack.textContent = "Correct! Well done.";
    }
    else {
        feedBack.textContent = "That's incorrect. Try again!";
    };
    };
    const submitBtn = document.getElementById("submit-answer");
submitBtn.addEventListener('click', checkAnswer);
