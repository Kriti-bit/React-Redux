import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      {name :'abc' , age : 15 , belt : 'black' , id:1},
      {name :'def' , age : 30 , belt : 'green' , id:2},
      {name :'ghi' , age : 35 , belt : 'purple' , id:3}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas , ninja]; //If we useninjas: this.state.ninjas.push(ninja) the elements stored in the array previously get deleted
    this.setState({
      ninjas : ninjas
    })
  }
  render () {
  return (
    <div className="App">
              <h1>My First React App</h1>
              <p>Welcome</p>
              <Ninjas ninjas = { this.state.ninjas } />
              <AddNinja addNinja = { this.addNinja } />
    </div>
  );
}
}

export default App;
