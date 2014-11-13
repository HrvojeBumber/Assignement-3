module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "japan", src: "assets/images/japan.png" },
        { id: "coin", src: "assets/sounds/coin.wav" }
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["atlas.png"],
        "frames": [
            [230, 2, 160, 152],
            [392, 130, 120, 42],
            [657, 55, 65, 65],
            [392, 55, 263, 73],
            [2, 2, 226, 178],
            [392, 2, 362, 51]
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