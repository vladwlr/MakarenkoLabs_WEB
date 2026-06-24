const page = document.body;
page.style.margin = "0";
page.style.minHeight = "100vh";
page.style.display = "grid";
page.style.placeItems = "center";
page.style.fontFamily = "Segoe UI, Arial, sans-serif";
page.style.background = "linear-gradient(135deg, #172554, #0f172a)";

const calc = document.createElement("section");
calc.style.width = "min(390px, 92vw)";
calc.style.padding = "22px";
calc.style.borderRadius = "28px";
calc.style.background = "#f8fafc";
calc.style.boxShadow = "0 28px 80px rgba(0,0,0,.35)";
page.appendChild(calc);

const title = document.createElement("div");
title.textContent = "Макаренко Владислав · калькулятор";
title.style.marginBottom = "12px";
title.style.color = "#475569";
title.style.fontSize = "14px";
title.style.fontWeight = "700";
calc.appendChild(title);

const screen = document.createElement("input");
screen.type = "text";
screen.readOnly = true;
screen.placeholder = "0";
screen.style.width = "100%";
screen.style.height = "74px";
screen.style.border = "0";
screen.style.borderRadius = "20px";
screen.style.marginBottom = "16px";
screen.style.padding = "0 18px";
screen.style.fontSize = "38px";
screen.style.textAlign = "right";
screen.style.background = "#e2e8f0";
screen.style.color = "#0f172a";
screen.style.boxSizing = "border-box";
calc.appendChild(screen);

const keyboard = document.createElement("div");
keyboard.style.display = "grid";
keyboard.style.gridTemplateColumns = "repeat(4, 1fr)";
keyboard.style.gap = "10px";
calc.appendChild(keyboard);

const keys = [
  "C", "±", "%", "÷",
  "7", "8", "9", "×",
  "4", "5", "6", "−",
  "1", "2", "3", "+",
  "0", ".", "="
];

function setButtonLook(button, key) {
  button.style.height = "60px";
  button.style.border = "0";
  button.style.borderRadius = key === "0" ? "18px" : "50%";
  button.style.fontSize = "22px";
  button.style.fontWeight = "800";
  button.style.cursor = "pointer";

  if (["÷", "×", "−", "+", "="].includes(key)) {
    button.style.background = "#2563eb";
    button.style.color = "white";
  } else if (["C", "±", "%"].includes(key)) {
    button.style.background = "#cbd5e1";
    button.style.color = "#0f172a";
  } else {
    button.style.background = "#1e293b";
    button.style.color = "white";
  }
}

function calculateExpression(value) {
  const expression = value
    .replaceAll("×", "*")
    .replaceAll("÷", "/")
    .replaceAll("−", "-");

  return Function(`"use strict"; return (${expression})`)();
}

function handleKey(key) {
  if (key === "C") {
    screen.value = "";
    return;
  }

  if (key === "±") {
    if (screen.value) screen.value = String(Number(screen.value) * -1);
    return;
  }

  if (key === "%") {
    if (screen.value) screen.value = String(Number(screen.value) / 100);
    return;
  }

  if (key === "=") {
    try {
      screen.value = String(calculateExpression(screen.value));
    } catch (error) {
      screen.value = "Помилка";
      setTimeout(() => screen.value = "", 900);
    }
    return;
  }

  screen.value += key;
}

keys.forEach((key) => {
  const button = document.createElement("button");
  button.textContent = key;
  setButtonLook(button, key);
  if (key === "0") button.style.gridColumn = "span 2";
  button.addEventListener("click", () => handleKey(key));
  keyboard.appendChild(button);
});
