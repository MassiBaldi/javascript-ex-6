// Il software deve chiedere all’utente il suo nome e il
// sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>”, il
// colore del nome deve essere azzurro o rosa a
// seconda del sesso inserito

//chiedo il nome all'utente
var nomeUtente = prompt('Scrivi il tuo nome');
//modifico html col nome utente
var span_NUtente = document.getElementById('utente');
span_NUtente.innerHTML = nomeUtente;
//chiedo il sesso all'nomeUtente
var sessoUtente = prompt('Scrivi il tuo sesso (maschio o femmina)');
sessoUtente = sessoUtente.toLowerCase();
//se è maschio il nome diventa azzurro
if (sessoUtente == 'maschio') {
  span_NUtente.style.color = '#2572ed';
}
//se è femmina il nome diventa rosa
else if (sessoUtente == 'femmina') {
  span_NUtente.style.color = '#f49a9a';
}
//se si sbaglia a scrivere il sesso viene richiesto
else {
  var sessoSbagliato = prompt('Hai sbagliato a scrivere il sesso... Riprova.');
}
