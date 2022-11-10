var Ball, database;
var position;


function setup(){

  console.log(database);
  createCanvas(500,500);
  database=firebase.database()
  Ball = createSprite(250,250,10,10);
  Ball.shapeColor = "red";
  var locnode=database.ref("ball/position")
  locnode.on("value",readOp,showerr)
}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

function writePosition(x,y){
 database.ref("ball/position").set({
  X:Ball.x+x,
  Y:Ball.y+y
 })
}

function readOp(data){
 position=data.val()
 Ball.x=position.X
 Ball.y=position.Y
}

function showerr(){
  console.log("hello,welcome to my first database")
}
