 function fun(){
 
function init(){
    canvas=document.getElementById("mycanvas");
    W=canvas.width=700;
    H=canvas.height=730;
   game_over=false;
   score=0;
    pen=canvas.getContext('2d');
    cs=32;

    food = getRandomFood();
   

    food_img=new Image();
    food_img.src="apple.png";
    food_img.alt="Apple";

    trophy = new Image();
    trophy.src="trophy.png";
    trophy.alt="Trophy";
    snake={
        init_len:5,
        color:"blue",
        cells:[],
        direction:"right",
        createSnake:function(){
            for(var i=this.init_len;i>0;i--){
                this.cells.push({x:i,y:0});
            }
},
drawSnake:function(){
    for(var i=0; i<this.cells.length;i++){
        pen.fillStyle="blue";
        pen.fillRect(this.cells[i].x*cs,this.cells[i].y*cs,cs-2,cs-2);
    }
},
 updateSnake:function(){

    var headX= this.cells[0].x;
    var headY= this.cells[0].y;
    if(headX==food.x && headY==food.y){
        var x = document.getElementById("myAudio2"); 
        x.play();
        food = getRandomFood();
        score++;
    }
    else {
        this.cells.pop();
    }

    var nextX,nextY;


    if(this.direction=="right"){
        nextX = headX+1;
        nextY = headY;

    }
    
    else if(this.direction=="left"){
        nextX = headX-1;
        nextY = headY;

    }
    else if(this.direction=="down"){
        nextX = headX;
        nextY = headY+1;

    }

    else if (this.direction=="up"){
        nextX = headX;
        nextY = headY-1;

    }



    this.cells.unshift({x:nextX,y:nextY});

    var last_x=Math.round(W/cs);
    var last_y=Math.round(H/cs);

    if(this.cells[0].y<0 || this.cells[0].x<0 || this.cells[0].x>last_x || this.cells[0].y>last_y ){  var x = document.getElementById("myAudio1"); 
    x.play();
    game_over=true;}
 }

    };

snake.createSnake();

}

function draw(){
    pen.clearRect(0,0,W,H);
    snake.drawSnake();
    pen.fillStyle=food.color;
    pen.drawImage(food_img,food.x*cs,food.y*cs,cs,cs);

    pen.drawImage(trophy,25,20,cs*1.2,cs*1.2)
    pen.fillStyle="maroon";
    pen.font = "30px Roboto";
    pen.fillText(score,35,39);
}





function update(){


    snake.updateSnake();
   function keyPressed(e){
        if(e.key=="ArrowRight"){
            var x = document.getElementById("myAudio3"); 
            x.play();
            snake.direction="right";
        }
        else if(e.key=="ArrowLeft"){
            var x = document.getElementById("myAudio3"); 
            x.play();
            snake.direction="left";
        }
        else if(e.key=="ArrowDown"){
            var x = document.getElementById("myAudio3"); 
            x.play();
            snake.direction="down";
        }
        else if(e.key=="ArrowUp"){
            var x = document.getElementById("myAudio3"); 
            x.play();
            snake.direction="up";
        }

   }
   
   document.addEventListener('keydown',keyPressed);
    
}


function getRandomFood(){
    var foodX= Math.round(Math.random()*(W-cs)/cs);
    var foodY= Math.round(Math.random()*(H-cs)/cs);

    var food={
        x:foodX,
        y:foodY,
        color:"red",
    }
    return food;


}

function gameLoop(){
   if(game_over==true){

      clearInterval(f);
      alert("GAME OVER");
    
    }
    draw();
    update();
}
init();
var f = setInterval(gameLoop,100);

 }
function gg(){
canvas=document.getElementById("mycanvas2");
pen=canvas.getContext('2d');
ru = new Image();
ru.src="rs.png";

pen.drawImage(ru,60,340,600,350);
}
function fun2(){
   
    gg();

}