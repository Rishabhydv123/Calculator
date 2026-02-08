let input = document.getElementById("inputBox");

let buttons = document.querySelectorAll(".calculator .button");

let string = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let value = e.target.innerHTML;

    if (value === "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    }
    else if (value === "AC") {
      string = "";
      input.value = "";
    }
    else if (value === "DEL") {
      string = string.slice(0, -1);
      input.value = string;
    }
    else {
      string += value;
      input.value = string;
    }
  });
});

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  toggleBtn.textContent =
    document.body.classList.contains("light") ? "🌞" : "🌙";
});