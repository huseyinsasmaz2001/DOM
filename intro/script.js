// Afficher le titre du document dans la console
console.log(document.title);

// Remplacez le titre du document par "Modifying the DOM"
document.title = "Modifying the DOM";

// Changez la couleur d'arrière-plan du corps en rose vif (#FF69B4)
document.body.style.backgroundColor = "#FF69B4";

// Changez la couleur d'arrière-plan du corps en une couleur aléatoire
function getRandomColor() {
  // Génère des valeurs aléatoires pour les canaux rouge, vert et bleu
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  // Applique la couleur aléatoire au fond du corps
  document.body.style.backgroundColor = randomColor;
}

// Appel de la fonction pour changer la couleur du fond en une couleur aléatoire
getRandomColor();

// À l'aide de la méthode children et d'une boucle for...of, affichez tous les éléments enfants du deuxième élément enfant du document (tous les éléments enfants du <body>)
// Sélectionne le deuxième élément enfant du document (index 1 car les indices commencent à 0)
const secondChild = document.body.children[1];
// Boucle à travers tous les éléments enfants du deuxième élément enfant du document
for (const child of secondChild.children) {
  console.log(child); // Affiche chaque élément enfant dans la console
}
