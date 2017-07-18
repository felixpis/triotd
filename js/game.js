
(function () {
    var game = new Phaser.Game(960, 700, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    function preload() {
        game.load.image('ground', '/assets/towerDefense_tile231.png');
        game.load.image('stone', '/assets/towerDefense_tile137.png');
        game.load.image('bush1', '/assets/towerDefense_tile130.png');
        game.load.image('bush2', '/assets/towerDefense_tile134.png');
    }

    function create(params) {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        for (var i = 0; i < 15; i++) {
            for (var j = 0; j < 10; j++) {
                game.add.sprite(i * 64, j * 64, 'ground');
            }
        }

        for (var i = 0; i < 5; i++) {
            var x = parseInt(Math.random() * (15 - 1) + 1) * 64;
            var y = parseInt(Math.random() * (10 - 1) + 1) * 64;
            game.add.sprite(x, y, 'stone');
        }

        for (var i = 0; i < 3; i++) {
            var x = parseInt(Math.random() * (15 - 1) + 1) * 64;
            var y = parseInt(Math.random() * (10 - 1) + 1) * 64;
            game.add.sprite(x, y, 'bush1');
        }

        for (var i = 0; i < 2; i++) {
            var x = parseInt(Math.random() * (15 - 1) + 1) * 64;
            var y = parseInt(Math.random() * (10 - 1) + 1) * 64;
            game.add.sprite(x, y, 'bush2');
        }
    }

    function update(params) {

    }
})()