import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons:[
      { name: 'Max', age: 26},
      { name: 'Manu', age: 28},
      { name: 'Stephanie', age: 29},
    ],
    otherState: 'some other value'
  }


  switchNameHandler = (newName) => {
    this.setState({
      persons:[
        { name: newName, age: 26},
        { name: 'Manu', age: 28},
        { name: 'Stephanie', age: 27},
      ]
    })
  }

  nameChangedHandler = (e) => {
    this.setState({
      persons:[
        { name: 'Max', age: 26},
        { name: e.target.value, age: 28},
        { name: 'Stephanie', age: 27},
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={ () => this.switchNameHandler('Maxamilian!!') }>Switch Name</button>
        <Person click={this.switchNameHandler} name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person click={this.switchNameHandler} changed={this.nameChangedHandler} name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: racing</Person>
        <Person click={this.switchNameHandler.bind(this, 'Max!')} name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;


// OG HARDCODED PROPS
// <Person name='Max' age='26' />
// <Person name='Manu' age='28' >My Hobbies: racing</Person>
// <Person name='Stephanie' age='29' />


// Using React HOOKS //
// import React, { useState } from 'react'; // HOOKS
//
// const app = (props) => {
//
//   // useState - Allows us to use state managment to functional components - can have as many as you want/need
//   const [ personsState, setPersonsState ] = useState({ // DESTRUCTURING -
//       persons:[
//         { name: 'Max', age: 26},
//         { name: 'Manu', age: 28},
//         { name: 'Stephanie', age: 29},
//       ],
//       otherState: 'some other value'
//     });
//
//   const [ otherState, setOtherState ] = useState('some other value')
//   console.log(personsState, otherState);
//
//
//   const switchNameHandler = () => {
//     setPersonsState({
//       persons:[
//         { name: 'Maxamilian', age: 26},
//         { name: 'Manu', age: 28},
//         { name: 'Stephanie', age: 27},
//       ],
//       otherState:personsState.otherState // have to manually merge states
//     })
//   }
//
//   return (
//     <div className="App">
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: racing</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );
// }
//
// export default app;
// HOOKS //
