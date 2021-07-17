function adduser(){
    var player_1 = document.getElementById("player1").value;
    var player_2 = document.getElementById("player2").value;
    localStorage.setItem("player1", player_1);
    localStorage.setItem("player2", player_2);
    window.location = "index_game.html";
}