import React, {Component} from "react";
import GameCard from './components/GameCards';
import vaultboy from './vaultboy.json';

class App extends Component {
  state = {
    vaultboy: vaultboy
  };


render() {
  return (
    <div>
  {this.state.vaultboy.map(vaultboy => (
    <GameCard
    id={vaultboy.id}
    name={vaultboy.name}
    image={vaultboy.image}
    />
  ))}
  </div>
  );
}
}
export default App;
