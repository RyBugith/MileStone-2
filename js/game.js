/**
 * Created by Ryan on 12/14/2016.
 */

var quizQuestion = [
    {
        'quest': "On which continent can you visit Sierra Leone?",
        'ans': "Africa"
    },
    {
        'quest': "Through which capital does the Liffey river flow?",
        'ans': "Dublin"
    },
    {
        'quest': "What is the longest river in Europe?",
        'ans': "Wolga river"
    },
    {
        'quest': "What island, which belonged to Denmark, was independent in 1944?",
        'ans': "Iceland"
    },
    {
        'quest': "What is the second largest country in Europe after Russia?",
        'ans': "France"
    }
];

// there aren't types or set amount of space for variable types.  Therefore 'var' is just a variable instead of types
var count = 0;

for(var i =0; i < quizQuestion.length; i++){
    var answer = window.prompt(quizQuestion[i].quest);  // a window with this question and a text box
    if(answer == quizQuestion[i].ans) count++;
}

if(count == 0){alert("Well Trivia isn't your cup of tea...");}
if(count == 1 || count == 2){alert("At least you know something");}
if(count == 3 || count == 4){alert("You're almost perfect");}
if(count == 5){alert("You are the most interesting person in the world aren't you?");}




// Validating Email
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    $("#result").text("");
    var email = $("#email").val();
    if (validateEmail(email)) {
        $("#result").text(email + " is valid :)");
        $("#result").css("color", "green");
    } else {
        $("#result").text(email + " is not valid :(");
        $("#result").css("color", "red");
    }
    return false;
}

$("form").bind("submit", validate);

