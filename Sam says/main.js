// Un alert espone 5 numeri casuali. Da li parte un
// timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt
// alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono
// stati individuati

function getRandomNumber(min, max) {
  var newNumeroRandom = Math.floor(Math.random() * (max - min + 1) + min);
  return newNumeroRandom;
}

var arrayNCasuali = [];

for(var i=0; i < 5; i++ ) {
  var numeriCasuali = ' ';
  numeriCasuali += getRandomNumber(0, 100);
  console.log(numeriCasuali);
  arrayNCasuali.push(numeriCasuali);
}
console.log(arrayNCasuali);


setInterval(function() {
  parseInt(prompt('Bene adesso inserisci i numeri che hai visto prima'));
}, 5000);
alert('Hai 30Sec per tenere bene in mente questi numeri ' + arrayNCasuali);
