ig.module(
	'impact.loader'
)
.requires(
	'impact.image',
	'impact.font',
	'impact.sound'
)
.defines(function(){ "use strict";

ig.Loader = ig.Class.extend({
	resources: [],
	
	gameClass: null,
	status: 0,
	done: false,
	font: new ig.Font( 'media/04b03.font.png' ),
	_unloaded: [],
	_drawStatus: 0,
	_intervalId: 0,
	_loadCallbackBound: null,
	
	
	init: function( gameClass, resources ) {
		this.gameClass = gameClass;
		this.resources = resources;
		this._loadCallbackBound = this._loadCallback.bind(this);
		
		for( var i = 0; i < this.resources.length; i++ ) {
			this._unloaded.push( this.resources[i].path );
		}
	},
	
	
	load: function() {
		ig.system.clear( '#000' );
		
		if( !this.resources.length ) {
			this.end();
			return;
		}

		for( var i = 0; i < this.resources.length; i++ ) {
			this.loadResource( this.resources[i] );
		}
		this._intervalId = setInterval( this.draw.bind(this), 16 );
	},
	
	
	loadResource: function( res ) {
		res.load( this._loadCallbackBound );
	},
	
	
	end: function() {
		if( this.done ) { return; }
		
		this.done = true;
		clearInterval( this._intervalId );
		ig.system.setGame( this.gameClass );
	},
	
	
	draw: function() {
		var w = ig.system.realWidth;
        var h = ig.system.realHeight;
        ig.system.context.fillStyle = '#000000';
        ig.system.context.fillRect( 0, 0, w, h );

        var percentage = (this.status * 100).round() + '%';
        ig.system.context.fillStyle = '#ffffff';
        ig.system.context.fillText( percentage, w/2,  h/2 );
		ig.system.context.font = '30px "Press Start 2P" ';
		ig.system.context.textAlign = 'center'; 
	},
	
	
	_loadCallback: function( path, status ) {
		if( status ) {
			this._unloaded.erase( path );
		}
		else {
			throw( 'Failed to load resource: ' + path );
		}
		
		this.status = 1 - (this._unloaded.length / this.resources.length);
		if( this._unloaded.length == 0 ) { // all done?
			setTimeout( this.end.bind(this), 1000 );
		}
	}
});

});