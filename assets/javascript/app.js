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
            correctAnswer: "a",
            correctAnswerText: "The answer A is the correct One",
            wrongAnswerText: "Uuu no Try Again!"
        },
        questionTwo: {
            Question: "QUESTION 2",
            answerA: "A from 2",
            answerB: "B from 2",
            answerC: "C from 2",
            answerD: "D from 2",
            correctAnswer: "b",
            correctAnswerText: "The answer B is the correct One"
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

    /** 
     * TO DO
    //Make the timer refresh the page once they selected an answer 
        //Maybe create a function that adds an image and text to the document when on click
    //Select a random question from the object
    //When time is over show looses and wins
    //When the answer is right reload the trivia function and find another question (can't be repeated)
        //Maybe we have to then push the answer to an array so is not repeated
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

        //If the time is lower than 0 then time is over
        if(time<0){
            clockRuns = false;
            reset()
        }
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

        //THE TIME STARTS
        //Show the timer
        start()

        //If statement to run the game only if you have time
        if (clockRuns) {
            triviaGame()
        }
        else {
            alert("TIME IS UP")
        }

        function triviaGame() {


            //WINS AND LOOSES
            //Create a variable that stores the selection the user made
            var userSelection


            //Create a function that checks if the answer is right or wrong
            function answerChecker() {

                //Create a timer that showcases the answer info for a particular amount of time
                setTimeout(answerRightShown, 0);
                function answerRightShown() {
                    $("#spaceButtonA").text(objQuestionsAnswers.questionOne.correctAnswerText);
                    //Remove the content from each button
                    $("#spaceButtonB").text("");
                    $("#spaceButtonC").text("");
                    $("#spaceButtonD").text("");
                }

                if (userSelection === objQuestionsAnswers.questionOne.correctAnswer) {
                    wins++

                    //Change the text in the top with you are right
                    $("#question").text("YOU ARE RIGHT!");
                    //Change the text that shows more information about the answer selection
                    answerRightShown();

                    //If the time of answerRight is less than this then reload a new trivia question
                    if (setTimeout) {
                        showAnswersButtons();
                    }
                }
                else {
                    looses++

                    //Change the text in the top with you are right
                    $("#question").text("YOU ARE WRONG!");
                    //Change the text that shows more information about the answer selection
                    $("#spaceButtonA").text(objQuestionsAnswers.questionOne.wrongAnswerText);
                    //Remove the content from each button
                    $("#spaceButtonB").text("");
                    $("#spaceButtonC").text("");
                    $("#spaceButtonD").text("");

                }
            }

            //QUESTION
            //Adding the question selected to the document
            $("#question").text(objQuestionsAnswers.questionOne.Question);


            //ANSWERS
            //divide each answer so the content is related to the question selected

            function showAnswersButtons() {
                //Answer A

                //Create the buttons 
                var $newButtonA = $('<a id="answerA" href="#" class="btn btn-primary space"></a>')
                $("#spaceButtonA").append($newButtonA);

                //Add the content of that particular question
                $("#answerA").text(objQuestionsAnswers.questionOne.answerA);

                //If the user clicks that button, give a value to that action that then you can use to compare with the "right answer"
                $("#answerA").click(function (event) {
                    userSelection = "a"
                    answerChecker();
                    //Need to reset the page add the text with timer
                })

alert
                //Answer B

                //Create the buttons 
                var $newButtonB = $('<a id="answerB" href="#" class="btn btn-primary space"></a>')
                $("#spaceButtonB").append($newButtonB);

                //Add the content of that particular question
                $("#answerB").text(objQuestionsAnswers.questionOne.answerB);

                //If the user clicks that button, give a value to that action that then you can use to compare with the "right answer"
                $("#answerB").click(function (event) {
                    userSelection = "b"
                    answerChecker();
                })


                //Answer C

                //Create the buttons 
                var $newButtonC = $('<a id="answerC" href="#" class="btn btn-primary space"></a>')
                $("#spaceButtonC").append($newButtonC);

                //Add the content of that particular question
                $("#answerC").text(objQuestionsAnswers.questionOne.answerC);

                //If the user clicks that button, give a value to that action that then you can use to compare with the "right answer"
                $("#answerC").click(function (event) {
                    userSelection = "c"
                    answerChecker();
                })

                //Answer D

                //Create the buttons 
                var $newButtonD = $('<a id="answerD" href="#" class="btn btn-primary space"></a>')
                $("#spaceButtonC").append($newButtonD);

                //Add the content of that particular question
                $("#answerD").text(objQuestionsAnswers.questionOne.answerD);

                //If the user clicks that button, give a value to that action that then you can use to compare with the "right answer"
                $("#answerD").click(function (event) {
                    userSelection = "d"
                    answerChecker();
                })


            }

            showAnswersButtons()


        }

        // Clear the page and add the image
        // Reload the function again with the time



    })
})
