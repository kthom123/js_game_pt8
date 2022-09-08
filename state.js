export const states = {
  STANDING_LEFT: 0,
  STANDING_RIGHT: 1,
}

class State {
  constructor(state){
    this.state = state;
  }
}

class StandingLeft extends State {
  constructor(player){
    super('STANDING LEFT');
    this.player = player;
  }
  enter(){

  }
  handleInput(input){

  }
}

class StandingRight extends State {
  constructor(player){
    super('STANDING RIGHT');
    this.player = player;
  }
  enter(){

  }
  handleInput(input){

  }
}
