// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "La sonrisa más bonita", time: 15 },
  { text: "Tus ojos que encienden constelaciones", time: 18 },
  { text: "El cabello que danza con la noche", time: 27 },
  { text: "Tu piel, como pétalos que despiertan mi deseo", time: 32 },
  { text: "Una mirada que desnuda el alma", time: 33 },
  { text: "Tu cuerpo, un poema escrito con fuego", time: 41 },
  { text: "En cada abrazo eres infinito ", time: 47 },
  { text: "Tus caricias son versos ardientes", time: 54 },
  { text: "Eres poesía hecha de deseo", time: 59 },
  { text: "Tu presencia me deja sin aliento", time: 67 },
  { text: "Tu voz recorre mi piel como un secreto", time: 72 },
  { text: "Tus abrazo son mi refugio, mi eternidad", time: 78 },
  { text: "Tus manos son raíces que me sostienen", time: 83 },
  { text: "Tu voz, la melodía que acaricia mi alma", time: 91 },
  { text: "Eres el fuego que florece en ternura", time: 97 },
  { text: "Amor... mi eterno septiembre contigo", time: 104 },
  { text: "Caí rendido en tus brazos hace años", time: 108 },
  { text: "Y sigo cayendo, como hojas al viento", time: 144 },
  { text: "Eres mi raíz, mi cielo, mi destino", time: 148 },
  { text: "Tu piel y la mía son un campo en primavera", time: 153 },
  { text: "Tus ojos son la primavera eterna en mi vida", time: 158 },
  { text: "Las flores no son reales pero van com mucho amor", time: 164 },
  { text: "Millones de perosnas y ninguna como tu", time: 169 },
  { text: "Invades mis pensamientos cada dia ", time: 176 },
  { text: "Las noches a tu lado sin duda las mejores", time: 183 },
  { text: "El refugio donde mi alma se enciende contigo", time: 188 },
  { text: "I will love you forever.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);