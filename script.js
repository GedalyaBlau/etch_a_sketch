const container = document.createElement("div");
console.log("created container div");
container.id = "container";
console.log("added container id");
const button = document.createElement("button");
console.log("created button");
document.body.appendChild(button);
if (document.body.button) {
  console.log("appended button");
}
button.innerText = "Choose a size of Playground";
button.id = "btn";

document.body.appendChild(container);
console.log("appended container to body");
let counter = 1;
for (let i = 0; i < 256; i++) {
  for (let j = 0; j < 128; j++) {
    const cell = document.createElement("div");
    cell.id = "cell" + counter;
    cell.className = "grid-item";
    container.appendChild(cell);

    console.log("created and appended cell: " + counter);
    counter++;
    cell.addEventListener("mouseover", function () {
        cell.style.backgroundColor = "black";
    })
  }
}

button.addEventListener("click", () => {
  
  const gridSize = parseInt(
    prompt("How many rows and columns? Please Enter a number!")
  );
  if (gridSize > 0) {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${gridSize},8px)`;
    container.style.gridTemplateRows = `repeat(${gridSize},8px)`;

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const cell = document.createElement("div");
        cell.id = "cell" + counter;
        cell.className = "grid-item";
        container.appendChild(cell);

        console.log("created and appended cell: " + counter);
        counter++;

        cell.addEventListener("mouseover", function () {
            cell.style.backgroundColor = "black";
            
        
        })
      }
    }
  }
});


