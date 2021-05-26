ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'game.levels.level_4',
	'game.entities.player',
	'game.levels.completed'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	gravity: 320,
	score_points: 0,
	player: null,
	bucket_picked: false,
	health: 5,
	bucket_numbers: 0,
	state: {},
	gameOver: function()
		{
			ig.system.setGame(GameOverScreen);
		},
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
		ig.input.bind(ig.KEY.MOUSE1,'destroy');
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
			this.font.draw( 'Score: '+this.score_points, 10, 10);
			this.font.draw( 'Buckets picked: '+this.bucket_numbers, 10, 20);
	}
		
	
});
 StartScreen = ig.Game.extend({    
				 instructText: new ig.Font( 'media/04b03.font.png' ),    
				 background: new ig.Image('media/bg.png'),  
				title: new ig.Image('media/firemonkey.png'),
				init: function() {          
					ig.input.bind( ig.KEY.SPACE, 'start');    
				 },    
				 update: function() {          
					 if(ig.input.pressed ('start')){               
						ig.system.setGame(MyGame)          
					 }          
				 this.parent();    },    
				 draw: function() {          
				 this.parent();          
				 this.background.draw(10,10); 
				 this.title.draw(ig.system.width - this.title.width-150, 70);	
				 var x = ig.system.width/2,          
				 y = ig.system.height - 10;          
				 this.instructText.draw('')
				 this.instructText.draw( 'Press Spacebar To Start', ig.system.width - this.title.width-190, 120 );    
				 this.instructText.draw('Controlled forest fires are considered beneficial for forest growth.\n However, uncontrolled, large-scale forest fires can put biodiversity at risk, cause air pollution and water pollution.', ig.system.width - this.title.width-100, 40)
			 }
		});
		 GameOverScreen = ig.Game.extend({    
				 instructText: new ig.Font( 'media/04b03.font.png' ),    
				 background: new ig.Image('media/bg.png'),    
				 gameOver: new ig.Image('media/game_over.png'),    
				 stats: {},    
				 init: function() {          
						 ig.input.bind( ig.KEY.SPACE, 'start');          
						 this.stats = ig.finalStats; 
					 },    
				 update: function() {          
					 if(ig.input.pressed('start')){               
					 ig.system.setGame(StartScreen)          
				 }          
				 this.parent();    
				},    
				 draw: function() {          
					 this.parent();          
					 this.background.draw(0,0);          
					 var x = ig.system.width/2;          
					 var y = ig.system.height/2 - 20;          
					 this.gameOver.draw(x - (this.gameOver.width * .5), y - 90);          
					 this.instructText.draw('Congratulations on saving the Fire Monkey\'s home! \n You have saved them from the clutches \n \t of the Hooded Ones!', x - (this.gameOver.width-5 * .5), y - 20);
					 this.instructText.draw('The team:\n 1. Team Lead: Arnav R Coushik\n 2. Code, concept, start page: Arnav R Coushik \n 3. Enemy entities: K. Enan A. Ramachandran and Arnav R. Coushik. \n 4. Level Design: Aditya Srivaths\n 5. Bucket Entity: Kevin Jacob Joby \n 6. Asset finding: Akshat Sathiya', 30, 150);
					 this.instructText.draw('Press Spacebar To Continue', x, ig.system.height - 10, ig.Font.ALIGN.CENTER);    
				}
		});

// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', StartScreen, 60, 320, 240, 2 );

});
