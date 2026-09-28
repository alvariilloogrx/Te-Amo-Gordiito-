# Te-Amo-Gordiito-
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#09000d">
  <title>Te AMO Gordiito 🩵</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="stars"></div>
  <div id="hearts"></div>

  <header class="top">
    <div class="brand">Bebee</div>
  </header>

  <main>
    <section class="lock-box" id="lockBox">
      <div class="lock-icon">🔒</div>
      <h1>Te Amo<br>Miivida</h1>
      <p>Ingresa nuestra fecha</p>

      <div class="dots" id="dots">
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
      </div>

      <div class="keypad">
        <button data-key="1">1</button>
        <button data-key="2">2</button>
        <button data-key="3">3</button>
        <button data-key="4">4</button>
        <button data-key="5">5</button>
        <button data-key="6">6</button>
        <button data-key="7">7</button>
        <button data-key="8">8</button>
        <button data-key="9">9</button>
        <button data-action="clear">C</button>
        <button data-key="0">0</button>
        <button data-action="backspace">⌫</button>
      </div>

      <div class="error" id="error"></div>
    </section>

    <section class="message hidden" id="message">
      <div class="big-love">🩵✨🐒</div>
      <h2>Te Amo miiniiñoo</h2>
      <div class="emoji-line">🩵 ✨ 🐒 ✨ 🩵</div>
      <p>Gracias por cada momento, cada sonrisa y cada recuerdo.</p>
      <p>Espero que sigamos creando muchísimos momentos juntos. 🩵</p>

      <div class="code-card">
        <div class="code-header">
          <div class="lights">
            <span class="red"></span>
            <span class="yellow"></span>
            <span class="green"></span>
          </div>
          <span>Love.css</span>
        </div>
        <pre><span class="selector">.Para_Ti</span> {
  position: absolute;
  width: 90%;
  font-size: 2rem;
  font-family: "Te Amo";
  color: #9deeff;
  background: #00111c;
}</pre>
      </div>

      <button class="again" id="again">Volver a ver 🩵</button>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>


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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  min-height: 100%;
}

body {
  min-height: 100vh;
  overflow-x: hidden;
  color: white;
  font-family: Arial, sans-serif;
  background:
    radial-gradient(circle at 15% 10%, rgba(255, 0, 145, .65), transparent 25%),
    radial-gradient(circle at 85% 30%, rgba(255, 0, 120, .45), transparent 30%),
    radial-gradient(circle at 50% 90%, rgba(115, 0, 85, .5), transparent 35%),
    #050007;
}

#stars,
#hearts {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.star {
  position: absolute;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 8px white;
  animation: twinkle 2s infinite alternate;
}

.heart {
  position: absolute;
  color: #ff238e;
  font-size: 22px;
  opacity: .75;
  animation: floatUp linear forwards;
  text-shadow: 0 0 10px #ff0080;
}

.top {
  position: relative;
  z-index: 2;
  height: 135px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    rgba(255, 0, 145, .65),
    rgba(255, 0, 90, .18)
  );
  box-shadow: 0 0 35px rgba(255, 0, 140, .7);
}

.brand {
  font-size: 34px;
  letter-spacing: 3px;
