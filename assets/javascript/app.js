
var questions = [{
    question: 'What was the first Pixar movie?',
    choices: ['Toy Story', 'Monsters Inc.', 'The Incredibles', 'Finding Nemo'],
    correctAnswer: 0
}, {
    question: 'Which of the following is NOT a Spice Girl?',
    choices: ['Sporty Spice', 'Baby Spice', 'Scary Spice', 'Pumpkin Spice'],
    correctAnswer: 3
}, {
    question: 'Which of these was the first animated Disney movie?',
    choices: ['Pinocchio', 'Cinderella', 'Snow White', 'Bambi'],
    correctAnswer: 2
}, {
    question: 'Which of these films is NOT part of a trilogy?',
    choices: ["Ocean's Eleven", 'Cars', 'The Dark Knight', 'Harry Potter'],
    correctAnswer: 3
}, {
    question: 'What year did the first Star Wars fil come out?',
    choices: ['1987', '1980', '1977', '1983'],
    correctAnswer: 2
}, {
    question: 'Which of the following locations does NOT have a Disney-themed park?',
    choices: ['Paris', 'Tokyo', 'Hong Kong', 'London'],
    correctAnswer: 3
}, {
    question: 'Which former NBA player won an Oscar in 2018?', 
    choices: ['Michael Jordan', 'Magic Johnson', 'Kobe Bryant', "Shaquille O'Neal"],
    correctAnswer: 2
}, {
    question: 'Which Disney film did NOT win an Oscar for Best Original Song?',
    choices: ['The Lion King', 'Coco', 'Frozen', 'Moana'],
    correctAnswer: 3
}, {
    question: 'Which TV show was the first show to feature a married couple sleeping in the same bed?',
    choices: ['Leave It to Beaver', 'The Flintstones', 'I Love Lucy', 'The Andy Griffith Show'],
    correctAnswer: 1
}, {
    question: 'Which of these performers have NOT performed at Superbowl Halftime?',
    choices: ['Kanye West', 'Lady Gaga', 'Prince', 'Michael Jackson'],
    correctAnswer: 0
}
]
var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

// After pressing the "Start" button
$(document).ready(function() {
    // Display first question
    displayCurrentQuestion();
    $(this).find('.quizMessage').hide();
    // Display next question when clicking "Next Question" button
    console.log('display')
    $(this).find('#nextQuestionbutton').on('click', function(){
        if(!quizOver) {
            value = $("input[type='radio']:checked").val();

            if(value === undefined) {
                $(document).find('.quizMessage').text("Please choose an answer");
                $(document).find('.quizMessage').show();
            }else{
                $(document).find('.quizMessage').hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++;

                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();

    // If user wants to play again
                $(document).find('#nextQuestionButton').text('Reset');

                quizOver = true;
                }
            }
        } else { // after Reset button is clicked 
            quizOver = false;
            $(document).find('#nextQuestionButton').text('Next Question');
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

// Shows current question and answer choices
function displayCurrentQuestion() {
    console.log('display current Question');
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find('#game > .question');
    var choices = $(document).find('#game > .choices');
    var numChoices = questions[currentQuestion].choices.length;

   $ (questionClass).text(question);

   var choice;
   for (i = 0; i < numChoices; i++) {
       choice = questions[currentQuestion].choices[i];
   }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    $(document).find('#game > .result').text('You scored: ' + correctAnswers +
' out of' + questions.length);
    $(document).find('#game > .result').show();
}

function hideScore() {
    $(document).find('.result').hide();
}
var timer;
var game = {
     correct: 0,
     incorrect: 0,
     counter: 15,
     countdown: function() {
         game.counter--;
// Update HTML to show new counter
        },
    start: function() {
        timer = setInterval(game.countdown, 1000)
        $('#game').text('Time Remaining: ' + game.counter + ' seconds'),
    reset= function() {
        timer = setInterval(game.countdown, 1000)
        $('#game').text('Time Remaining: ' + game.counter + ' seconds')
    }    
  }
};
$(document).on('click', '#startbutton', function() {
    game.start();
});
$(document).on('click', '#resetbutton', function(){
    
})   


// for (var i = 0; i < questions.length; i++);

// if (question === correctAnswer)

// Timer function
function timer() {
//  after 5 seconds, execute the fiveSeconds function
//  after 10 seconds, execute the tenSeconds function
//  after 15 seconds, execute the timeUp function

setTimeout(fiveSeconds, 1000 * 5);
setTimeout(tenSeconds, 1000 * 10);
setTimeout(timeUp, 1000 * 15);

$('#game').text('Time Remaining: ' + timer + ' seconds')

}