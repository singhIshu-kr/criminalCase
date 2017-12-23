const displayResult=function() {
  let id=event.target.id;
  if (id=="cousin") {
    location="./haswon.html";
    return;
  }
  location="./gameOver.html";
}
