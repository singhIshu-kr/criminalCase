let gameRules=["We have found the location","of the suspected killers",
"But both of them ran away.","According to the tracking team",
"The suspects are hiding inside the house","In order to catch the suspects",
"You will have to cross the mine field","Within 15 moves"]

let index=0;

let countOfLines=gameRules.length-1;

const displayInstructions=function() {
  if (index==countOfLines) {
    clearInterval(display);
    document.getElementById("nextPage").innerHTML="Click Here To Continue"
  }
  let instructions=document.getElementById('howToPlay');
  let rules=instructions.innerHTML;
  instructions.innerHTML=`${rules}<br>${gameRules[index]}`;
  index++;
}

let display=setInterval(displayInstructions,1000)
