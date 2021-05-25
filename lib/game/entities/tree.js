	ig.module (
		'game.entities.tree'
	)
	.requires(
		'impact.entity'
	)
	.defines(function(){
		EntityTree = ig.Entity.extend({
			size: {x:44, y:50},
			flip: false,
			gravityFactor: 0,
			animSheet: new ig.AnimationSheet('media/tree.png', 44, 50),
			init: function(x,y){
				this.parent(x,y);
				this.addAnim('tree', 1, [0]);
			}
		});
	});