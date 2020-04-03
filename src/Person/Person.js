import React from 'react';
// import './Person.css'; // Import CSS
// import Radium from 'radium';
// import styled from 'styled-components';
import classes from './Person.css';


// const StyledDiv = styled.div`
//       width: 60%;
//       margin: 16px auto;
//       border: 1px solid #eee;
//       box-shadow: 0 2px 3px #ccc;
//       padding: 16px;
//       text-align: center;
//
//       @media (min-width: 500px) {
//         width: 450px;
//       }`


// FUNCTIONAL COMPONENT - StateLESS Component
const person = (props) => {
  // const style = {
  //   '@media (min-width: 500px)':{
  //     width: '450px'
  //   }
  // }
  return (
    // <div className='Person' style={style}>
    <div className={classes.Person}>
      <p onClick={props.click}>I'm {props.name} and I am {props.age}</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name}/>
    </div>
  )
}


export default person;
// export default Radium(person);


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
