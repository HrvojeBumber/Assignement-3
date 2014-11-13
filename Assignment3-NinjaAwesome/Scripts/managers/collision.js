﻿/// <reference path="../objects/shuriken.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/ninja.ts" />
/// <reference path="../objects/scoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision(ninja, coin, shurikens, scoreboard) {
            this.shurikens = [];
            this.ninja = ninja;
            this.coin = coin;
            this.shurikens = shurikens;
            this.scoreboard = scoreboard;
        }
        // Utility method - Distance calculation between two points
        Collision.prototype.distance = function (p1, p2) {
            var result = 0;
            var xPoints = 0;
            var yPoints = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        };

        // check collision between plane and any cloud object
        Collision.prototype.ninjaAndShuriken = function (shuriken) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.ninja.image.x;
            p1.y = this.ninja.image.y;
            p2.x = shuriken.image.x;
            p2.y = shuriken.image.y;
            if (this.distance(p1, p2) < ((this.ninja.height / 2) + (shuriken.height / 2))) {
                //createjs.Sound.play("thunder");
                this.scoreboard.lives -= 1;
                shuriken.reset();
            }
        };

        // check collision between NINJA AND COIN
        Collision.prototype.ninjaAndCoin = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.ninja.image.x;
            p1.y = this.ninja.image.y;
            p2.x = this.coin.image.x;
            p2.y = this.coin.image.y;
            if (this.distance(p1, p2) < ((this.ninja.height / 2) + (this.coin.height / 2))) {
                // createjs.Sound.play("yay");
                this.scoreboard.score += 100;
                this.coin.reset();
            }
        };

        // Utility Function to Check Collisions
        Collision.prototype.update = function () {
            for (var count = 0; count < constants.CLOUD_NUM; count++) {
                this.ninjaAndShuriken(this.shurikens[count]);
            }
            this.ninjaAndCoin();
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map
