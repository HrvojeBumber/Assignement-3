/// <reference path="../managers/asset.ts" />
/*
* Name: Hrvoje Bumber
* Date: Nov 2014
* Purpose: initialize the asset for the sprite coin image and adjust it to move from the x coordinate to zero so make go from right to left.
*/
var objects;
(function (objects) {
    // this is the coin class
    var Coin = (function () {
        function Coin(stage, game) {
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
        Coin.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x <= 0) {
                this.reset();
            }
        };

        Coin.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.width);
            this.image.x = this.stage.canvas.width + this.width;
        };

        Coin.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Coin;
    })();
    objects.Coin = Coin;
})(objects || (objects = {}));
//# sourceMappingURL=coin.js.map
