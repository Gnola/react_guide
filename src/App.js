import React, { Component } from 'react';

// COMPONENTS
  import Person from './Person/Person';

// STYLING
  // import './App.css'; // Using OG CSS
  // import Radium, { StyleRoot } from 'radium'; // Using RADIUM
  // import styled from 'styled-components'; // Using STYLED COMPONENTS
  import classes from './App.css'; // Using CSS CLASSES

    // STYLED COMPONENTS
    // const StyledButton = styled.button`
    //   background-color: ${props => props.alt ? 'red' : 'green'};
    //   color: white;
    //   font: inherit;
    //   border: 1px solid blue;
    //   padding: 8px;
    //   cursor: pointer;
    //
    //   &:hover{
    //     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    //     color: black;
    //   }
    // `
    // <StyledButton alt={this.state.showPersons} onClick={ this.togglePersonsHandler }>Toggle Persons</StyledButton>


// CLASS COMPONENT //
class App extends Component {
  state = {
    persons:[
      { id: 'asdas', name: 'Max', age: 26},
      { id: 'sdfse', name: 'Manu', age: 28},
      { id: 'frgrs', name: 'Stephanie', age: 29},
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // Show Persons
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons:[
  //       { name: newName, age: 26},
  //       { name: 'Manu', age: 28},
  //       { name: 'Stephanie', age: 27},
  //     ]
  //   })
  // }
  //
  // OG nameChangedHandler
  // nameChangedHandler = (e) => {
  //   this.setState({
  //     persons:[
  //       { name: 'Max', age: 26},
  //       { name: e.target.value, age: 28},
  //       { name: 'Stephanie', age: 27},
  //     ]
  //   })
  // }

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id
    })
    const person = {...this.state.persons[personIndex]}  // create a new person with the values of the person that matched the id above
    person.name = e.target.value; // then set the name of that new person as the value of what was typed
    const persons = [...this.state.persons]  // then create a new array of original state array of persons
    persons[personIndex] = person  // then add the updatedPerson into the person array at the original index
    this.setState({
      persons:persons
    })
  }

  // DELETE People
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  render() {

    // OG Syle for button
    // const style = {
    //   backgroundColor:'green',
    //   color:'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover':{
    //     backgroundColor: 'lightgreen',
    //     color:'black'
    //   }
    // }
    // <button style={style} onClick={ this.togglePersonsHandler }>Toggle Persons</button>

    // Vanilla JS Conditional Rendering
    let persons = null; // default
    // let btnClass = [classes.Button]
    let btnClass = '' // Using CSS CLASSES
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(e) => this.nameChangedHandler(e, person.id)}/>
          })}
        </div>
      );
      // OG conitional button CSS
      // style.backgroundColor = 'red' // dynamically set CSS of button
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color:'black'
      // }
      // btnClass.push(classes.Red)
      btnClass = classes.Red // Using CSS CLASSES
    }

    // DYNAMIC CLASSES
    // let classes = ['red', 'bold'].join(' ');
    const assignedClasses = []
    if (this.state.persons.length <= 2) {
      // assignedClasses.push('red')
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <=1) {
      // assignedClasses.push('bold')
      assignedClasses.push(classes.bold)
    }


    return (
        <div className={classes.App}>
          <h1>Hi! I'm a React App</h1>
          <p className={assignedClasses.join(' ')} >This is working</p>
          <button className={btnClass} onClick={ this.togglePersonsHandler }>Toggle Persons</button>
          { persons }
        </div>
    );
  }
}

export default App;
// export default Radium(App);


// OG HARDCODED PROPS
// <button style={style} onClick={ () => this.switchNameHandler('Maxamilian!!') }>Switch Name</button>
// <Person name='Max' age='26' />
// <Person name='Manu' age='28' >My Hobbies: racing</Person>
// <Person name='Stephanie' age='29' />


// Ternary Rendering
// <div className="App">
//   <button style={style} onClick={ this.togglePersonsHandler }>Toggle Persons</button>
//   {
//     this.state.showPersons ?
//       <div>
//         <Person click={this.switchNameHandler} name={this.state.persons[0].name} age={this.state.persons[0].age} />
//         <Person click={this.switchNameHandler} changed={this.nameChangedHandler} name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: racing</Person>
//         <Person click={this.switchNameHandler.bind(this, 'Max!')} name={this.state.persons[2].name} age={this.state.persons[2].age} />
//       </div>
//       :
//       null
//   }
// </div>




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
