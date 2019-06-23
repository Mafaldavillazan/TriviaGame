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
            answerD: "D from 1",
            correctAnswer: "a"
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

    //THE TIME:

    //Create a timer
    var clockRuns = false;
    var time = 60;

    //function that resets the timer
    //Call this function when the time is over
    function reset() {
        time = 0;
        $("#timer").text("00");
    }

    //Function that makes the time go
    function start() {
        if (!clockRuns) {
            intervalId = setInterval(count, 1000);
            clockRuns = true;
        }
    }

    function count() {
        time--;
        var currentTime = timeConverter(time);
        $("#timer").text(currentTime);
    }


    //Use the Time converter from past exercise so the time is not displayed in milliseconds
    function timeConverter(t) {

        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }

        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }

    //STARTING
    //When you click start the game starts playing and the functions start running
    $("#startButton").click(function (event) {

        //THE DISPLAY
        //Show the timer
        start()
        //Add the question to the text
        $("#question").text(objQuestionsAnswers.questionOne.Question);

        // WINS AND LOOSES
        //Create a variable that stores the selection the user made
        var userSelection
        //Create a function that checks if the answer is right or wrong
        function answerChecker(){
            if(userSelection===objQuestionsAnswers.questionOne.correctAnswer){
                alert("YOU WIN")
                wins++
            }
            else{
                alert("YOU LOOSE")
            }
        }

        //Display 4 buttons and give a value to UserSelection when they click

        $("#answerA").text(objQuestionsAnswers.questionOne.answerA);
        $("#answerA").click(function (event) {
            userSelection = "a"
            answerChecker();
        })

        $("#answerB").text(objQuestionsAnswers.questionOne.answerB);
        $("#answerB").click(function (event) {
            userSelection = "b"
            answerChecker();
        })

        $("#answerC").text(objQuestionsAnswers.questionOne.answerC);
        $("#answerC").click(function (event) {
            userSelection = "c"
            answerChecker();
        })

        $("#answerD").text(objQuestionsAnswers.questionOne.answerD);
        $("#answerD").click(function (event) {
            userSelection = "d"
            answerChecker();
        })


        //THE GAME
        //Knowing if right and wrong












        //If onclick.val === true or (this)then you are right
        // wins ++
        // else if (!this)
        // First we can just add an alert
        // Clear the page and add the image
        // Reload the function again with the time 
        // If not find just put a button of next 





    })










    //looses++
    // else
    // unanswered++

    //THE TIMER
    //Create a countdown that goes backwards 
    //Print that value in HTML
    //If the timer is over then stop the function (Maybe wrap everything in a if statement)
    //Clear all the values of the text and push the val of guesses, losses and unanswered 









})
