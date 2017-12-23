let gameRules=["Famous Actress Rivanaah was found dead","in her bedroom.Case appears to",
"be a serious murder case.","Head to the Crimespot","And collect all the evidences"]

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
