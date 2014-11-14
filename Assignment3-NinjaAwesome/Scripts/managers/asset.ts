/*
 * Name: Hrvoje Bumber
 * Date: Nov 2014
 * Purpose: to get the image of all the images in one into a sprite to add it to the game and the sound  
 */
module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "japan", src: "assets/images/japan.png" },
        { id: "coin", src: "assets/sounds/coin.wav" }
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [

            [902, 2, 40, 40],
            [780, 2, 120, 42],
            [349, 2, 65, 65],
            [84, 2, 263, 73],
            [2, 2, 80, 80],
            [416, 2, 362, 51]
        ],
        "animations": {

            "coin": [0],
            "instructionButton": [1],
            "ninja": [2],
            "playButton": [3],
            "shuriken": [4],
            "tryAgainButton": [5]
        }
    }

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static atlas: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        }

    }
} 