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
