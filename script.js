let divs = 0;

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
