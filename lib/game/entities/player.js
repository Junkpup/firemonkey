ig.module(
'game.entities.player'
)
.requires(
'impact.entity'
)

.defines ( function() {
			EntityPlayer = ig.Entity.extend({

			size: {x:32, y: 32},
			flip: false,
			gravityFactor: 1,
			maxVel: {x: 100, y: 150},
			friction: {x: 600, y: 0},
			animSheet: new ig.AnimationSheet('media/player2.png', 32, 32),
			speed: 300,
			jump_speed: -200,
			type: ig.Entity.TYPE.A,
			_wmDrawBox: true,
			_wmBoxColor: 'rgba(255, 0, 0, 0.7)',
			checkAgainst: ig.Entity.TYPE.NONE,
			collides: ig.Entity.COLLIDES.PASSIVE,

			init: function (x,y,settings) {
			this.parent(x, y, settings);
			this.addAnim('idle', 0.1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
			this.addAnim('walk', 0.1, [13, 14, 15, 16, 17, 18, 19, 20]);
			this.addAnim('jump', 0.4, [1]);
			this.addAnim('attack', 0.4, []);
		},
			update: function(){
			this.flip = true;
			this.currentAnim.flip.x = this.flip;
			this.parent();
			if(ig.game.score_points==30){
				ig.game.gameOver();
			}
			if(ig.input.state("left")){
			this.accel.x = -this.speed;
		} 
			else if(ig.input.state("right")){
			this.accel.x = this.speed;
			var state = 'right';
		}			
			else{
			this.accel.x = 0;
		}

			if(ig.input.pressed("jump") && this.standing){
			this.vel.y = this.jump_speed;
			
	}
				if(this.vel.x == 0){
				this.currentAnim = this.anims.idle;
			}
			else{	
				this.currentAnim = this.anims.walk;
			}	
			if(ig.input.state("left")){
				this.accel.x = -this.speed;
				this.flip = true;
				var state = 'left';
			}
			else{
				
				this.flip = false;
			}
			this.currentAnim.flip.x = this.flip;
			
			if(!this.standing){
				this.currentAnim = this.anims.jump;	
			}
			else if(this.vel.x == 0){
				this.currentAnim = this.anims.idle;
			}
			else{	
				this.currentAnim = this.anims.walk;
			}
			if(ig.input.state('jump') && ig.input.state("left"))  {
				this.accel.x = -this.speed;
				this.flip = true;
				this.currentAnim = this.anims.jump;	
			}
			this.currentAnim.flip.x = this.flip;
			if(this.pos.y > ig.system.height+130){
		this.kill();
		
	}
			
			if (ig.input.pressed('left')) {
				this.flip = true;
				this.currentAnim.flip.x = this.flip;
				var state= 'left';
			}
			this.currentAnim.flip.x = this.flip;
			

 	    },
		kill: function(){

	this.pos.x = 64;				
	this.pos.y = 144;
    },
		check: function(other){
		
 	}
  
	});
});




