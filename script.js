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

gridSetup(16);

function dimensions() {
  let dimensions = document.getElementById("slider").value;

  if (dimensions == 1) {
    document.getElementById("dimensionsText").innerHTML = "4 x 4";
  }
  if (dimensions == 2) {
    document.getElementById("dimensionsText").innerHTML = "8 x 8";
  }
  if (dimensions == 3) {
    document.getElementById("dimensionsText").innerHTML = "16 x 16";
  }
  if (dimensions == 4) {
    document.getElementById("dimensionsText").innerHTML = "25 x 25";
  }
  if (dimensions == 5) {
    document.getElementById("dimensionsText").innerHTML = "50 x 50";
  }
}

const grid = document.getElementsByClassName("grid");

function customColor(color) {
  color = document.getElementById("colorCode").value;
  for (i = 0; i < divs; i++) {
    grid[i].onmouseover = function () {
      this.style.backgroundColor = color;
    };
  }
}

function color(color) {
  for (i = 0; i < divs; i++) {
    grid[i].onmouseover = function () {
      this.style.backgroundColor = color;
    };
  }
}

function reset() {
  for (i = 0; i < divs; i++) {
    grid[i].style.backgroundColor = "white";
  }
}
