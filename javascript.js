// Fake authentication variables
let isAuthenticated = false;

// Quiz questions and answers
const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Paris",
            b: "London",
            c: "Berlin",
            d: "Rome"
        },
        correctAnswer: "a"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: {
            a: "William Shakespeare",
            b: "Charles Dickens",
            c: "Mark Twain",
            d: "F. Scott Fitzgerald"
        },
        correctAnswer: "a"
    }
    // Add more questions as needed
];

const quizForm = document.getElementById("quiz-form");
const resultsContainer = document.getElementById("results");

// Event listener for form submission
quizForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    if (!isAuthenticated) {
        alert("You need to log in to start the quiz.");
        return;
    }

    let score = 0;

    // Loop through each question
    quizQuestions.forEach((question, index) => {
        const selectedAnswer = quizForm.elements[`q${index + 1}`].value;

        // Check if selected answer is correct
        if (selectedAnswer === question.correctAnswer) {
            score++;
        }
    });

    // Display results
    resultsContainer.textContent = `You scored ${score} out of ${quizQuestions.length}.`;
});

// Function to simulate login (fake authentication)
function simulateLogin() {
    isAuthenticated = true;
    alert("You are now logged in and can start the quiz.");
}

// Call simulateLogin() to simulate user login
simulateLogin();
