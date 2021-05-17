import React, {Component} from "react";
import GameCard from './components/GameCards';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import TitleCard from './components/TitleCard';
import vaultboy from './vaultboy.json';

class App extends Component {
  state = {
    vaultboy: vaultboy
  };


render() {
  return (
    <Wrapper>
    <Header></Header>
    <TitleCard></TitleCard>
  {this.state.vaultboy.map(vaultboy => (
    <GameCard
    id={vaultboy.id}
    name={vaultboy.name}
    image={vaultboy.image}
    />
  ))}
  </Wrapper>
  );
}
}
export default App;
