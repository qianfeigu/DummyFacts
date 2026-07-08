const factTextEl = document.querySelector(".fact-text");
const nextBtn = document.querySelector(".next-btn");
const quoteMarkEl = document.querySelector(".quote-mark");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function shuffle(array) {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

let order = shuffle(FACTS);
let cursor = 0;

function render(fact) {
  factTextEl.textContent = fact.text;
}

function showNext() {
  if (cursor >= order.length) {
    order = shuffle(FACTS);
    cursor = 0;
  }
  const fact = order[cursor];
  cursor += 1;

  if (prefersReducedMotion) {
    render(fact);
    return;
  }

  quoteMarkEl.classList.add("is-fading");
  factTextEl.classList.add("is-fading");

  window.setTimeout(() => {
    render(fact);
    quoteMarkEl.classList.remove("is-fading");
    factTextEl.classList.remove("is-fading");
  }, 250);
}

function init() {
  const fact = order[cursor];
  cursor += 1;
  render(fact);
}

init();

nextBtn.addEventListener("click", showNext);

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && document.activeElement !== nextBtn) {
    event.preventDefault();
    showNext();
  }
});
