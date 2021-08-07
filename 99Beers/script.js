var numBottles = 99;

while (numBottles > 0) {
  var word = "bottles";
  if (numBottles == 1) {
    word = "bottle";
  }
  document.getElementById("beer").innerHTML += numBottles + " " + word + " of beer on the wall, ";
  document.getElementById("beer").innerHTML += numBottles + " " + word + " of beer.<br>";
  document.getElementById("beer").innerHTML += " You take one down and pass it around, <br>";
  numBottles = numBottles - 1;
  if (numBottles > 0){
    if (numBottles == 1){
      word = "bottle";
    }
  }
  if (numBottles == 0){
    word = "bottles";
    document.getElementById("beer").innerHTML += "no more " + word + " of beer on the wall.";
  }

}//while loop closing bracket
