// обозначаем контекст

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

// рисуем круг
var circle = function(x,y, rad, isFill) {
   ctx.beginPath();
   ctx.arc(x,y, rad, 0, 2 * Math.PI, false);
   if(isFill) {
      ctx.fill()
   }
   else {
      ctx.stroke();
   }
}

// рисуем сетку 
var blockSize = 10; 
var widthBlocks = width/blockSize;
var heightBlocks = height/blockSize;

var drawBorder = function() {
   ctx.fillStyle = 'Gray';
   ctx.fillRect(0,0, width, blockSize);

   ctx.fillRect(0,0,blockSize, height-10);
 
   ctx.fillRect(0, height-blockSize, width-10, blockSize);

   ctx.fillRect(width-blockSize, blockSize, blockSize, height-10);
};

// создаем конструктор 

var Block = function (col, row) {
   this.col = col;
   this.row = row;
}

Block.prototype.drawBlock = function(color) {
   var x = this.col * blockSize;
   var y = this.row * blockSize;
   ctx.fillStyle = color;
   ctx.fillRect(x,y,blockSize,blockSize)
}

var grid = function(){
   
   for (let i = 50; i <= width; i=i+50) {
      ctx.font = '8px Courier';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.fillText(`${i/10}`, blockSize+i, blockSize);
      ctx.fillText(`${i/10}`, width-10, blockSize+i);
      
   }
}

var Wall = function() {
this.segments = [
   new Block(6,6),
   new Block(7,6),
   new Block(8,6),
   new Block(8,7),
   new Block(8,8),
   new Block(9,8)
];
};



Wall.prototype.draw = function() {
   for (let i = 0; i < this.segments.length; i++) {
      this.segments[i].drawBlock('gray');
      
   }
}


var topWall = new Wall; 


topWall.segments = [
   new Block(35,1),
   new Block(35,2),
   new Block(35,3),
   new Block(35,4),
   new Block(35,5),
   new Block(35,6),
   new Block(35,7),
   new Block(35,8),
   new Block(35,9),
   new Block(35,10),
   new Block(35,11),
   new Block(35,12),
   new Block(35,13)
];

var botWall = new Wall;
botWall.segments = [
   new Block(20,50),
   new Block(20,49),
   new Block(20,48),
   new Block(20,47),
   new Block(20,46),
   new Block(20,45),
   new Block(20,44),
   new Block(20,43),
   new Block(20,42),
   new Block(20,41),
   new Block(20,40),
   new Block(20,39),
   new Block(20,38),
   new Block(19,38),
   new Block(18,38),
   new Block(17,38),
   new Block(16,38),
   new Block(15,38),
   new Block(14,38),
   new Block(13,38),
   new Block(12,38),
   new Block(11,38),
   new Block(10,38),
   new Block(9,38),
];

var longWall = new Wall;
longWall.segments = [
   new Block(35,50),
   new Block(35,49),
   new Block(35,48),
   new Block(35,47),
   new Block(35,46),
   new Block(35,45),
   new Block(35,44),
   new Block(35,43),
   new Block(35,42),
   new Block(35,41),
   new Block(35,40),
   new Block(35,39),
   new Block(35,38),
   new Block(35,37),
   new Block(35,36),
   new Block(35,35),
   new Block(35,34),
   new Block(35,33),
   new Block(35,32),
   new Block(35,31),
   new Block(35,30),
   new Block(35,29),
   new Block(35,28),
   new Block(35,27),
   new Block(35,26),
   new Block(35,25),
   new Block(35,24),
   new Block(35,23),
   //left
   new Block(34,23),
   new Block(33,23),
   new Block(32,23),
   new Block(31,23),
   new Block(30,23),
   new Block(29,23),
   new Block(28,23),
   new Block(27,23),
   new Block(26,23),
   new Block(25,23),
   new Block(24,23),
   new Block(23,23),
   new Block(22,23),
   new Block(21,23),
   new Block(20,23),
   new Block(19,23),
   new Block(18,23),
   new Block(17,23),
   new Block(16,23),
   new Block(15,23),
   new Block(14,23),
   new Block(13,23),
   new Block(12,23),
   new Block(11,23),
   new Block(10,23),
   new Block(9,23),
   //top
   new Block(9,22),
   new Block(9,21),
   new Block(9,20),
   new Block(9,19),
   new Block(9,18),
   new Block(9,17),
   new Block(9,16),
   new Block(9,15),
   new Block(9,14),
   new Block(9,13),
   //right
   new Block(10,13),
   new Block(11,13),
   new Block(12,13),
   new Block(13,13),
   new Block(14,13),
   new Block(15,13),
   new Block(16,13),
   new Block(17,13),
   new Block(18,13),
   new Block(19,13),
   new Block(20,13),   
]

var drawEnter = function() {
   ctx.fillStyle = 'white';
   ctx.fillRect(210,height-blockSize, 140, blockSize);
   ctx.fillRect(110, 0, 130, blockSize)

};




topWall.draw();
botWall.draw();
longWall.draw();
drawBorder();
drawEnter();

