function gridSetup() {
  let counter = 0;
  while (counter < 256) {
    const div = document.createElement("div");
    div.className = "grid";
    document.getElementById("container").appendChild(div);
    counter++;
  }
}

gridSetup();

const grid = document.getElementsByClassName("grid");

function color(color) {
  for (i = 0; i < 256; i++) {
    grid[i].onmouseover = function () {
      this.style.backgroundColor = color;
    };
  }
}

function reset() {
  for (i = 0; i < 256; i++) {
    grid[i].style.backgroundColor = "white";
  }
}
