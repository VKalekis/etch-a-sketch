const container = document.querySelector("#container");
let divs = document.querySelectorAll(".class1");

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    let newdiv = document.createElement("div");
    newdiv.className = "class1";
    //   newdiv.style.backgroundColor =
    //     "#" + Math.floor(Math.random() * 16777215).toString(16);
    container.appendChild(newdiv);
  }
}

function divAddEventListener() {
  divs = document.querySelectorAll(".class1");
  divs.forEach(div => {
    div.addEventListener("mouseenter", e => {
      //   div.style.backgroundColor =
      //     "#" + Math.floor(Math.random() * 16777215).toString(16);

      let divcolor = window
        .getComputedStyle(div, null)
        .getPropertyValue("background-color");

      switch (divcolor) {
        case "rgba(0, 0, 0, 0)":
          div.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
          break;
        case "rgba(0, 0, 0, 0.1)":
          div.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
          break;
        case "rgba(0, 0, 0, 0.2)":
          div.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
          break;
        case "rgba(0, 0, 0, 0.3)":
          div.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
          break;
        case "rgba(0,0,0,0.4)":
          div.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
          break;
        case "rgba(0, 0, 0, 0.5)":
          div.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
          break;
        case "rgba(0, 0, 0, 0.6)":
          div.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
          break;
        case "rgba(0, 0, 0, 0.7)":
          div.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
          break;
        case "rgba(0, 0, 0, 0.8)":
          div.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
          break;
        case "rgba(0, 0, 0, 0.9)":
          div.style.backgroundColor = "rgba(0, 0, 0, 1)";
          break;
      }
    });
  });
}

createGrid(16);
divAddEventListener();

let resetbutton = document.querySelector("#reset-button");
resetbutton.addEventListener("click", e => {
  divs = document.querySelectorAll(".class1");
  divs.forEach(div => {
    div.style.backgroundColor = "rgba(0, 0, 0, 0)";
  });
});

let redrawbutton = document.querySelector("#redraw-button");
redrawbutton.addEventListener("click", e => {
  size = prompt("Give new size of grid (<100)");
  if (size > 0 && size < 100) {
    while (container.lastElementChild) {
      container.removeChild(container.lastElementChild);
    }
    container.style.gridTemplateRows = `repeat(${size},1fr)`;
    container.style.gridTemplateColumns = `repeat(${size},1fr)`;
    createGrid(size);
  }
  divAddEventListener();
});
