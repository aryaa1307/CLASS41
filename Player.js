class Player
{
   constructor()
   {
     this.index= null;
     this.distance=0;
     this.name=null;
     this.rank=null;
   }
   
   getCarsatend()
   {
      var score= db.ref('Carsatend').on("value",(data)=>{
         this.rank= data.val();
      })
   }

   static updateCarsatend(rank)
   {
       db.ref('/').update ({
          Carsatend:rank
       })
   }

   getCount()
   {
      var playerCountref= db.ref('playerCount') 
      playerCountref.on("value",function(data){
          playerCount=data.val()
      })
   }
   updateCount(count)
   {
    db.ref('/').update({
       playerCount:count  
    })
   }

   update()
   {
      var playerIndex="players/player"+this.index
     db.ref(playerIndex).set({
         name:this.name, 
         distance:this.distance
     })
   }
  static getPlayerinfo()    //static function is common for all objects ,static function is called by class name
   {
      var playerinfo=db.ref('players')
      playerinfo.on("value",(data)=>{
         allplayers= data.val()
      }
      )
   } 

}