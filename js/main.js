// L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// VARIABILE CONTAINER
const contenitore = document.getElementById('container');
// console.log(contenitore);

// LOOP PER CREARE 100 CASELLE
for (let i = 0; i < 100; i++){
  let nuovoElemento = creaSquare();
  nuovoElemento.append([i + 1]);

  // AL CLICK AGGIUNGO CLASSE PER CAMBIARE COLORE ALLA CASELLA
  nuovoElemento.addEventListener('click',
    function () {
      nuovoElemento.classList.toggle('square-click');
    }
  )

  // METTO L'ELEMENTO NEL CONTAINER
  contenitore.appendChild(nuovoElemento);
}


// FUNZIONE PER CREARE DIV
function creaSquare() {
  const elemento = document.createElement('div');
  elemento.classList.add('square');

  // console.log(elemento);
  return elemento;
}
