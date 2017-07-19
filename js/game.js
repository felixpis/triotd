
(function () {
    var game = new Phaser.Game(960, 700, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    function preload() {
        game.load.image('ground', '/assets/towerDefense_tile231.png');
        game.load.image('stone', '/assets/towerDefense_tile137.png');
        game.load.image('bush1', '/assets/towerDefense_tile130.png');
        game.load.image('bush2', '/assets/towerDefense_tile134.png');
        game.load.image('tower-body', '/assets/towerDefense_tile180.png');
        game.load.image('tower-gun', '/assets/towerDefense_tile250.png');
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
            var stone = game.add.sprite(x, y, 'stone');
            stone.inputEnabled = true;
            stone.input.enableDrag(true);
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

        var tower = game.add.group();
        tower.inputEnableChildren = true;
        tower.onChildInputDown.add((sprite, pointer) => {
            console.log(sprite);
            console.log(pointer);
        }, this);
        var towerBody = tower.create(10, 540, 'tower-body');
        var towerGun = tower.create(10, 530, 'tower-gun');
        towerBody.inputEnabled = true;
        towerGun.inputEnabled = true;
        towerBody.input.enableDrag();
        towerGun.input.enableDrag();
        
    }

    function update(params) {

    }
})()