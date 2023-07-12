function gridSetup() {
  let counter = 0;
  while (counter < 256) {
    const div = document.createElement("div");
    div.style.height = "25px";
    div.style.width = "25px";
    div.style.border = "solid 2px black";
    document.getElementById("container").appendChild(div);
    counter++;
  }
}

gridSetup();
