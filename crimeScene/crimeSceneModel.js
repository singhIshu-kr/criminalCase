const getID=function(targetID) {
  let idAndItems={
    "5":"LollyPop",
    "6":"Crucifix",
    "7":"clock",
    "8":"Feather",
    "9":"Teddy Bear"
  }
  return idAndItems[targetID];
}

const CriminalGame=function() {
  this.objects=["HandBag","Socks","Paper Boat","Cup","Dice"];
  this.objectsWithId={"0":"LollyPop","1":"Crucifix","2":"clock","3":"Feather","4":"Teddy Bear","5":"HandBag","6":"Socks","7":"Paper Boat","8":"Cup","9":"Dice"};
  this.objectsID=["0","1","2","3","4","5","6","7","8","9"];
}

CriminalGame.prototype={
  isRightChoice:function(cellId) {
    return this.objectsID.includes(cellId);
  },
  isNullChoice:function(cellId) {
    return this.objects[cellId] == null;
  }
}
