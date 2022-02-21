let root = document.getElementById("root");
let input = document.getElementById("input");
let button = document.getElementById("button");


button.addEventListener("click", () => {
  root.style.backgroundColor = `#${input.value}`
})
