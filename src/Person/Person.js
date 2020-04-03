import React from 'react';

// FUNCTIONAL COMPONENT - StateLESS Component
const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>I'm {props.name} and I am {props.age}</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name}/>
    </div>
  )
}


export default person;


// class Person extends Component {
//   render() {
//     return (
//         <div>
//           return <p>My name is {this.props}</p>
//         </div>
//     );
//   }
// }

// {props.name} - Accesses actual props
// <p>{props.children}</p>  - Accesses whatever is BETWEEN HTML tags
