import Choice from "./Choice";
import Word from "./Word";

class Game {
    constructor(words) {
        this.els = {
            score: document.getElementById('score'),
            answer: document.getElementById('answer'),
            choices: document.getElementById('choices'),
        };
        this.words = words; //liste des mots possibles
        console.log(this.words);
        this.word = null; //mot a trouver
        this.choices = null; //liste des lettre possibles
        this.scoreCount = 0; //compteur de tentatives incorrectes
        this.maxScore = 8; //nombre de tentatives maximum
        this.isGameOver = false; //partie finie
    }

    //initialisation
    init() {
        console.log("Partie lancée");
        //crée une instance de Word en lui donnant le tableau de mots
        this.word = new Word(this.words);
        //on crée une instance de Choice
        this.choices = new Choice();
        //on affiche le mot a trouver
        this.displayWord();
        //TODO: afficher la liste des lettres a choisir
        this.displayChoices();
    }


    //méthode qui affiche le mot a trouver
    displayWord() {
        this.els.answer.innerHTML = this.word.getWordHtml();
    }

    //méthode qui afffiche la liste des lettres a choisir
    displayChoices() {
        this.els.choices.innerHTML = this.choices.getChoicesHtml();
    }
}

export default Game;