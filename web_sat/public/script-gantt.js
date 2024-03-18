document.addEventListener('DOMContentLoaded', function() {
    fetch('gantt-plan.json') // Assurez-vous que le chemin est correct
        .then(response => response.json())
        .then(data => {
            const contenuCours = document.getElementById('contenuCours');

            data.phases.forEach((phase, index) => {
                // Construction de la section de la phase
                let sectionDiv = createPhaseSection(phase, index);
                contenuCours.appendChild(sectionDiv);
            });
        });
});

// Fonction pour créer et retourner une section de phase
function createPhaseSection(phase, index) {
    let sectionDiv = document.createElement('div');
    sectionDiv.id = `phase${index}`;
    sectionDiv.classList.add('section');

    let titreSection = document.createElement('h2');
    titreSection.textContent = phase.titre;
    sectionDiv.appendChild(titreSection);

    let commentaireDiv = document.createElement('p');
    commentaireDiv.textContent = phase.commentaire;
    sectionDiv.appendChild(commentaireDiv);

    // Traiter chaque tâche de la phase
    phase.taches.forEach(tache => {
        let tacheDiv = document.createElement('div');
        tacheDiv.classList.add('tache');

        let titreTache = document.createElement('h3');
        titreTache.textContent = tache.titre;
        tacheDiv.appendChild(titreTache);

        // Charger et afficher le contenu Markdown de la tâche, si disponible
        if (tache.contenuMarkdown) {
            loadAndDisplayMarkdown(tache.contenuMarkdown, tacheDiv);
        }

        sectionDiv.appendChild(tacheDiv);
    });

    return sectionDiv;
}

// Fonction pour charger et afficher le contenu Markdown
function loadAndDisplayMarkdown(markdownPath, containerElement) {
    fetch(markdownPath) // Assurez-vous que le chemin des fichiers Markdown est correct
        .then(responseMd => responseMd.text())
        .then(markdown => {
            let contenuMd = document.createElement('div');
            contenuMd.className = 'markdown-contenu';
            contenuMd.innerHTML = marked.parse(markdown);
            containerElement.appendChild(contenuMd);
        });
}
