var p_count=0;
var c_count=0;
var rock_c ="fas fa-hand-rock";
var paper_c ="fas fa-hand-paper";
var scissor_c = "fas fa-hand-scissors";

// funtion if the player had selected the scissors button
function rock(){
    // Radom set of numbers for computers choice
    console.log("ROCK HAS BEEN SELECTED");
    choice = Math.floor((Math.random() * 3) + 1);
    if(choice === 1){
        document.getElementById("eva").innerHTML = "DRAW";
        document.getElementById("player").className = rock_c;
        document.getElementById("computer").className = rock_c;
    }
    else if(choice === 2){
        document.getElementById("eva").innerHTML = "Computer Wins"
        document.getElementById("player").className = rock_c;
        document.getElementById("computer").className = paper_c;
        c_count = c_count +1;
    }
    else if(choice === 3){
        document.getElementById("eva").innerHTML = "You won"
        document.getElementById("player").className = rock_c;
        document.getElementById("computer").className = scissor_c;
       p_count = p_count +1;
    }
    else{
        document.getElementById("eva").innerHTML = "ERROR"
    }

    document.getElementById("p_score").innerHTML = p_count;
    document.getElementById("c_score").innerHTML = c_count;
}

// funtion if the player had selected the scissors button
function paper(){
    console.log("PAPER HAS BEEN SELECTED");
    // Radom set of numbers for computers choice
    choice = Math.floor((Math.random() * 3) + 1);
    if(choice === 1){
        document.getElementById("eva").innerHTML = "You won"
        document.getElementById("player").className = paper_c;
        document.getElementById("computer").className = rock_c;
        p_count = c_count+1;
    }
    else if(choice === 2){
        document.getElementById("eva").innerHTML = "Draw"
        document.getElementById("player").className = paper_c;
        document.getElementById("computer").className = paper_c;
    }
    else if(choice === 3){
        document.getElementById("eva").innerHTML = "Computer wins"
        document.getElementById("player").className = paper_c;
       document.getElementById("computer").className = scissor_c;
       c_count = c_count +1;
    }
    else{
        document.getElementById("eva").innerHTML = "ERROR"
    }

    document.getElementById("p_score").innerHTML = p_count;
    document.getElementById("c_score").innerHTML = c_count;
}

// funtion if the player had selected the scissors button
function scissor(){
    console.log("SCISSOR HAS BEEN SELECTED");
    // Radom set of numbers for computers choice
    choice = Math.floor((Math.random() * 3) + 1);
    if(choice === 1){
        document.getElementById("eva").innerHTML = "Computer wins"
        document.getElementById("player").className = paper_c;
        document.getElementById("computer").className = rock_c;
        c_count = c_count +1;
    }
    else if(choice === 2){
        document.getElementById("eva").innerHTML = "You Won"
        document.getElementById("player").className = scissor_c;
        document.getElementById("computer").className = paper_c;
        p_count = p_count +1;
    }
    else if(choice === 3){
        document.getElementById("eva").innerHTML = "Draw"
        document.getElementById("player").className = scissor_c;
       document.getElementById("computer").className = scissor_c;
    }
    else{
        document.getElementById("eva").innerHTML = "ERROR"
    }

    document.getElementById("p_score").innerHTML = p_count;
    document.getElementById("c_score").innerHTML = c_count;
    
}

// Funtion to reset the values of the program
function reset(){
    console.log("GAME HAS BEEN RESTARTED");
    p_count=0;
    c_count=0;
    document.getElementById("p_score").innerHTML = p_count;
    document.getElementById("c_score").innerHTML = c_count;
    document.getElementById("player").className = "";
    document.getElementById("computer").className = "";
}className
