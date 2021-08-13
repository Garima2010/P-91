function adduser(){
    player_1name = document.getElementById(" player_1_input").value;
    player_2name = document.getElementById(" player_2_input").value;


    localStorage.setItem("player_1name", player_1name);
    localStorage.setItem("player_2name", player_2name);  

    window.location.replace("game_page.html")
}

Player_1_name = localStorage.getItem("player_1name");
Player_2_name = localStorage.getItem("player_2name");

Player_1_score = 0;
Player_2_score = 0;

document.getElementById("player_1name").innerHTML = Player_1_name + ":" ;
document.getElementById("player_2name").innerHTML = Player_2_name + ":" ;

document.getElementById("player1_score").innerHTML = Player_1_score  ;
document.getElementById("player2_score").innerHTML = Player_2_score  ;

document.getElementById("player_question").innerHTML = "Question turn -" +Player_1_name;
document.getElementById("player_answer").innerHTML = "Answer turn -" +Player_2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowercase =" + word);

    Letter1 = word.charAt(1);
    console.log(Letter1);

    length_divide= Math.floor(word.length/2);
    letter2 = word.charAt(length_divide);
    console.log(letter2);

    length_minus = word.length - 1;
    letter3 = word.charAt(length_minus);
    console.log(letter3);

    replace_letter_1 = word.replace(Letter1, "_");
    replace_letter_2 = replace_letter_1.replace(Letter2, "_");
    replace_letter_3 = replace_letter_2.replace(Letter3, "_");

    console.log(replace_letter_3);

    question_word = "<h4 id = word_display>Q. " + replace_letter_3  + "</h4>";
    input_box = "<br>Answer :<input type= 'text' id = 'input' >";
    check_button = "<br><br> <button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    row = question_word+ input_box+check_button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("word").value = "";
}