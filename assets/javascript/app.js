//THE BASICS
// Create global variables for the wining losing and unanswered 
var wins = 0
var looses = 0
var unanswered = 0

// A function create an array with the questions
var arrQuestions=[
    "QUESTION 0: B is right",
    "QUESTION 1: C is right",
    "QUESTION 2:  D is right ",
    "QUESTION 3: A is right"
]
// Relate arrQuestions[I]  create and object that has 1[], 2[], 3[] arrAnswers I[] (this way we can call that particular number name in the array the answers)
//Those answers have to be true or false
var answers = {
    ceroAnswer:[{
        A:"Answer A",
        B:"Answer B",
        C:"Answer C",
        D:"Answer D"
    }],
    oneAnswer:[{
        A:"Answer A",
        B:"Answer B",
        C:"Answer C",
        D:"Answer D"
    }],
    twoAnswer:[{
        A:"Answer A",
        B:"Answer B",
        C:"Answer C",
        D:"Answer D"
    }],
    threeAnswer:[{
        A:"Answer A",
        B:"Answer B",
        C:"Answer C",
        D:"Answer D"
    }],
}
 
//Function that picks a random question
var randomNumber = Math.floor(Math.random() * arrQuestions.length)
var randomQuestion = arrQuestions[randomNumber]


//THE DISPLAY
// Jquery that calls each text id to change it with questions and answers
//Have buttons for 4 answers
//Create the timer that refreshes the function

//THE GAME

// Timer starts when on click
// Shows a random ArrQuestions[i] and pulls that index of with the values of arrAnswer.i[value]
// Adds the text pulled from ArrQuestions[i] & arrAnswer.i[index[g]] (for loop that prints all the possible answers) and prints into the HTML

//Knowing if right and wrong
//If onclick.val === true or (this)then you are right
// wins ++
// else if (!this)
// First we can just add an alert
// Clear the page and add the image
// Reload the function again with the time 
// If not find just put a button of next 

//looses++
// else
// unanswered++

//THE TIMER
//Create a countdown that goes backwards 
//Print that value in HTML
//If the timer is over then stop the function (Maybe wrap everything in a if statement)
//Clear all the values of the text and push the val of guesses, losses and unanswered 





