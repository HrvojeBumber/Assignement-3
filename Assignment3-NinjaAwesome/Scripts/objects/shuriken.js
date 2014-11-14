/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Cloud class
    var Shuriken = (function () {
        function Shuriken(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "shuriken");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            game.addChild(this.image);
        }
        Shuriken.prototype.update = function () {
            this.image.y += this.dy;
            this.image.x -= this.dx;
            if (this.image.x <= 0) {
                this.reset();
            }
        };

        Shuriken.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.image.x = this.stage.canvas.width + this.width;
        };

        Shuriken.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Shuriken;
    })();
    objects.Shuriken = Shuriken;
})(objects || (objects = {}));
//# sourceMappingURL=shuriken.js.map
