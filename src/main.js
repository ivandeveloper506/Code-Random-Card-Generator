/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/********************************************************************************/
/* Fecha Creación:  15 Febrero 2021.                                            */
/* Autor:           Iván Fonseca Castro                                         */
/*                                                                              */
/* Descripción:     Hoja principal de javascript, permite agregar funcionalidad */
/*                  a utilizar en el sitio Web, esto para darle dinamismo a la  */
/*                  a la misma, desde aqui se aplica toda la lógica para        */
/*                  obtener las cartas de forma aleatoria.                      */
/********************************************************************************/

// Constantes para validar los palos del tipo de carta.
const SPADE = "spade";
const CLUB = "club";
const HEART = "heart";
const DIAMOND = "diamond";
const REDCOLOR = "red";
const BLACKCOLOR = "black";

// Constantes para validar las cartas especiales.
const A = "A";
const J = "J";
const Q = "Q";
const K = "K";

// Arreglo de los palos para el tipo de carta.
let suitCardArray = [SPADE, CLUB, HEART, DIAMOND];
let lastSuitCardGenerate = "heart";

// Arreglo con los números de las cartas.
let numbersArray = [A, "2", "3", "4", "5", "6", "7", "8", "9", "10", J, Q, K];
let cardColor = REDCOLOR;

window.onload = function loadPage() {
  /********************************************************************************/
  /* Fecha Creación:  15 Febrero 2021.                                            */
  /* Autor:           Iván Fonseca Castro                                         */
  /* Nombre Objeto:   loadPage()                                                  */
  /* Argumentos:      No Aplica                                                   */
  /*                                                                              */
  /* Descripción:     Esta función permite generar la carta de forma aleatoria    */
  /*                  cada vez que se carga la página web.                        */
  /********************************************************************************/

  cardGenerate();
};

function cardGenerate() {
  /********************************************************************************/
  /* Fecha Creación:  15 Febrero 2021.                                            */
  /* Autor:           Iván Fonseca Castro                                         */
  /* Nombre Objeto:   cardGenerate()                                              */
  /* Argumentos:      No Aplica                                                   */
  /*                                                                              */
  /* Descripción:     Esta función permite generar la carta de forma aleatoria.   */
  /********************************************************************************/
  let randomNumberCard = getRandomNumberCard();
  let suitCardGenerate = getRandomSuitCard();
  let card = document.querySelector("div");

  document.querySelector("div").classList.remove("card", lastSuitCardGenerate);
  document.querySelector("div").classList.add("card", suitCardGenerate);

  // Se ajusta el color de la carta y el palo, dependiendo el palo obtenido.
  if (suitCardGenerate === HEART || suitCardGenerate === DIAMOND) {
    cardColor = REDCOLOR;
  } else {
    cardColor = BLACKCOLOR;
  }

  card.innerHTML = randomNumberCard;
  card.style.color = cardColor;

  lastSuitCardGenerate = suitCardGenerate;
}

function getRandomSuitCard() {
  /********************************************************************************/
  /* Fecha Creación:  15 Febrero 2021.                                            */
  /* Autor:           Iván Fonseca Castro                                         */
  /* Nombre Objeto:   getRandomSuitCard()                                         */
  /* Argumentos:      No Aplica                                                   */
  /*                                                                              */
  /* Descripción:     Esta función permite generar de forma aleatoria el palo del */
  /*                  tipo de carta.                                              */
  /********************************************************************************/

  return suitCardArray[Math.floor(Math.random() * suitCardArray.length)];
}

function getRandomNumberCard() {
  /********************************************************************************/
  /* Fecha Creación:  15 Febrero 2021.                                            */
  /* Autor:           Iván Fonseca Castro                                         */
  /* Nombre Objeto:   getRandomNumberCard()                                       */
  /* Argumentos:      No Aplica                                                   */
  /*                                                                              */
  /* Descripción:     Esta función permite generar de forma aleatoria el número   */
  /*                  de la carta.                                                */
  /********************************************************************************/

  return numbersArray[Math.floor(Math.random() * numbersArray.length)];
}
