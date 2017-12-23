let position=0;
let horizontalpos=100;

const showNextPageLink=function(){
  let nextPageRequest=document.getElementById("pressEnter");
  clearInterval(interval);
  location="caseStudy/caseStudy.html";
}



const moveCar=function() {
  let car=document.getElementsByTagName("img")[1];
  if(car.style.left=="1000px"){
    showNextPageLink();
  }
  car.style.left=horizontalpos+"px";
  horizontalpos+=3;
}


let interval=setInterval(moveCar,20);
