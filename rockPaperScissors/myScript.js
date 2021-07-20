//I created two functions, one to make sure valid inputs are entered and the other to check the outcome of the game

//This one checks the valid inputs
function myFunction(){
  var input1 = prompt("Player 1 please enter rock, paper or scissors", "Rock, Paper, Scissors?");//This is to prompt the first user for an input
    if (input1 == "rock" || input1 == "paper" || input1 == "scissors"){ //this checks if the input is rock, paper or scissors and if it is, it prompts user 2 for input. If not, it asks for a valid input
      var input2 = prompt("Player 2 please enter rock, paper or scissors", "Rock, Paper, Scissors?"); //This is to prompt the second user for an input
    } else if (input1 == null){
        return;
    } else {
      document.getElementById("demo").innerHTML = "Please enter a valid option"; //This changes the paragraph with the id demo to output a message looking for valid input
    }

    if (input2 == "rock" || input2 == "paper" || input2 == "scissors"){
        gameChecker(input1, input2); //this passes the variables from myFunction to gameChecker function
    } else if (input2 == null){
        return;
    } else {
      document.getElementById("demo").innerHTML = "Please enter a valid option";
    }
}

//This function checks the outcome of the game
function gameChecker(input1, input2){

  if(input1 == input2){ //This compares the variables, if they are equal it outs that its a draw
    document.getElementById("result").innerHTML = "It's a draw!";
  } else if (input1 == "rock") { //otherwise it checks if its rock and compares it to see if the other input is rock or scissors and outputs accordingly. It does this by changing the paragraph result.
      if (input2 == "scissors") {
        document.getElementById("result").innerHTML = "Rock wins";
      } else {
        document.getElementById("result").innerHTML = "Paper wins";
      }
  } else if (input1 == "paper") {
      if (input2 == "rock") {
        document.getElementById("result").innerHTML = "Paper wins";
    } else {
        if (input2 == "scissors") {
            document.getElementById("result").innerHTML = "Scissors wins";
        }
    }
  } else if (input1 == "scissors") {
        if (input2 == "rock") {
            document.getElementById("result").innerHTML = "Rock wins";
        } else {
            if (input2 == "paper") {
                document.getElementById("result").innerHTML = "Scissors wins";
            }
        }
    }
}
