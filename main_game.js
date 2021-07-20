player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");
player1_score = 0;
player2_score = 0;

var actual_answer = 0;
var number1 = 0;
var number2 = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("teal1").innerHTML = "Question turn: "+player1_name;
document.getElementById("teal").innerHTML = "Answer turn: "+player2_name;

function send(){
    number1 = document.getElementById("n1").value;
    number2 = document.getElementById("n2").value;

    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>"+number1+" * "+number2+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button onclick='check()'>Check</button>"
    row  =question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    console.log("check");
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer){
        console.log("Answer is correct");
        if(answer_turn == "player1"){
        update_player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = update_player1_score;
        console.log(update_player1_score+" Player1");
        }
        else{
            update_player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
            console.log(update_player2_score + "Player2");
        }
        console.log("DELETE");
        document.getElementById("output").innerHTML = "";
    }
    else{
        console.log("Answer is incorrect");
        if(answer_turn == "player1"){
            update_player1_score = player1_score - 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
            console.log(update_player1_score+" Player1");
            }
            else{
                update_player2_score = player2_score - 1;
                document.getElementById("player2_score").innerHTML = update_player2_score;
                console.log(update_player2_score + "Player2");
            }
            console.log("DEl");
        document.getElementById("output").innerHTML = "";
    }
    if(question_turn == "player1"){
        question_turn = "player2"
        document.getElementById("teal1").innerHTML = "Question Turn: "+player2_name;
        console.log(player2_name+" question");
    }
    else{
        question_turn = "player1"
        document.getElementById("teal1").innerHTML = "Question Turn: "+player1_name;
        console.log(player1_name+" question");
    }

    if(answer_turn == "player1"){
        question_turn = "player2"
        document.getElementById("teal").innerHTML = "Answer Turn: "+player2_name;
        console.log(player2_name+" answer");
    }
    else{
        answer_turn = "player1"
        document.getElementById("teal").innerHTML = "Answer Turn: "+player1_name;
        console.log(player1_name+" answer");
    }
    actual_answer = 0;
    get_answer = 0;
}