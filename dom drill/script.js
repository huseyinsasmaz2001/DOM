// Attend que le DOM soit entièrement chargé avant d'exécuter le code
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne la première liste non ordonnée (ul) dans le document
    const ulList = document.querySelector('ul');
    // Récupère tous les enfants de la liste non ordonnée
    const children = ulList.childNodes;

    // Boucle à travers tous les enfants de la liste non ordonnée
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        // Vérifie si le nœud est un élément (nodeType 1 correspond à un élément HTML)
        if (child.nodeType === 1) {
            // Vérifie si le texte de l'élément contient "Fast and Furious"
            if (child.textContent.includes("Fast and Furious")) {
                // Déplace l'élément "Fast and Furious" au début de la liste s'il n'est pas déjà le premier enfant
                if (i !== 0) {
                    ulList.insertBefore(child, ulList.childNodes[0]);
                }
                // Ajoute une classe 'important' à l'élément
                child.classList.add('important');

                // Crée un élément image
                const image = document.createElement('img');
                // Définit le chemin de l'image
                image.src = '/assets/DOM-drill.gif';
                // Définit une description pour l'image
                image.alt = 'Fast and Furious Image';

                // Ajoute un écouteur d'événements de clic à l'image
                image.addEventListener('click', function() {
                    // Affiche une alerte lorsque l'image est cliquée
                    alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
                });

                // Insère l'image après l'élément "Fast and Furious"
                child.insertAdjacentElement('afterend', image);
            }
        }
    }

    // Crée un bouton pour supprimer les doublons de la liste
    const removeDuplicatesBtn = document.createElement('button');
    removeDuplicatesBtn.textContent = 'Supprimer les doublons';
    removeDuplicatesBtn.addEventListener('click', function() {
        // Utilise un Set pour stocker les éléments uniques
        const uniqueFranchises = new Set();
        children.forEach(child => {
            if (child.nodeType === 1) {
                if (uniqueFranchises.has(child.textContent)) {
                    // Supprime les éléments en double de la liste
                    ulList.removeChild(child);
                } else {
                    uniqueFranchises.add(child.textContent);
                }
            }
        });
    });

    // Insère le bouton de suppression des doublons avant la liste
    ulList.before(removeDuplicatesBtn);

    // Ajoute un écouteur d'événements sur les touches du clavier
    document.addEventListener('keyup', function(event) {
        // Mélange aléatoirement la liste en appuyant sur la touche 'r'
        if (event.key === 'r') {
            const franchises = Array.from(ulList.children);
            franchises.sort(() => Math.random() - 0.5);
            franchises.forEach(franchise => ulList.appendChild(franchise));
        }
        // Duplique l'élément 'Fast and Furious' en appuyant sur la touche 'd'
        if (event.key === 'd') {
            const fastAndFurious = document.querySelector('.important');
            const clone = fastAndFurious.cloneNode(true);
            ulList.appendChild(clone);
        }
    });

    // Crée un nouvel élément div et un menu déroulant (select)
    const newDiv = document.createElement('div');
    const selectList = document.createElement('select');
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');

    // Définit le texte des options du menu déroulant
    option1.text = 'franchises importantes';
    option2.text = 'franchises normales';

    // Ajoute les options au menu déroulant
    selectList.appendChild(option1);
    selectList.appendChild(option2);

    // Ajoute le menu déroulant au nouvel élément div
    newDiv.appendChild(selectList);

    // Insère le nouvel élément div avant la liste
    ulList.before(newDiv);

    // Ajoute un écouteur d'événements pour changer la visibilité des éléments en fonction de l'option sélectionnée
    selectList.addEventListener('change', function() {
        const selectedOption = selectList.value;
        children.forEach(child => {
            if (child.nodeType === 1) {
                if (selectedOption === 'franchises importantes') {
                    // Cache ou affiche les éléments marqués comme 'importants'
                    if (child.classList.contains('important')) {
                        child.style.visibility = 'visible';
                    } else {
                        child.style.visibility = 'hidden';
                    }
                } else {
                    // Affiche tous les éléments si l'option sélectionnée est différente de 'franchises importantes'
                    child.style.visibility = 'visible';
                }
            }
        });
    });
});

