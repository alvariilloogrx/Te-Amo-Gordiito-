// =====================================================
// CAMBIA SOLO ESTA LÍNEA POR VUESTRA FECHA.
// Formato: DDMMYY
// Ejemplo: 08/10/2025 = "081025"
// =====================================================
const correctCode = "081025";

let code = "";

const dots = document.querySelectorAll(".dots span");
const error = document.getElementById("error");
const lockBox = document.getElementById("lockBox");
const message = document.getElementById("message");
const stars = document.getElementById("stars");
const hearts = document.getElementById("hearts");

// Fondo de estrellas
for (let i = 0; i < 110; i++) {
  const star = document.createElement("span");
  star.className = "star";

  const size = Math.random() * 3 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 2}s`;

  stars.appendChild(star);
}

// Corazones flotantes
function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "♡" : "♥";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.bottom = "-30px";
  heart.style.fontSize = `${15 + Math.random() * 25}px`;
  heart.style.animationDuration = `${5 + Math.random() * 6}s`;

  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 12000);
}

setInterval(createHeart, 700);

// Teclado numérico
document.querySelectorAll(".keypad button").forEach(button => {
  button.addEventListener("click", () => {
    const number = button.dataset.key;
    const action = button.dataset.action;

    if (number !== undefined) addNumber(number);
    if (action === "clear") clearCode();
    if (action === "backspace") deleteNumber();
  });
});

function addNumber(number) {
  if (code.length >= 6) return;

  code += number;
  updateDots();
  error.textContent = "";

  if (code.length === 6) {
    checkCode();
  }
}

function deleteNumber() {
  code = code.slice(0, -1);
  updateDots();
  error.textContent = "";
}

function clearCode() {
  code = "";
  updateDots();
  error.textContent = "";
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index < code.length);
  });
}

function checkCode() {
  if (code === correctCode) {
    setTimeout(() => {
      lockBox.classList.add("hidden");
      message.classList.remove("hidden");

      for (let i = 0; i < 18; i++) {
        setTimeout(createHeart, i * 90);
      }
    }, 350);
  } else {
    error.textContent = "Fecha incorrecta ❤️";
    lockBox.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-8px)" },
        { transform: "translateX(8px)" },
        { transform: "translateX(0)" }
      ],
      { duration: 300 }
    );

    setTimeout(clearCode, 900);
  }
}

document.getElementById("again").addEventListener("click", () => {
  message.classList.add("hidden");
  lockBox.classList.remove("hidden");
  clearCode();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
