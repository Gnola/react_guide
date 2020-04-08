import React, { Component } from 'react';

// COMPONENTS //
import Persons from '../components/Persons/Persons'; // Persons.js
import Cockpit from '../components/Cockpit/Cockpit'; // Cockpit.js

// STYLING //
import classes from './App.css'; // Using CSS CLASSES


// CLASS COMPONENT //
class App extends Component {
  constructor (props){
    super(props);
    console.log('app js constructor');
  }
  state = {
    persons:[
      { id: 'asdas', name: 'Max', age: 26},
      { id: 'sdfse', name: 'Manu', age: 28},
      { id: 'frgrs', name: 'Stephanie', age: 29},
    ],
    otherState: 'some other value',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('app js getDerivedStateFromProps', props);
    return state;
  }

  compnentWillMount(){
      console.log('app js compnentWillMount');
  }

  componentDidMount() {
    console.log('app js compnentDidMount');
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
    console.log('app js render');
    // Conditional Rendering w/ Vanilla JS
    let persons = null; // default
    if (this.state.showPersons) {
      persons = ( <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler}/>);
    }

    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler} title={this.props.appTitle}/>
        { persons }
      </div>
    );
  }
}

export default App;
