	ig.module (
		'game.entities.machine'
	)
	.requires(
		'impact.entity'
	)
	.defines(function(){
		 EntityMachine= ig.Entity.extend({
		 size: {x: 16, y: 16},
		 checkAgainst: ig.Entity.TYPE.A,
		 animSheet: new ig.AnimationSheet('media/player.png', 16, 16),
		 update: function(){},
		 init: function(x,y){
			 this.parent(x, y);
		 },
		 check: function(other){
			 if (ig.input.state('destroy')){
				 this.kill();
				 ig.game.score_points+=10;
			 }
		  }
		});
	});
 