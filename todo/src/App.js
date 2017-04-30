import React from 'react';
//
// class App extends React.Component {// state full component
//
// constructor() {
//   super(); // give 'this' the context of the current component not parent
//
//   this.state = {
//     txt: 'some'
//   }
//
// }
//
// update( e ) {
//   this.setState({txt: e.target.value})
// }
//   render() {//always have a render
//     return (
//     <div>
//       <Wig update={this.update.bind(this)}/>
//       <h1> {this.state.txt}</h1>
//
//     </div>
//     )
//   }
// }
//
// // App.propTypes = {// is to tell react which passed dow variables are needed
// //
// // }
// //props are used to passed down as static values which cannot be changed by the component --maybe different with redux
// //while state can be changed
// const Wig = (props) =>
//   <input onChange={props.update}/>// chile component can change the state of parent
//
// export default App;
//
// props.children allows inner through elemnt to pass through reat
//
// const Button = (props) => <button>{props.children}</button>
//
// text(props, propName, component){
//    if(!(propName in props)){
//      return new Error(`missing ${propName}`)
//    }
//    if(props[propName].length < 6){
//      return new Error(`${propName} was too short`)
//    }
//   }
//
// class App extends React.component {
//   constructor() {
//     super();
//
//     this.state = {
//       currentEvent: '----'
//       this.update = this.update.bind(this)
//     }
//   }
// }

import Reat from 'react';

class App extends React.Component {

  render() {
    return (
      <div>
        <input
          type='text'
          onChange={this.update.bind(this)}
          /> this.state.a
    )
  }
}


/ refs return a node of the dom elem which you can access
