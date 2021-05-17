import React, {Component} from "react";
import GameCard from './components/GameCards';
import Wrapper from './components/Wrapper';
import vaultboy from './vaultboy.json';

class App extends Component {
  state = {
    vaultboy: vaultboy
  };


render() {
  return (
    <Wrapper>
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
