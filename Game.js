class Game
{
   constructor()
   {
    
   }
   
   getState()
   {
      var gameStateref= db.ref('gameState') 
      gameStateref.on("value",function(data){
          gameState=data.val()
      })
   }
   update(state)
   {
     db.ref('/').update({
         gameState:state
     })
   }
   async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await db.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    c1= createSprite(100,200);
    c1.addImage(ci1)
    c2= createSprite(300,200)
    c2.addImage(ci2)
    c3= createSprite(500,200)
    c3.addImage(ci3)
    c4= createSprite(700,200)
    c4.addImage(ci4)
    //    0  1   2  3
    cars=[c1,c2,c3,c4]
  }


    play()
    {
       form.hide()
       //text('Ready steady go!',150,100) 
       Player.getPlayerinfo()
       player. getCarsatend()
       

       if (allplayers !==undefined)
       {
           background(rgb(198,135,105))
           image(track,0,-displayHeight*4,displayWidth,displayHeight*6)
           var x=170
           var index=0
           var y
           for (var plr in allplayers)  //allplayers=4players =player1
           {
              index= index+1
              x= x+200;
              y=displayHeight-allplayers[plr].distance
              cars[index-1].x=x
              cars[index-1].y=y
              if (index===player.index)  
              {
                 cars[index-1].shapeColor="red"
                 fill("white")
                 ellipse(x,y,55,55)
                 camera.position.x= displayWidth/2
                 camera.position.y= cars[index-1].y


              }
   
           }
       }
       if (keyIsDown(UP_ARROW) && player.index!==null)
       {
          player.distance+=50;
          player.update() 
       }
       if(player.distance>3500)
       {
         gameState=2;
         player.rank= player.rank+1
         Player.updateCarsatend(player.rank)
       }
       drawSprites()
    }

   end()
   {
     console.log("Congratulations to the winner!")  
     console.log(player.rank)
   }
}