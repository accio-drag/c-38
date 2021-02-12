class Form {
  constructor() {
    this.title=createElement('h2');
    this.input=createInput('name');
    this.button=createButton('play');
    this.greeting=createElement('h3');
    this.reset=createButton('reset');
  }
hide(){
  this.greeting.hide();
  this.button.hide();
  this.input.hide();
 

}
  display(){
   
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50 , 0);
   this.reset.position(displayWidth-100,50);
    
    this.input.position(displayWidth/2 - 40, displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 20, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);
     
      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2 - 70, displayHeight/4)
    });
    this.reset.mousePressed(()=>{
  game.update(0)
  player.updateCount(0);

    })

  }
}