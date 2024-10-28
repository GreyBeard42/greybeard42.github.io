console.log("Type the following to hack the game:");
console.log("score = 1000000000000000");

var score = 0;
var cps = 0;

var butterCost = 15;
var butter = 0;
var farmerCost = 100;
var farmer = 0;
var landCost = 1100;
var land = 0;
var popcornCost = 12000;
var popcorn = 0;
var greenCost = 130000;
var green = 0;
var gassCost = 1400000;
var gass = 0;
var syrupCost = 2000000;
var syrup = 0;

function buyButter() {
  if (score >= butterCost) {
    score = score - butterCost;
    butter = butter + 1;
    butterCost = Math.round(butterCost * 1.15);
    cps = cps + 1;
    
    document.getElementById("score").innerHTML = score;
    document.getElementById("butterCost").innerHTML = butterCost;
    document.getElementById("butter").innerHTML = butter;
    document.getElementById("cps").innerHTML = cps;
  }
}

function buyFarmer() {
  if (score >= farmerCost) {
    score = score - farmerCost;
    farmer = farmer + 1;
    farmerCost = Math.round(farmerCost * 1.15);
    cps = cps + 5;
    
    document.getElementById("score").innerHTML = score;
    document.getElementById("farmerCost").innerHTML = farmerCost;
    document.getElementById("farmer").innerHTML = farmer;
    document.getElementById("cps").innerHTML = cps;
  }
}

      function buyLand() {
  if (score >= landCost) {
    score = score - landCost;
    land = land + 1;
    landCost = Math.round(landCost * 1.15);
    cps = cps + 8;
    
    document.getElementById("score").innerHTML = score;
    document.getElementById("landCost").innerHTML = landCost;
    document.getElementById("land").innerHTML = land;
    document.getElementById("cps").innerHTML = cps;
  }
}

function buyPopcorn() {
  if (score >= popcornCost) {
    score = score - popcornCost;
    popcorn = popcorn + 1;
    popcornCost = Math.round(popcornCost * 1.15);
    cps = cps + 47;
    
    document.getElementById("score").innerHTML = score;
    document.getElementById("popcornCost").innerHTML = popcornCost;
    document.getElementById("popcorn").innerHTML = popcorn;
    document.getElementById("cps").innerHTML = cps;
  }
}

function buyGreen() {
  if (score >= greenCost) {
    score = score - greenCost;
    green = green + 1;
    greenCost = Math.round(greenCost * 1.15);
    cps = cps + 260;
    
    document.getElementById("score").innerHTML = score;
    document.getElementById("greenCost").innerHTML = greenCost;
    document.getElementById("green").innerHTML = green;
    document.getElementById("cps").innerHTML = cps;
  }
}

function buyGass() {
  if (score >= gassCost) {
    score = score - gassCost;
    gass = gass + 1;
    gassCost = Math.round(gassCost * 1.15);
    cps = cps + 1400;
    
    document.getElementById("score").innerHTML = score;
    document.getElementById("gassCost").innerHTML = gassCost;
    document.getElementById("gass").innerHTML = gass;
    document.getElementById("cps").innerHTML = cps;
  }
}

function buySyrup() {
  if (score >= syrupCost) {
    score = score - syrupCost;
    syrup = syrup + 1;
    syrupCost = Math.round(syrupCost * 1.15);
    cps = cps + 7000;
    
    document.getElementById("score").innerHTML = score;
    document.getElementById("syrupCost").innerHTML = syrupCost;
    document.getElementById("syrup").innerHTML = syrup;
    document.getElementById("cps").innerHTML = cps;
  }
}

function addToScore(amount) {
  score = score + amount;
  document.getElementById("score").innerHTML = score;
}

