const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
};

const clickOnSquare = (e) => {
  const color = e.target.classList[1];
  const displayedSquareWrapper = document.querySelector('.displayedsquare-wrapper');
  const journal = document.querySelector('.journal ul'); // Sélectionnez la balise ul dans la section .journal

  const newDiv = document.createElement('div');
  newDiv.classList.add('displayedsquare', color);
  displayedSquareWrapper.appendChild(newDiv);

  

  const newLi = document.createElement('li');
  const elapsedTime = getElapsedTime();
  newLi.textContent = `Action effectuée (${color}) - Temps écoulé : ${elapsedTime}`;
  journal.appendChild(newLi); // Ajoutez le nouvel élément li dans la balise ul de la section .journal
};



document.body.addEventListener('keypress', (e) => {
  const key = e.key;
  const journal = document.querySelector('.journal');
  const displayedSquareWrapper = document.querySelector('.displayedsquare-wrapper');

  if (key === ' ') {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;

    const newLi = document.createElement('li');
    const elapsedTime = getElapsedTime();
    newLi.textContent = `Barre d'espace utilisée - Temps écoulé : ${elapsedTime}`;
    journal.appendChild(newLi);
  } else if (key === 'l') {
    while (journal.firstChild) {
      journal.removeChild(journal.firstChild);
    }
    const newLi = document.createElement('li');
    newLi.textContent = 'Tous les logs ont été supprimés';
    journal.appendChild(newLi); // Ajoute ce message au journal
    
  } else if (key === 's') {
    displayedSquareWrapper.innerHTML = '';
  }
});

document.querySelector('.displayedsquare-wrapper').addEventListener('click', (e) => {
  if (e.target.classList.contains('displayedsquare')) {
    const color = e.target.classList[1];
    alert(`Couleur du carré : ${color}`);
  }
});

const actionSquares = document.querySelectorAll('.actionsquare');
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
}
