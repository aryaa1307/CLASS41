var db;
var gameState=0;
var playerCount, form, player, game, allplayers
var c1,c2,c3,c4,cars
var ci1, ci2,ci3,ci4,track,gi

function preload()
{
   track= loadImage("../images/track.png")
   ci1= loadImage("../images/car1.png")
   ci2= loadImage("../images/car2.png")
   ci3= loadImage("../images/car3.png")
   ci4= loadImage("../images/car4.png")
   gi= loadImage("../images/ground.png")
}

function setup(){
    //Creating database
    //.on : read/listen any change in database value
    //.set : to set value in db
    //.ref: refer the loc of database
    db=firebase.database()
    createCanvas(displayWidth-20,displayHeight-20);
    game= new Game()
    game.getState()
    game.start()

}

function draw()
{
   if(playerCount===4)
   {
      game.update(1)
   }

   if(gameState===1)
   {
     clear();
     game.play()  
   }

   if(gameState===2)
   {
     game.end();     
   }
}

    

