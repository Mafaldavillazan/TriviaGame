$(document).ready(function () {

    //THE BASICs
    //Create variables for wins and looses

    var wins = 0;
    var looses = 0;
    var unanswered = 0;

    // Crete an object with questions and answers
    var objQuestionsAnswers = {
        questionOne: {
            Question: "QUESTION 1: What makes an element unique from other elements?",
            answerA: "A: Protons",
            answerB: "B: Electrons",
            answerC: "C: Neutrons",
            answerD: "D: None of a above",
            correctAnswer: "a",
            correctAnswerText: "OOOH YES! Protons are what make an element unique from others",
            wrongAnswerText: "Uuu no Try Again!"
        },
        questionTwo: {
            Question: "QUESTION 2: What is an Isotope",
            answerA: "A: Atoms with different mass",
            answerB: "B Atoms of same element different mass",
            answerC: "C: Protons with the same mass",
            answerD: "D: Electrons with different mass",
            correctAnswer: "b",
            correctAnswerText: "YOU GOT IT! Isotopes are atoms with the same protons but they have different mass",
            wrongAnswerText: "You are close but NO!"
        },
        questionThree: {
            Question: "QUESTION 3:  The periodic table gives us information about...",
            answerA: "A: Only the number of protons an Atom has",
            answerB: "B The number of protons, electrons and neutrons an Atom has",
            answerC: "C: Only the number of electrons and neutrons an Atom has",
            answerD: "D: The number of Atoms a proton has",
            correctAnswer: "b",
            correctAnswerText: "AMAZING! The periodic table gives us information about protons, electrons and neutrons from an Atom",
            wrongAnswerText: "Really? Read better please..."
        }

    }


    console.log("Information needed" + objQuestionsAnswers.questionOne.Question)
    var randomQuestion = Object.keys(objQuestionsAnswers)[Math.floor(Math.random() * Object.keys(objQuestionsAnswers).length)]
    console.log("Random question :" + randomQuestion)
    console.log("Random question and question:" + randomQuestion.Question)
    //console.log("Random question and question:" + objQuestionsAnswers.randomQuestion.Question)


    //Create a function the clears the content of everything
    function clearQuestionAnsAnswers() {
        $("#question").empty();
        $("#spaceButtonA").empty();
        $("#spaceButtonB").empty();
        $("#spaceButtonC").empty();
        $("#spaceButtonD").empty();
    }

    /** 
     * TO DO
    //Select a random question from the object
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
        if (time < 0) {
            clockRuns = false;
            reset()
            //Show wins and looses
            //Clear all the content
            clearQuestionAnsAnswers()
            //Reload with new information
            $("#spaceButtonA").append("Your wins: " + wins);
            $("#spaceButtonB").append("Your looses: " + looses);
            $("#spaceButtonC").append("Your Unanswered: " + unanswered);

            $("#question").text("YOUR RESULTS:");
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

            //CHECKING THE ANSWERS

            //Create a function that shows answer info for a particular amount of time
            function answerRightShown() {
                //Create a new space for the answer information to appear
                var $answerText = $('<h5 id="answerText" class="card-title">Special title treatment</h5>')
                $("#answerTextSpace").append($answerText);
                $("#answerText").html(objQuestionsAnswers.questionOne.correctAnswerText);
                //Remove the content from each button
                clearQuestionAnsAnswers();
            }


            //Create a function that shows that is a wrong answer info for a particular amount of time
            function answerWrongShown() {
                var $answerText = $('<h5 id="answerText" class="card-title">Special title treatment</h5>')
                $("#answerTextSpace").append($answerText);
                $("#answerText").html(objQuestionsAnswers.questionOne.wrongAnswerText);
                //Remove the content from each button
                clearQuestionAnsAnswers();
            }


            //Create a function that checks if the answer is right or wrong
            function answerChecker() {

                if (userSelection === objQuestionsAnswers.questionOne.correctAnswer) {
                    wins++
                    //Change the text in the top with you are right
                    $("#question").text("YOU ARE RIGHT!");
                    //Change the text that shows more information about the answer selection
                    answerRightShown();
                    //You have a new set of questions
                    //Select a Random question and change the questions
                    //setTimeout(triviaGameReload, 1000)
                }

                else if (userSelection !== objQuestionsAnswers.questionOne.correctAnswer) {
                    looses++

                    //Change the text in the top with you are right
                    $("#question").text("YOU ARE WRONG!");
                    //Call the function that shows that the text you selected is wrong
                    answerWrongShown()
                    //Show the questions again when the time is over
                    setTimeout(showAnswersButtons, 1000)
                    //You remove the text that is showing

                }
                else {
                    unanswered++
                }
            }

            //Pick a random question
            /** 
             * ISSUE
            // Jquery that calls each text id to change it with questions 
            // Issus calling the random question 
            // console.log("Information needed" + objQuestionsAnswers.questionOne.Question)
            var randomQuestion =  Object.keys(objQuestionsAnswers)[Math.floor(Math.random()*Object.keys(objQuestionsAnswers).length)]
            console.log("Random question :" + randomQuestion)
            $("#question").text(objQuestionsAnswers.randomQuestion.Question)
            console.log("Random question and question:" + randomQuestion.Question)
            */

            function showAnswersButtons() {

                //INFO FROM PAST QUESTION SHOW BE DELETED
                $("#answerText").remove();

                //QUESTION
                //Adding the question selected to the document
                $("#question").text(objQuestionsAnswers.questionOne.Question);


                //ANSWERS
                //divide each answer so the content is related to the question selected


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
                $("#spaceButtonD").append($newButtonD);

                //Add the content of that particular question
                $("#answerD").text(objQuestionsAnswers.questionOne.answerD);

                //If the user clicks that button, give a value to that action that then you can use to compare with the "right answer"
                $("#answerD").click(function (event) {
                    userSelection = "d"
                    answerChecker();
                })




            }

            //show the buttons when the person clicks start
            showAnswersButtons()


        }

        // Clear the page and add the image
        // Reload the function again with the time



    })
})
