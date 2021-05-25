ig.module(
        'game.entities.newlevel'
    )
.requires(
        'impact.entity'
    )
.defines (function() {
        EntityNewlevel = ig.Entity.extend({
			_wmDrawBox: true,
			_wmBoxColor: 'rgba(0, 0, 255, 0.7)',
			size: {x: 32, y: 32},
			level: null,
			checkAgainst: ig.Entity.TYPE.A,
			animSheet: new ig.AnimationSheet('media/portalRings2.png', 32, 32),
			init: function(x,y,settings) {
					this.parent(x, y, settings);
					this.addAnim('exit', 0.4, [0,1,2,3,4]);
				},
			update: function(){},
			check: function( other ) {
						if(other instanceof EntityPlayer){
							if( this.level ) {
								var levelName = this.level.replace(/^(Level)?(\w)(\w*)/, function( m, l, a, b ) {
								return a.toUpperCase() + b;
								
							});
								
									ig.game.loadLevelDeferred( ig.global['Level'+levelName] );
						
					}
				}
			}
        });
    });