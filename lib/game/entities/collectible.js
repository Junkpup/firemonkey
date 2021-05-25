ig.module(
'game.entities.collectible'
)
.requires(
'impact.entity'
)
.defines(function() {

		EntityCollectible = ig.Entity.extend({
			
				size: {x:15, y: 12.5},
				flip: false,
				gravityFactor: 0,
				animSheet: new ig.AnimationSheet('media/gem.png', 15, 12.5),
				type: ig.Entity.TYPE.B,
				checkAgainst: ig.Entity.TYPE.A,
		
		init: function (x, y){
				this.parent(x, y);
				this.addAnim('spin', 0.2, [0,1,2,3,4]);
				this.addAnim('feedback', 0.1, [0,1,2,3,4]);
	    
		},
		check: function (other){
				this.kill();
				ig.game.score_points+=1;
			}
		});
		

	});