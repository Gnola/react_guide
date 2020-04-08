import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

  // DYNAMIC CLASSES for Paragraph

  let btnClass = '' // Using CSS CLASSES
  if (props.showPersons) {
    btnClass = classes.Red // DYNAMIC CLASSES Using CSS MODULES for Button
  }

  const assignedClasses = []

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.persons.length <=1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')} >This is working</p>
      <button className={btnClass} onClick={ props.clicked }>Toggle Persons</button>
    </div>
  )
}

export default cockpit;
