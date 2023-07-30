import { Game } from "./scripts/game-engine/game.js";
import { Ball

} from "./scripts/game/Ball.js"; 


Game.constructor();

const sounds = Game.SoundManager.loadAll([{
    name: 'hit',
    src: './scripts/game/snd/pong-hit.mp3'
}]);

const images = Game.ImageManager.loadAll([
    { name: 'background', src: './scripts/game/img/background.png' }
])

Promise.all([sounds, images])
    .then(() => {
        Game.start();
        const ball = new Ball(30);
        
        Game.addObject(ball);
        
    });

