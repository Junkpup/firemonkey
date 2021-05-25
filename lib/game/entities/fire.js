	ig.module (
		'game.entities.fire'
	)
	.requires(
		'impact.entity'
	)
	.defines(function(){
		EntityFire = ig.Entity.extend({
			size: {x: 32, y:32},
			flip: false,
			gravityFactor: 0,
			checkAgainst: ig.Entity.TYPE.A,
			animSheet: new ig.AnimationSheet('media/fire.png', 32, 32),
			init: function(x,y) {
				this.parent(x,y);
				this.addAnim('blaze', 0.3, [0,1,2,3]);
			},
			check: function(other){
				if (ig.input.state('destroy') && ig.game.bucket_numbers>0){
					this.kill();
					ig.game.bucket_picked = false;
					ig.game.bucket_numbers-=1;
					ig.game.score_points+=5;
				}
			}
		});
	});