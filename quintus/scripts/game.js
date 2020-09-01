window.addEventListener('load', function () {
  // 'Sprites, Scenes, Input, Anim, 2D, Touch, UI, TMX, Audio'
  var Q = window.Q = Quintus({ development: true })
    .include('Scenes, Sprites, 2D, Input, Touch, UI, TMX, Audio')
    .include('ActionPlatformerPlayer, ActionPlatformerEnemy')
    .setup({
      width: 320, // to fit devices usign 1280 x 720
      height: 180,
      // maximize: true,
      scaleToFit: true
    }).controls().touch(); // controls(true)

    Q.enableSound();
    Q.imageSmoothingEnable = false
    
    // define scene
    Q.scene('level', function (stage) {
      var player;
      Q.stageTMX('level1.tmx', stage);
      player = Q('Player').first();
      stage.add('viewport').follow(player, { x: true, y: true });
    });

    // load assets
    Q.loadTMX('level1.tmx, sprites.json, sprites.png, kill-enemy.mp3, jump.mp3', function () {
      Q.compileSheets('sprites.png', 'sprites.json');
      Q.stageScene('level');
    });
});
