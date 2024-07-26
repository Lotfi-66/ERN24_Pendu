class Choice{
    constructor(){
        //TODO: liste des lettres de l'alphabet a afficher
        this.choices = this.generateChoices();
        this.choicesMapping = this.getChoicesMapping();
        console.log(this.choices);
    }

    //méthode qui génère la liste des lettres de l'alphabet (A-Z)
    generateChoices(){
        const choices = [];
        //les caractere du clavier de l'alphabet sont des chiffres de 65 a 90
        for (let i = 65; i<=90; i++){
            choices.push(String.fromCharCode(i));
    }
    return choices;
    }

    //on crée un tableau de lettre avec un etat indiquant si elle a été choisi
    getChoicesMapping(){
        //par default toutes les lettres sont non choisies
        return this.choices.map(letter => ({letter, isChosen: false}));
    }

    //on crée une méthode pour marquer une lettre comme choisie
    markChosen(letter){
        this.choicesMapping.forEach((letterMapping) => {
            if (letterMapping.letter === letter) {
                letterMapping.isChosen = true;
            }
        });
    }

    //méthode pour obtenir la liste des lettres choisis
    getChoicesHtml(){
        return this.choicesMapping.map(letterMapping =>
        !letterMapping.isChosen 
        ?`<li class="scrabble-letter">${letterMapping.letter}</li>` 
        :`<p class="scrabble-letter" disabled>${letterMapping.letter}</p>`
        ).join('');
    }
}

export default Choice;