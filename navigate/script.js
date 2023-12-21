// Sélection du dernier enfant de la balise <ol>
const ol = document.querySelector('ol');
const lastChild = ol.lastElementChild;

// Placer le dernier enfant au début de la liste
ol.prepend(lastChild);

// Sélection des éléments <h2> de la troisième section et de la deuxième section
const thirdSectionH2 = document.querySelector('section:nth-of-type(3) h2');
const secondSectionH2 = document.querySelector('section:nth-of-type(2) h2');

// Échanger les éléments <h2> entre la deuxième et la troisième section
const temp = thirdSectionH2.textContent;
thirdSectionH2.textContent = secondSectionH2.textContent;
secondSectionH2.textContent = temp;

// Supprimer la dernière section du DOM
const sections = document.querySelectorAll('section');
const lastSection = sections[sections.length - 1];
lastSection.parentNode.removeChild(lastSection);
