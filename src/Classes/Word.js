class Word {
    constructor(words) {
        this.word = this.pickWord(words);
        this.wordMapping = this.getWordMapping();

    }

    // méthode qui récupère un élément aléatoire dans le tableau de mots
    pickWord(words) {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    };

    //méthode qui décompose le mot en tableau de lettres
    getWordMapping() {
        return this.word.split('').map((letter) => ({letter, isVisible : false}));
    }
    // Fonction de vérification de la lettre choisie
    checkLetter(letter) {
        let isLetterInWord = false;

        // Vérifie si la lettre est dans le mot à deviner
        this.wordMapping.forEach((letterMapping) => {
            if (letterMapping.letter === letter) {
                letterMapping.isVisible = true;
                isLetterInWord = true;
            }
        });
        return isLetterInWord;
    }
    //méthode qui vérifie si toutes les lettre ont ete trouvees
    isAllLettersFound() {
        return this.wordMapping.every(letterMapping => letterMapping.isVisible = true);
    }

    //méthode qui révele toutes les lettres en cas de defaite
    revealWord() {
        //on passe isVisible a true pour afficher toutes les lettres du tableau
        this.wordMapping.forEach(letterMapping.isVisible = true);
    }

    //méthode pour le rendu du mot a trouver 
    getWordHtml() {
        // méthode qui affiche le mot à deviner
        return this.wordMapping.map((letterMapping) => {
            return letterMapping.isVisible 
            ? `<li>${letterMapping.letter}</li>`
            : `<li>_</li>`;
        }).join('');
    }
}


export default Word;