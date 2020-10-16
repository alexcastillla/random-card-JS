/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  const cardNumber = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const cardPalo = [picas, corazon, diamantes, trebol];
  const picas = "\u2660\uFE0F";
  const corazon = "\u2665\uFE0F";
  const diamantes = "\u2666\uFE0F";
  const trebol = "\u2663\uFE0F";

  function numberGenerator() {
    return cardNumber[Math.round(Math.random() * (cardNumber.length - 1))];
  }

  function paloGenerator() {
    let paloResult = "";

    let randomNumberPalo =
      cardPalo[Math.round(Math.random() * (cardPalo.length - 1))];

    if (randomNumberPalo == picas || randomNumberPalo == trebol) {
      paloResult = "black";
    } else {
      paloResult = "red";
    }
    return paloResult;
  }

  console.log(paloGenerator());
  paloGenerator();
  console.log(numberGenerator());
  numberGenerator();
};
