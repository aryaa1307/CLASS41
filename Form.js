class Form
{
   constructor()
   {
    this.input= createInput("name")
    this.button= createButton('Play')
    this.greetings= createElement('h3')
    this.reset= createButton('RESET')

   } 

   hide()
   {
     this.input.hide()
     this.button.hide()
     this.greetings.hide()
   }

   display()    //substituted by the call
   {
     var title=  createElement('h1')
     title.html("Car Racing")
     title.position(displayWidth/2,0)
     
     this.reset.position(displayWidth-100,55)
     this.input.position(displayWidth/2-20,displayHeight/4)
     this.button.position(displayWidth/2-20,displayHeight/4+30)
     this.button.mousePressed(()=>   //refer the function
     {
       this.input.hide()
       this.button.hide()
       player.name= this.input.value()
       playerCount= playerCount+1 
       player.index= playerCount
       player.update()
       player.updateCount(playerCount)
       this.greetings.html('Hello '+player.name)
       this.greetings.position(displayWidth/2,displayHeight/6)
     }
     )

     this.reset.mousePressed(()=>
     {
       game.update(0)
       player.updateCount(0)
     })


   }
   
}