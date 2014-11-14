/// <reference path="../objects/button.ts" />
/// <reference path="../objects/shuriken.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/japan.ts" />
/// <reference path="../objects/ninja.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
/*
* Name: Hrvoje Bumber
* Date: Nov 2014
* Purpose:  to display all the assets, background image and the scoreboard in the game and creates multiple shurikens
*/
var states;
(function (states) {
    function playState() {
        japan.update();
        coin.update();
        ninja.update();

        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            shurikens[count].update();
        }

        collision.update();
        scoreboard.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            ninja.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;

    // play state Function
    function play() {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        japan = new objects.Japan(stage, game);
        coin = new objects.Coin(stage, game);
        ninja = new objects.Ninja(stage, game);

        // Show Cursor
        stage.cursor = "none";

        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            shurikens[count] = new objects.Shuriken(stage, game);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(ninja, coin, shurikens, scoreboard);

        stage.addChild(game);
    }
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map
