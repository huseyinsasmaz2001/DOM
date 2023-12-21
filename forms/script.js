// Afficher le prénom en direct dans le span #display-firstname
const firstNameInput = document.getElementById('firstname');
const displayFirstName = document.getElementById('display-firstname');

// Écouteur d'événement pour détecter les changements de saisie dans l'input "firstname"
firstNameInput.addEventListener('input', (e) => {
  // Met à jour le contenu du span avec la valeur saisie dans le champ "firstname"
  displayFirstName.textContent = e.target.value;
});

// Vérifier si l'âge est suffisant pour afficher la section "a-hard-truth"
const ageInput = document.getElementById('age');
const aHardTruthSection = document.getElementById('a-hard-truth');

// Écouteur d'événement pour détecter les changements dans le champ "age"
ageInput.addEventListener('input', (e) => {
  const age = parseInt(e.target.value);
  // Si l'âge est supérieur ou égal à 18, affiche la section, sinon la cache
  if (age >= 18) {
    aHardTruthSection.style.visibility = 'visible';
  } else {
    aHardTruthSection.style.visibility = 'hidden';
  }
});

// Valider les mots de passe et indiquer les erreurs visuellement
const passwordInput = document.getElementById('pwd');
const confirmPasswordInput = document.getElementById('pwd-confirm');

// Fonction pour valider les mots de passe
function validatePassword() {
  // Vérifie la longueur du mot de passe et s'il correspond à la confirmation
  if (passwordInput.value.length < 6 || passwordInput.value !== confirmPasswordInput.value) {
    // Applique un style de bordure rouge en cas d'erreur
    passwordInput.style.border = '3px solid red';
    confirmPasswordInput.style.border = '3px solid red';
  } else {
    // Réinitialise la bordure à sa valeur par défaut s'il n'y a pas d'erreur
    passwordInput.style.border = '3px solid #ccc';
    confirmPasswordInput.style.border = '3px solid #ccc';
  }
}

// Écouteurs d'événement pour valider les mots de passe à chaque saisie
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validatePassword);

// Activer le mode sombre en sélectionnant une option dans le select
const selectTheme = document.getElementById('toggle-darkmode');

// Écouteur d'événement pour détecter les changements dans le select
selectTheme.addEventListener('change', (e) => {
  const selectedTheme = e.target.value;
  // Applique le thème sombre ou clair en fonction de l'option sélectionnée
  if (selectedTheme === 'dark') {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
});

