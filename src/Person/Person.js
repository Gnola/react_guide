import React from 'react';

// STYLING
// import './Person.css'; // Using OG CSS
import classes from './Person.css'; // Using CSS CLASSES


// FUNCTIONAL COMPONENT //
const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I'm {props.name} and I am {props.age}</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name}/>
    </div>
  )
}


export default person;
