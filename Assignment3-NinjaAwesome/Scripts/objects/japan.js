/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Ocean Class
    var Japan = (function () {
        function Japan(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("japan"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dx = 5;

            game.addChild(this.image);
        }
        Japan.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x >= 0) {
                this.reset();
            }
        };

        Japan.prototype.reset = function () {
            this.image.x = -960;
        };

        Japan.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Japan;
    })();
    objects.Japan = Japan;
})(objects || (objects = {}));
//# sourceMappingURL=japan.js.map
