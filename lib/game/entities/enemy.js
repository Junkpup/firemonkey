	ig.module (
		'game.entities.enemy'
	)
	.requires(
		'impact.entity'
	)
	.defines(function(){
		EntityEnemy = ig.Entity.extend({
			size: {x: 24, y: 24},
			flip: true,
			gravityFactor: 1,
			type: ig.Entity.TYPE.C,
			animSheet: new ig.AnimationSheet('media/enemy.png', 24, 24),
			checkAgainst: ig.Entity.TYPE.A,
			collides: ig.Entity.COLLIDES.PASSIVE,
			deathFlag: false,
			init: function(x,y){
					this.parent(x,y);
					this.addAnim('walk', 0.3, [0,1,2,3]);
			},
			update: function(){
				this.parent();
				this.vel.x = 40 * this.turnAround();
				this.currentAnim.flip.x = this.flip;
			},
			turnAround: function(){
				var x = this.pos.x + (this.flip ? + 5 : this.size.x - 5);	 	 
				var y = this.pos.y + this.size.y + 5;
				if(!ig.game.collisionMap.getTile(x, y)){
					this.flip = !this.flip;
				}
				return this.flip ? -1:1;
			},
			handleMovementTrace: function(res){
				this.parent(res);
				if (res.collision.x){
					this.flip = !this.flip;
				}
				
			},
			check: function(other){
				other.receiveDamage( 1, this );
				if(other.pos.y < this.pos.y && other.vel.y > 0){
					this.kill();
					other.vel.y = -300;
				}
		  },

		});
	});