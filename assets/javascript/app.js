$(document).ready(function () {

    //THE BASICS
    // Create global variables for the wining ,losing and unanswered 
    var wins = 0
    var looses = 0
    var unanswered = 0

    // Crete an object with questions and answers
    var objQuestionsAnswers = {
        questionOne: {
            Question: "QUESTION 1",
            answerA: "A from 1",
            answerB: "B from 1",
            answerC: "C from 1",
            answerD: "D from 1"
        },
        questionTwo: {
            Question: "QUESTION 2",
            answerA: "A from 2",
            answerB: "B from 2",
            answerC: "C from 2",
            answerD: "D from 2"
        }
    }


    //Pick a random question
    /** 
     * ISSUE
    // Jquery that calls each text id to change it with questions 
    // Issus calling the random question 
    // $("#question").text(objQuestionsAnswers.questionOne.Question)
    var randomQuestion =  Object.keys(objQuestionsAnswers)[Math.floor(Math.random()*Object.keys(objQuestionsAnswers).length)]
    console.log(randomQuestion.Question)
    */

    //THE DISPLAY

    //When you click start the game starts playing and the functions start running
    $("#startButton").click(function (event) {
        
        //Add the question to the text
        $("#question").text(objQuestionsAnswers.questionOne.Question);
        //Have buttons for 4 answers (we can display this with a foorloop)
        $("#answerA").text(objQuestionsAnswers.questionOne.answerA);
        $("#answerB").text(objQuestionsAnswers.questionOne.answerB);
        $("#answerC").text(objQuestionsAnswers.questionOne.answerC);
        $("#answerD").text(objQuestionsAnswers.questionOne.answerD);


    })







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









})
