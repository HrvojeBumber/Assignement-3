/// <reference path="../managers/asset.ts" />
/*
* Name: Hrvoje Bumber
* Date: Nov 2014
* Purpose: initialize the ninja character in the game and the sountrack for the game and having the object move up and down
*/
var objects;
(function (objects) {
    // this is the Ninja Class
    var Ninja = (function () {
        function Ninja(stage, game) {
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
        Ninja.prototype.update = function () {
            this.image.y = this.stage.mouseY;
        };
        Ninja.prototype.destroy = function () {
            this.ninjaSound.stop();
            game.removeChild(this.image);
        };
        return Ninja;
    })();
    objects.Ninja = Ninja;
})(objects || (objects = {}));
//# sourceMappingURL=ninja.js.map
