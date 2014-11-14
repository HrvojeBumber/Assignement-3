/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />
/*
 * Name: Hrvoje Bumber
 * Date: Nov 2014
 * Purpose: to initialize the button images  and adjust them to its position and when the mouse pointer is  hovering over the buttons,
 *          the image will fade away a little bit 
 */
module objects {
    export class Button extends createjs.Sprite {
        constructor(x:number, y:number, buttonIDString: string) {
            super(managers.Assets.atlas, buttonIDString);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
            this.setButtonListeners();
        }

        setButtonListeners() {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        }

        onButtonOver() {
            this.alpha = 0.8;
        }

        onButtonOut() {
            this.alpha = 1;
        }
    }
} 