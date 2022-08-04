const form = document.querySelector("form");
const input = document.getElementById("Email");
const btn = document.getElementById("Btn");
const result = document.getElementById("result");
btn.addEventListener("click", (e) => {

  if (!input.value) {
    input.style.border = "solid 1px #ff5263";
    result.style.display = "block";
  } else {
    input.style.border = "solid 1px #c2d3ff";
    result.style.display = "none";
    input.value = "";
  }
});
