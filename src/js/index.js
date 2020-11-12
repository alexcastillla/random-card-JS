import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
import "../style/index.scss";

//  DIAMOND SUIT = "\u2666", HEARTH SUIT = "\u2665", SPADE SUIT = "\u2660", CLUB SUIT = "\u2663";

const cardNumber = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const suitCard = ["\u2666", "\u2665", "\u2660", "\u2663"];

window.onclick = () => {
  function randomCardGenerator() {
    return index[Math.round(Math.random() * (index.length - 1))];
  }

  let suitDisplay = randomCardGenerator(suitCard);
  let numberDisplay = randomCardGenerator(cardNumber);

  if (suitDisplay == "\u2666" || suitDisplay == "\u2665") {
    document.querySelector("#top-suit").style.color = "red";
    document.querySelector("#bottom-suit").style.color = "red";
  } else {
    document.querySelector("#top-suit").style.color = "black";
    document.querySelector("#bottom-suit").style.color = "black";
  }

  document.querySelector("#body-number").innerHTML = numberDisplay;
  document.querySelector("#top-suit").innerHTML = suitDisplay;
  document.querySelector("#bottom-suit").innerHTML = suitDisplay;
};
