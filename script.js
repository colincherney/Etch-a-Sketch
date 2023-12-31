let divs = 0;

// grid setup on page load
function gridSetup(divCount) {
  let counter = 0;
  divs = divCount * divCount;
  while (counter < divs) {
    const div = document.createElement("div");
    div.className = "grid";
    div.style.backgroundColor = "white";
    let height = 400 / divCount + "px";
    let width = 400 / divCount + "px";
    div.style.height = height;
    div.style.width = width;
    document.getElementById("container").appendChild(div);
    counter++;
  }
  return divs;
}

gridSetup(50);

function removeGrid() {
  document.querySelectorAll(".grid").forEach((e) => e.remove());
}

function dimensions(value) {
  let buttonReset = document.getElementsByClassName("color");
  for (i = 0; i < 5; i++) {
    buttonReset[i].style.backgroundColor = "darkslateblue";
    buttonReset[i].style.border = "none";
  }
  let text = value + " x " + value;
  document.getElementById("dimensionsText").innerHTML = text;
  document.getElementById("dimensionsInput").value = value;
  removeGrid();
  gridSetup(value);
}

function dimensionsInput() {
  let value = document.getElementById("dimensionsInput").value;
  if (value > 100) {
    dimensions(50);
    alert("ERROR! 100 is the max limit!");
    document.getElementById("slider").value = 50;
    document.getElementById("dimensionsInput").value = 50;
  }
  if (value < 0) {
    dimensions(50);
    document.getElementById("dimensionsInput").value = 50;
    document.getElementById("slider").value = 50;
  }
  if (value > 0 && value < 101) {
    dimensions(value);
    document.getElementById("slider").value = value;
  }
}

const grid = document.getElementsByClassName("grid");

function customColor(color) {
  let buttonReset = document.getElementsByClassName("color");
  for (i = 0; i < 5; i++) {
    buttonReset[i].style.backgroundColor = "darkslateblue";
    buttonReset[i].style.border = "none";
  }
  document.getElementById("go").style.backgroundColor = "red";
  document.getElementById("go").style.border = "3px black solid";
  color = document.getElementById("colorCode").value;
  for (i = 0; i < divs; i++) {
    grid[i].onmouseover = function () {
      this.style.backgroundColor = color;
    };
  }
}

function color(color) {
  let buttonReset = document.getElementsByClassName("color");
  for (i = 0; i < 5; i++) {
    buttonReset[i].style.backgroundColor = "darkslateblue";
    buttonReset[i].style.border = "none";
  }
  document.getElementById(color).style.backgroundColor = "red";
  document.getElementById(color).style.border = "3px black solid";
  for (i = 0; i < divs; i++) {
    grid[i].onmouseover = function () {
      this.style.backgroundColor = color;
    };
  }
}

function rainbow() {
  let buttonReset = document.getElementsByClassName("color");
  for (i = 0; i < 5; i++) {
    buttonReset[i].style.backgroundColor = "darkslateblue";
    buttonReset[i].style.border = "none";
  }
  document.getElementById("rainbow").style.backgroundColor = "red";
  document.getElementById("rainbow").style.border = "3px black solid";
  for (i = 0; i < divs; i++) {
    grid[i].onmouseover = function () {
      this.style.backgroundColor =
        "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
    };
  }
}

function reset() {
  for (i = 0; i < divs; i++) {
    grid[i].style.backgroundColor = "white";
  }
}
