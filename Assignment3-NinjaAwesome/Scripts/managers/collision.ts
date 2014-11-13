/// <reference path="../objects/shuriken.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/ninja.ts" />
/// <reference path="../objects/scoreboard.ts" />

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private ninja: objects.Ninja;
        private coin: objects.Coin;
        private shurikens = [];
        private scoreboard: objects.Scoreboard;

        constructor(ninja: objects.Ninja, coin: objects.Coin, shurikens, scoreboard: objects.Scoreboard) {
            this.ninja = ninja;
            this.coin = coin;
            this.shurikens = shurikens;
            this.scoreboard = scoreboard;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between plane and any cloud object
        private ninjaAndShuriken(shuriken: objects.Shuriken) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.ninja.image.x;
            p1.y = this.ninja.image.y;
            p2.x = shuriken.image.x;
            p2.y = shuriken.image.y;
            if (this.distance(p1, p2) < ((this.ninja.height / 2) + (shuriken.height / 2))) {
                //createjs.Sound.play("thunder");
                this.scoreboard.lives -= 1;
                shuriken.reset();
            }
        }

        // check collision between NINJA AND COIN
        private ninjaAndCoin() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.ninja.image.x;
            p1.y = this.ninja.image.y;
            p2.x = this.coin.image.x;
            p2.y = this.coin.image.y;
            if (this.distance(p1, p2) < ((this.ninja.height / 2) + (this.coin.height / 2))) {
               // createjs.Sound.play("yay");
                this.scoreboard.score += 100;
                this.coin.reset();
            }
        }

        // Utility Function to Check Collisions
        update() {
            for (var count = 0; count < constants.CLOUD_NUM; count++) {
                this.ninjaAndShuriken(this.shurikens[count]);
            }
            this.ninjaAndCoin();
        }
    }
} 