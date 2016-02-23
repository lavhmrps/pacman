var 
s_map,
s_pacman,
s_blinky,	// red
s_pinky,	// pink
s_inky,		// blue
s_clyde,	// yellow
s_scaredGhost,
s_eyes,
s_fruit,
s_dot,
s_bigDot

;

function Sprite(img,x,y,w,h){
	this.img= img;
	this.x=x;
	this.y=y;
	this.w=w;
	this.h=h;
}
Sprite.prototype.draw = function(ctx, x, y) {
  
  ctx.drawImage(this.img, this.x, this.y, this.w, this.h,
    x, y, this.w, this.h);
};




function initSprites(img){
	s_map = new Sprite(img, 0, 0, 450, 503);
	s_pacman = {
		left:	[
					new Sprite(img,465,317,28,28),  // facing left, big mouth
					new Sprite(img,495,317,28,28)  // left small
				],
				
		round: 	[
					new Sprite(img,527,317,28,28),
					new Sprite(img,527,317,28,28)	
				],
		right:	[
					new Sprite(img,559,317,28,28),	// right small
					new Sprite(img,593,317,28,28)	// right big
				],
		up:		[
					new Sprite(img,527,255,28,28), 	// up big
					new Sprite(img,527,285,28,28) 	// up small
				],
		down:	[
					new Sprite(img,527,349,28,28), 	// down small
					new Sprite(img,527,380,28,28) 	// down big
				]	
	};
	s_blinky = 
		[
			new Sprite(img, 236, 58, 14, 14), // facing left
			new Sprite(img, 253, 58, 14, 14), // facing up
			new Sprite(img, 270, 58, 14, 14), // facing down
			new Sprite(img, 287, 58, 14, 14) // facing right
		];

}
/*
s_pacman = {
		left:	[
					new Sprite(img,236,163,13,13),  // facing left, big mouth
					new Sprite(img,251,163,13,13)  // left small
				],
				
		round: 	new Sprite(img,267,163,13,13),	// round

		right:	[
					new Sprite(img,283,163,13,13),	// right small
					new Sprite(img,300,163,13,13)	// right big
				],
		up:		[
					new Sprite(img,267,132,13,13), 	// up big
					new Sprite(267,147,13,13) 	// up small
				],
		down:	[
					new Sprite(img,267,179,13,13), 	// down small
					new Sprite(img,267,195,13,13) 	// down big
				]	
	};
	s_blinky = 
		[
			new Sprite(img, 236, 58, 14, 14), // facing left
			new Sprite(img, 253, 58, 14, 14), // facing up
			new Sprite(img, 270, 58, 14, 14), // facing down
			new Sprite(img, 287, 58, 14, 14) // facing right
		];
*/