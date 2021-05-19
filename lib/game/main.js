ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'game.levels.level_4',
	'impact.debug.debug',
	'game.entities.player'

)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	gravity: 320,
	score_points: 0,
	player: null,
	
	
	init: function() {
		// Initialize your game here; bind keys etc.
		this.loadLevel(LevelLevel_4);
		ig.input.bind(ig.KEY.LEFT_ARROW,'left');
		ig.input.bind(ig.KEY.RIGHT_ARROW,'right');
		ig.input.bind(ig.KEY.SPACE,'jump');
		ig.input.bind(ig.KEY.A,'left');
		ig.input.bind(ig.KEY.D,'right');
		ig.input.bind(ig.KEY.UP_ARROW,'jump');
		ig.input.bind(ig.KEY.W,'jump');
	},
	
	update: function() {
		var player = this.getEntitiesByType( EntityPlayer )[0];
		if( player ) {
			  this.screen.x = player.pos.x - ig.system.width/2;
			  this.screen.y = player.pos.y - ig.system.height/2;
		}
		
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		    var x = ig.system.width/2,
			y = ig.system.height - 10;
			this.font.draw( 'Score: '+this.score_points, 10, 10, ig.Font.ALIGN.LEFT );

	}
	
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
