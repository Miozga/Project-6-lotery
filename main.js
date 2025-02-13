const btn = document.querySelector("#random-name-btn");
const div = document.querySelector("#result");

const prefixs = [
  "Wydaje mi się",
  "Mam wrażenie",
  "Szczerze uważam",
  "Jestem pewien",
  "Kocięba",
];

const names = ["Jagienka", "Pola", "Psikuta", "Marta", "Daria", "Maria"];

const nameGenerator = (event) => {
  const indexName = Math.floor(Math.random() * names.length);
  const indexPrefixs = Math.floor(Math.random() * prefixs.length);

  div.textContent = `${prefixs[indexPrefixs]} że najładniejsze imię dla dziewczynki to ${names[indexName]}`;

  createFireworks(event);
};

btn.addEventListener("click", nameGenerator);

// Funkcja do efektu fajerwerków
const createFireworks = (event) => {
  for (let i = 0; i < 10; i++) {
    const firework = document.createElement("div");
    firework.classList.add("firework");

    const x = (Math.random() - 0.5) * 200;
    const y = (Math.random() - 0.5) * 200;

    firework.style.setProperty("--x", `${x}px`);
    firework.style.setProperty("--y", `${y}px`);
    firework.style.left = `${event.clientX}px`;
    firework.style.top = `${event.clientY}px`;

    document.body.appendChild(firework);

    setTimeout(() => {
      firework.remove();
    }, 500);
  }
};
