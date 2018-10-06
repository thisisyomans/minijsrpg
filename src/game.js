Game = {
	//grid size + subsidiary tile sizes
	map_grid: {
		width:  24,
		height: 16,
		tile: {
			width:  16,
			height: 16
		}
	},

	//game screen total width
	width: function() {
		return this.map_grid.width * this.map_grid.tile.width;
	},

	//game screen total height
	height: function() {
		return this.map_grid.height * this.map_grid.tile.height;
	},

	start: function() {
		Crafty.init(Game.width(), Game.height());
		Crafty.background('rgb(249, 223, 125)');

		//tree at every edge square
		for (var x = 0; x < Game.map_grid.width; x++) {
			for (var y = 0; y < Game.map_grid.height; y++) {
				var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;

				if(at_edge){
					//place tree at current tile
					Crafty.e('2D, Canvas, Color')
					.attr({
						x: x * Game.map_grid.tile.width,
						y: y * Game.map_grid.tile.height,
						w: Game.map_grid.tile.width,
						h: Game.map_grid.tile.height
					})
					.color('rgb(20, 125, 40)');
				} else if (Math.random() < 0.06){
					//place bush at current tile
                                        Crafty.e('2D, Canvas, Color')
                                        .attr({
                                                x: x * Game.map_grid.tile.width,
                                                y: y * Game.map_grid.tile.height,
                                                w: Game.map_grid.tile.width,
                                                h: Game.map_grid.tile.height
                                        })
                                        .color('rgb(20, 125, 40)');
				}
			}
		}
	}
}
