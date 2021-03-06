﻿/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/ninja.ts" />
/// <reference path="../objects/japan.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/shuriken.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/*
* Name: Hrvoje Bumber
* Date: Nov 2014
* Purpose:create a menu screen for the game begins and when the player loses they are
*         redirected to another screen were the score is displayed and an option to play again
*/
var states;
(function (states) {
    function playButtonClicked(event) {
        stage.removeChild(game);
        ninja.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;

    function menuState() {
        japan.update();
        ninja.update();
    }
    states.menuState = menuState;

    function menu() {
        var gameNameLabel;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        japan = new objects.Japan(stage, game);
        ninja = new objects.Ninja(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "NINJA AWESOME");
        game.addChild(gameNameLabel);

        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 300, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map
