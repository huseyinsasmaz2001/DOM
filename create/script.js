/*
// Attendez que le DOM soit entièrement chargé avant d'exécuter le script

document.addEventListener('DOMContentLoaded', function() {
  // Liste des noms des apprenants
  const apprenants = ['Ugur', 'Tess', 'Mathias', 'Huseyin']; 
  // Sélectionne l'élément 'article' dans le DOM
  const article = document.querySelector('article');

  // Pour chaque apprenant dans la liste
  apprenants.forEach(function(apprenant) {
    // Crée un élément 'section' pour chaque apprenant
    const section = document.createElement('section');
    // Crée un élément 'paragraphe' pour chaque apprenant
    const paragraph = document.createElement('p');

    // Définit le texte de la section avec le nom de l'apprenant
    section.textContent = apprenant;
    // Définit le texte du paragraphe avec le nom de l'apprenant
    paragraph.textContent = apprenant;

    // Génère une couleur aléatoire en utilisant la fonction generateRandomColor()
    const randomColor = generateRandomColor();
    // Applique la couleur d'arrière-plan à la section
    section.style.backgroundColor = randomColor;
    
    // Détermine la couleur du texte en fonction du contraste avec la couleur d'arrière-plan
    const textColor = getContrastColor(randomColor);
    // Applique la couleur de texte à la section
    section.style.color = textColor;

    // Ajoute la section à l'intérieur de l'élément 'article' dans le DOM
    article.appendChild(section);
    // Ajoute le paragraphe à l'intérieur de la section créée
    section.appendChild(paragraph);
  });
});

// Fonction pour générer une couleur aléatoire en utilisant le modèle RGB
function generateRandomColor() {
  // Génère des valeurs aléatoires pour R, G et B
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Retourne une chaîne de caractères représentant la couleur au format RGB
  return `rgb(${r}, ${g}, ${b})`;
}

// Fonction pour déterminer la couleur du texte en fonction du contraste avec la couleur d'arrière-plan
function getContrastColor(rgbColor) {
  // Extrait les valeurs R, G et B de la chaîne de couleur au format RGB
  const rgb = rgbColor.match(/\d+/g);
  // Calcule la luminosité de la couleur pour déterminer le contraste
  const brightness = (Number(rgb[0]) * 299 + Number(rgb[1]) * 587 + Number(rgb[2]) * 114) / 1000;

  // Retourne la couleur du texte en blanc si la luminosité est élevée, sinon en noir
  return brightness >= 128 ? '#000000' : '#FFFFFF';
}
*/


//HSL


// Attend que le DOM soit entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function() {
  // Liste des noms des apprenants
  const apprenants = ['Ugur', 'Tess', 'Mathias', 'Huseyin']; 
  // Sélectionne l'élément 'article' dans le DOM
  const article = document.querySelector('article');

  // Pour chaque apprenant dans la liste
  apprenants.forEach(function(apprenant) {
    // Crée un élément 'section' pour chaque apprenant
    const section = document.createElement('section');
    // Crée un élément 'paragraphe' pour chaque apprenant
    const paragraph = document.createElement('p');

    // Définit le texte de la section avec le nom de l'apprenant
    section.textContent = apprenant;
    // Définit le texte du paragraphe avec le nom de l'apprenant
    paragraph.textContent = apprenant;

    // Génère une couleur aléatoire en utilisant la fonction generateRandomColor()
    const randomColor = generateRandomColor();
    // Applique la couleur d'arrière-plan à la section
    section.style.backgroundColor = randomColor;
    
    // Détermine la couleur du texte en fonction du contraste avec la couleur d'arrière-plan
    const textColor = getContrastColor(randomColor);
    // Applique la couleur de texte à la section
    section.style.color = textColor;

    // Ajoute la section à l'intérieur de l'élément 'article' dans le DOM
    article.appendChild(section);
    // Ajoute le paragraphe à l'intérieur de la section créée
    section.appendChild(paragraph);
  });
});

// Fonction pour générer une couleur aléatoire en utilisant le modèle HSL
function generateRandomColor() {
  // Génère des valeurs aléatoires pour la teinte (Hue), la saturation (Saturation) et la luminosité (Lightness)
  const h = Math.floor(Math.random() * 360); // Teinte entre 0 et 360 degrés
  const s = Math.floor(Math.random() * 101); // Saturation entre 0% et 100%
  const l = Math.floor(Math.random() * 101); // Luminosité entre 0% et 100%

  // Retourne une chaîne de caractères représentant la couleur au format HSL
  return `hsl(${h}, ${s}%, ${l}%)`;
}

// Fonction pour déterminer la couleur du texte en fonction du contraste avec la couleur d'arrière-plan
function getContrastColor(hslColor) {
  // Extrait la luminosité (Lightness) de la chaîne de couleur au format HSL
  const lightness = hslColor.match(/\d+/g)[2];
  
  // Retourne la couleur du texte en blanc si la luminosité est élevée, sinon en noir
  return lightness >= 50 ? '#000000' : '#FFFFFF';
}

