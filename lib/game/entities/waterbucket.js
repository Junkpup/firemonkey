	ig.module (
		'game.entities.waterbucket'
	)
	.requires(
		'impact.entity'
	)
	.defines(function(){
		EntityWaterbucket = ig.Entity.extend({
			size: {x: 13, y:15},
			flip: false,
			gravityFactor: 0,
			checkAgainst: ig.Entity.TYPE.A,
			animSheet: new ig.AnimationSheet('media/bucket.png', 13, 15),
			init: function(x,y) {
				this.parent(x,y);
				this.addAnim('normal', 0.3, [0]);
			},
			check: function(other){
				this.kill();
				ig.game.bucket_picked = true;
				ig.game.bucket_numbers+=1;
			}
		});
	});