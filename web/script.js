function contactReturn(){//this function validates the contact form inputs
  var name = document.forms ["Contact"]["Name"];
  var email = document.forms ["Contact"]["Email"];
  var phone = document.forms ["Contact"]["Phone"]
  var message = document.forms ["Contact"]["Message"];

  if (name.value == ""){
    window.alert("Please enter your name");
    return false;//this breaks the loop
  }
  if (email.value == ""){
    window.alert("Please enter your email");
    return false;
  }
  if (phone.value == ""){
    window.alert("Please enter your phone number")
    return false;
  }
  if (message.value == ""){
    window.alert("Please enter your message");
    return false;
  }
  else window.alert("Thank you for your message. We will reply shortly.")

}

let hubs=["Mind Over Matter,<br> Grafton Street,<br> Dublin 2", "Mind Over Matter,<br> Patrick Street,<br> Cork", "Mind Over Matter,<br> High Street,<br>Belfast", " Mind Over Matter,<br> Eyre Square,<br> Galway"]
function leinster(){
  document.getElementById("hubAppend").innerHTML = (hubs[0]);
}
function munster(){
  document.getElementById("hubAppend").innerHTML = (hubs[1]);
}
function ulster(){
  document.getElementById("hubAppend").innerHTML = (hubs[2]);
}
function connaught(){
  document.getElementById("hubAppend").innerHTML = (hubs[3]);
}
