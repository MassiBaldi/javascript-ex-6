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
  numeriCasuali = getRandomNumber(0, 100);
  console.log(numeriCasuali);
  arrayNCasuali.push(numeriCasuali);
}
console.log(arrayNCasuali);

var arrayNUtente = [];

alert('Hai 30Sec per tenere bene in mente questi numeri ' + arrayNCasuali);

setTimeout(function() {
  for(var i = 0; i < 5; i++){
    var numeroUtente = parseInt(prompt('Bene adesso inserisci uno dei numeri casuali'));
    if (arrayNCasuali.includes(numeroUtente)) {
      arrayNUtente.push(numeroUtente);;
    }
  }
  console.log(arrayNUtente);
  if (arrayNUtente.length > 0) {
    alert('Ti sei ricordato ' + arrayNUtente.length + 'numeri su: ' + arrayNCasuali.length);
  } else {
    alert('Non ti sei ricordato neanche un numero... RITENTA!');
  }
}, 3000);
