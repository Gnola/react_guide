import React, { Component } from 'react';

// COMPONENTS //
import Person from './Person/Person';

// STYLING //
// import './App.css'; // Using OG CSS
import classes from './App.css'; // Using CSS CLASSES


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

  // TOGGLE ALL PEOPLE
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  // CHANGE NAME
  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex((p) => { return p.id === id}) // find person clicked on by passing in their id
    const person = {...this.state.persons[personIndex]}  // create a new person object with the values of the person that matched the id above
    person.name = e.target.value; // then set the name of that new person as the value of what was typed
    const persons = [...this.state.persons]  // then create a new array of original state array of persons
    persons[personIndex] = person  // then add the updatedPerson into the person array at the original index
    this.setState({ persons:persons }) // then set state
  }

  // DELETE PERSON
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons] // create new array from state
    persons.splice(personIndex, 1); // manipulate that new array
    this.setState({persons:persons}); // then set state with new array
  }

  render() {

    // Conditional Rendering w/ Vanilla JS
    let persons = null; // default
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
      btnClass = classes.Red // Using CSS CLASSES
    }

    // DYNAMIC CLASSES
    const assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <=1) {
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
