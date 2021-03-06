﻿/// <reference path="../managers/asset.ts" />
/*
 * Name: Hrvoje Bumber
 * Date: Nov 2014
 * Purpose: initialize the asset for the sprite coin image and adjust it to move from the x coordinate to zero so make go from right to left.
 */
module objects {
    // this is the coin class
    export class Coin {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        height: number;
        width: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "coin");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dx = 5;

            game.addChild(this.image);
        }

        update() {
            this.image.x -= this.dx;
            if (this.image.x <= 0) {
                this.reset();
            }
        }

        reset() {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.width);
            this.image.x = this.stage.canvas.width + this.width;
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}