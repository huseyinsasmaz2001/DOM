// Ajoute un attribut title aux éléments avec la classe "important"
const importantElements = document.querySelectorAll('.important');
importantElements.forEach(element => {
  // Pour chaque élément "important", on ajoute un attribut "title" avec la valeur spécifiée
  element.setAttribute('title', 'This is an important item');
});

// Sélectionne toutes les balises img et masque celles qui n'ont pas la classe "important"
const allImages = document.querySelectorAll('img');
allImages.forEach(image => {
  // Vérifie si l'image ne contient pas la classe "important"
  if (!image.classList.contains('important')) {
    // Cache l'image en modifiant sa propriété de style (display) en "none"
    image.style.display = 'none';
  }
});

// Parcourt tous les paragraphes et affiche leur contenu dans la console
// Affiche également le nom de classe s'ils en ont un
const allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach(paragraph => {
  // Affiche le contenu textuel du paragraphe dans la console
  console.log(paragraph.textContent);

  // Vérifie s'il y a une classe attribuée au paragraphe
  if (paragraph.classList.length > 0) {
    // Si oui, affiche le nom de la classe dans la console
    console.log(`Class: ${paragraph.classList}`);
  }

  // Donne une couleur de texte aléatoire aux paragraphes sans classe
  if (!paragraph.classList.length) {
    // Génère une couleur de texte aléatoire au format RGB
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    // Modifie la couleur de texte du paragraphe en utilisant la couleur générée
    paragraph.style.color = randomColor;
  }
});



