let numbers = [];
function enterNumbers(){
  for(i=0; i<5; i++){
      numbers[i]=(prompt('Please enter a number'));
      document.getElementById('listNumbers').innerHTML=numbers.toString();
      document.getElementById('outputSum').innerHTML= " ";
      document.getElementById('outputMean').innerHTML= " ";
      document.getElementById('outputInsult').innerHTML= " ";
  }
}

function insult(){
  var randomInsult = Math.floor(Math.random() * 4);
  if (randomInsult == 0){
    document.getElementById('outputInsult').innerHTML= "You suck!";
  } else if (randomInsult == 1) {
    document.getElementById('outputInsult').innerHTML= "Jerk!";
  } else if (randomInsult == 2) {
    document.getElementById('outputInsult').innerHTML= "Loser!";
  } else if (randomInsult == 3) {
    document.getElementById('outputInsult').innerHTML= "Idiot";
  } else {
   document.getElementById('outputInsult').innerHTML= "Numpty!";
  }
}


function maths (){
  var total = 0;
  for(i=0; i<numbers.length;i++){
    total += parseInt(numbers[i]);
    var average = total/5
  }
  document.getElementById('outputSum').innerHTML=total.toString();
  document.getElementById('outputMean').innerHTML=average.toString();
  insult();
}
