var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

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

var gameOver = function() {
   ctx.clearRect(0,0,width,height);
   ctx.font = '60px Courier';
   ctx.fillStyle = 'red';
   ctx.textAlign = 'center';
   ctx.textBaseline = 'middle';
   ctx.fillText(`Конец игры`, width/2, height/2);
};

var gameWin = function() {
   ctx.clearRect(0,0,width,height);
   ctx.font = '60px Courier';
   ctx.fillStyle = 'green';
   ctx.textAlign = 'center';
   ctx.textBaseline = 'middle';
   ctx.fillText(`Малаца`, width/2, height/2);
}


var square = function(x,y) {
   ctx.fillRect(x,y,20,20)
}

var directions = {
   37: 'left',
   38: 'up',
   39: 'right',
   40: 'down'
};

var Pacan = function(x,y) {
   this.posX = x;
   this.posY = y;
}

Pacan.prototype.draw = function(color){
   ctx.fillStyle = color;
   square(this.posX,this.posY);

}
Pacan.prototype.equal = function (otherBlock) {
   return this.posX === otherBlock.posX && this.posY === otherBlock.posY;
   };
   
Pacan.prototype.checkCol = function(boy) {
   var leftCol = (boy.posX === 0);
   var topCol = (boy.posY === 0);
   var rightCol = (boy.posX === width-10);
   var botCol = (boy.posY === height-10);

   var wallCol = leftCol||rightCol||topCol||botCol;

   // for (let i = 0; i < wall.length; i++) {
   //    const element = array[i];
      
   // }

  return wallCol;

}


Pacan.prototype.move = function(direction) {
   if(direction === 'down') {
      ctx.clearRect(this.posX,this.posY,20,20);
      this.posY= this.posY + 10;
      this.draw('blue');
   } else if(direction === 'up') {
         ctx.clearRect(this.posX,this.posY,20,20);   
         this.posY= this.posY -10;
         this.draw('blue');
   } else if(direction === 'right') {
         ctx.clearRect(this.posX,this.posY,20,20);   
         this.posX= this.posX + 10;
         this.draw('blue');
   } else if(direction === 'left') {
         ctx.clearRect(this.posX,this.posY,20,20);
         this.posX= this.posX - 10;
         this.draw('blue');
      }
      if(this.checkCol(boy)){
         gameOver();
         return;
      }
      if(this.equal(exit.pos)) {
         gameWin();
      }
   }






$('body').keydown(function (event){
   var newDirection = directions[event.keyCode];
   if (newDirection !== undefined) {
      boy.move(newDirection);
   }
});

var Block = function (x,y) {
   this.x = x;
   this.y = y;
}
Block.prototype.drawBlock = function(color) {
   ctx.fillStyle = 'color';
   ctx.fillRect(this.x,this.y, 10,10);
}



var makeWall = function(brickCount, startX, startY,dir) {
   for (let i = 0; i < brickCount; i++) {
      if (dir === 'down') {
      var brick = new Block(startX,startY+(i*10));
      brick.drawBlock('gray')
      } else if (dir === 'up') {
         var brick = new Block(startX,startY-(i*10));
         brick.drawBlock('gray')
      } else if (dir === 'right') {
         var brick = new Block(startX+(i*10),startY);
         brick.drawBlock('gray')
      } else if (dir === 'left') {
         var brick = new Block(startX -(i*10),startY);
         brick.drawBlock('gray')
      }
      
   }
}
var drawBorder = function() {
   ctx.fillStyle = 'Gray';
   ctx.fillRect(0,0,width,10);
   ctx.fillRect(0, height-10, width, 10);
   ctx.fillRect(0, 0, 10, height);
   ctx.fillRect(width-10, 0, 10, height)
}


var wall = [
   makeWall(15,400,10,'down'),
   makeWall(15,250,height-10,'up'),
   makeWall(15,250,height-160,'left'),
   makeWall(25,400,height-10,'up'),
   makeWall(20,400,height-260,'left'),
   makeWall(10,200,height-260,'up'),
   makeWall(12,200,height-360,'right'),
   makeWall(20,100,10,'down'),
   makeWall(5,100,210,'left')

]

var Exit = function() {
   this.pos = new Block(20,20);
}

Exit.prototype.drawExit = function() {
   ctx.fillStyle = 'red';
   ctx.fillRect(this.pos.x,this.pos.y, 20,20);
}

 Exit.prototype.place = function() {
   var randomX = Math.floor(Math.random() * (width - 10)) + 10;
   var randomY = Math.floor(Math.random() * (height - 10)) + 10; 
   this.pos = new Block(randomX, randomY);
}

drawBorder();

var exit = new Exit();

exit.place();
exit.drawExit();


var boy = new Pacan(120,130);



boy.draw('blue');
