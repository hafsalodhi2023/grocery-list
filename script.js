const userInput = document.querySelector("#userInput");
const groceryItems = document.querySelector("#groceryItems");
const pencil = document.querySelector("#pencil");
const eraser = document.querySelector("#eraser");
const saveButton = document.querySelector(".save-btn");

pencil.onclick = () => {
  userInput.style.pointerEvents = "all";
  pencil.style.display = "none";
  eraser.style.display = "block";
};

eraser.onclick = () => {
  eraser.style.display = "block";
  pencil.style.display = "none";
  userInput.style.pointerEvents = "none";
  groceryItems.innerHTML = "";
};

eraser.ondblclick = () => {
  pencil.style.display = "block";
  eraser.style.display = "none";
};

userInput.onkeydown = (event) => {
  if (event.key == "Enter") {
    addPoint();
  }
};

function addPoint() {
  var h2 = document.createElement("h2");
  h2.innerHTML = "-" + userInput.value;

  h2.onclick = () => {
    h2.classList.toggle("cancel");
  };

  groceryItems.insertAdjacentElement("beforeend", h2);

  userInput.value = "";
}

saveButton.onclick = () => {
  eraser.style.display = "none";
  pencil.style.display = "block";
};
