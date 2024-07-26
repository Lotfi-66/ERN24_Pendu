import Game from "./Classes/Game";
import { WORDS } from "./Tools/words";



class App{
    start(){
        console.log ("App Started");
        const game = new Game(WORDS);
        game.init();
}
}

const app = new App();

export default app;
