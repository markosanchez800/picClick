import React, {Component} from "react";
import GameCard from './components/GameCards';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import TitleCard from './components/TitleCard';
import vaultboy from './vaultboy.json';

class App extends Component {
  state = {
    vaultboy: vaultboy,
    message:"To secure your spot in Vault 108, click on all the images without any repeats!",
    currScore: 0,
    highScore: 0
  };

  //fisher yates shuffle to randomize cards
  shuffleCards = array => {
    let oG;
    for (let i = array.length - 1; i > 0; i--)
    {
      let rand = Math.floor(Math.random() * (i + 1));
      oG = array[i];
      array[i] = array[rand];
      array[rand] = oG;
    }
    return array;
  }

  verifyClick = () => {
    this.shuffleCards(vaultboy);
  }

render() {
  return (
    <Wrapper> 
    <TitleCard></TitleCard>
    <Header
      message={this.state.message}
      currScore={this.state.currScore}
      highScore={this.state.highScore}
    />
  {this.state.vaultboy.map(vaultboy => (
    <GameCard
    id={vaultboy.id}
    name={vaultboy.name}
    image={vaultboy.image}
    onClick = {this.verifyClick}
    />
  ))}
  </Wrapper>
  );
}
}
export default App;
