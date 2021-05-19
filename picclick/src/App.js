import React, {Component} from "react";
import GameCard from './components/GameCards';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import TitleCard from './components/TitleCard';
import Footer from './components/Footer';
import vaultboy from './vaultboy.json';

class App extends Component {
  state = {
    vaultboy: vaultboy,
    message:"To secure your spot in Vault 108, click on all the images without any repeats!",
    currScore: 0,
    highScore: 0,
    clicked: vaultboy,
    unclicked: vaultboy
  };

  shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--)
    {
      let rand = Math.floor(Math.random() * (i + 1));
      [array[i], array[rand]] = [array[rand], array[i]]
    }
  }

  verifyClick = (name) => {
    const lookup = this.state.unclicked.find((vaultboy) => vaultboy.name === name);
    if (lookup === undefined){
      this.setState({
        highScore: this.state.currScore > this.state.highScore ? this.state.currScore : this.state.highScore,
        currScore: 0,
        message:"u suck",
        unclicked: vaultboy
      })
    } else {
      const unused = this.state.unclicked.filter((vaultboy) => vaultboy.name !== name)
      this.setState({
        currScore: this.state.currScore + 1,
        message:"nice",
        unclicked: unused
      })
      this.shuffleCards(vaultboy);
    }
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
    key = {vaultboy.id}
    id={vaultboy.id}
    name={vaultboy.name}
    image={vaultboy.image}
    verifyClick = {this.verifyClick}
    />
  ))}
  <Footer/>
  </Wrapper>
  );
}
}
export default App;
