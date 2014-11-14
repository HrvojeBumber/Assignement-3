/// <reference path="../managers/asset.ts" />
module objects {
    // this is the Ninja Class
    export class Ninja {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        ninjaSound: createjs.SoundInstance;
        width: number;
        height: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "ninja");
            this.image.x = 40;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            game.addChild(this.image);
            this.ninjaSound = createjs.Sound.play('ninja', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }


        update() {
            this.image.y = this.stage.mouseY;
        }
        destroy() {
            this.ninjaSound.stop();
            game.removeChild(this.image);
        }
    }
} 