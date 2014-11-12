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
            [2, 2, 226, 178],
            [230, 2, 211, 69],
            [443, 69, 62, 63],
            [443, 2, 65, 65],
            [230, 73, 211, 69],
            [230, 144, 211, 69]
        ],
        "animations": {
            "shuriken": [0],
            "instructionsButton": [1],
            "coin": [2],
            "ninja": [3],
            "playButton": [4],
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