function loadGame() {
  var savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (typeof savedGame.score !== "undefined") score = savedGame.score;
  if (typeof savedGame.cps !== "undefined") cps = savedGame.cps;
  if (typeof savedGame.butter !== "undefined") butter = savedGame.butter;
  if (typeof savedGame.farmer !== "undefined") farmer = savedGame.farmer;
  if (typeof savedGame.butterCost !== "undefined") butterCost = savedGame.butterCost;
  if (typeof savedGame.farmerCost !== "undefined") farmerCost = savedGame.farmerCost;
  if (typeof savedGame.land !== "undefined") land = savedGame.land;
  if (typeof savedGame.popcorn !== "undefined") popcorn = savedGame.popcorn;
  if (typeof savedGame.landCost !== "undefined") landCost = savedGame.landCost;
  if (typeof savedGame.popcornCost !== "undefined") popcornCost = savedGame.popcornCost;
  if (typeof savedGame.greenCost !== "undefined") greenCost = savedGame.greenCost;
  if (typeof savedGame.green !== "undefined") green = savedGame.green;
  if (typeof savedGame.gassCost !== "undefined") gassCost = savedGame.gassCost;
  if (typeof savedGame.gass !== "undefined") gass = savedGame.gass;
  if (typeof savedGame.syrupCost !== "undefined") syrupCost = savedGame.syrupCost;
  if (typeof savedGame.syrup !== "undefined") syrup = savedGame.syrup;
}

function saveGame() {
  var gameSave = {
    score: score,
    cps: cps,
    butter: butter,
    farmer: farmer,
    land: land,
    popcorn: popcorn,
    green: green,
    gass: gass,
    syrup: syrup,
    butterCost: butterCost,
    farmerCost: farmerCost,
    landCost: landCost,
    popcornCost: popcornCost,
    greenCost: greenCost,
    gassCost: gassCost,
    syrupCost: syrupCost
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function exportGame() {
  var gameSave = {
    score: score,
    cps: cps,
    butter: butter,
    farmer: farmer,
    land: land,
    popcorn: popcorn,
    green: green,
    gass: gass,
    syrup: syrup,
    butterCost: butterCost,
    farmerCost: farmerCost,
    landCost: landCost,
    popcornCost: popcornCost,
    greenCost: greenCost,
    gassCost: gassCost,
    syrupCost: syrupCost
  };
  console.log(JSON.stringify(gameSave));
}


window.onload = function() {
  loadGame();
  document.getElementById("score").innerHTML = score;
  document.getElementById("cps").innerHTML = cps;
  document.getElementById("butterCost").innerHTML = butterCost;
  document.getElementById("butter").innerHTML = butter;
  document.getElementById("farmerCost").innerHTML = farmerCost;
  document.getElementById("farmer").innerHTML = farmer;
  document.getElementById("landCost").innerHTML = landCost;
  document.getElementById("land").innerHTML = land;
  document.getElementById("popcornCost").innerHTML = popcornCost;
  document.getElementById("popcorn").innerHTML = popcorn;
  document.getElementById("greenCost").innerHTML = greenCost;
  document.getElementById("green").innerHTML = green;
  document.getElementById("gassCost").innerHTML = gassCost;
  document.getElementById("gass").innerHTML = gass;
  document.getElementById("syrupCost").innerHTML = syrupCost;
  document.getElementById("syrup").innerHTML = syrup;
};

setInterval(function() {
    score = score + cps;
    document.title = score + " corn - Corn Country";
    document.getElementById("score").innerHTML = score;
}, 1000); // 1 sec

setInterval(function() {
  saveGame();
}, 15000); // 15 sec

function resetGame() {
if (confirm("Are you sure you want to reset? I wouldn't do it."))  {
  var gameSave = {};
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
  location.reload();
}
}

document.addEventListener("keydown", function(event) {
if (event.which ==  83) {
  saveGame();
  alert("saved");
  }
}, false);

function saveGameButt() {
 alert('saved');
   var gameSave = {
    score: score,
    cps: cps,
    butter: butter,
    farmer: farmer,
    land: land,
    popcorn: popcorn,
    green: green,
    gass: gass,
    syrup: syrup,
    butterCost: butterCost,
    farmerCost: farmerCost,
    landCost: landCost,
    popcornCost: popcornCost,
    greenCost: greenCost,
    gassCost: gassCost,
    syrupCost: syrupCost
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}
