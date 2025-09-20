import React, { Component } from "react";
import Home from "./Home";
import SignIn from "./SignIn";

// একটি component folder তৈরি করো। যার ভেতরে দুইটা page থাকবে।
// class component file এর ভেতরে construction function বানাও।
//  construction function এ যেকোন একটি পেইজ render করো।
// তিনটি পদ্ধতিতে render করে দেখাও.
// (if/else),
// ternary oparator,
// short cercit

// Example 1: (if/else)
// export default class Index extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isSignUp: true,
//     };
//   }

//   render() {
//     if (this.state.isSignUp) {
//       return <SignIn />;
//     } else {
//       return <Home />;
//     }
//   }
// }

// Example 2: (Elements oparaton)
// export default class Index extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isSignUp: true,
//     };
//   }

//   render() {
//     const {isSignUp} = this.state //destructure
//     let elements;

//     if (isSignUp) {
//       elements = <SignIn />;
//     } else {
//      elements = <Home />;
//     }
//     return(
//         <>
//         {elements}
//         </>
//     )
//   }
// }

// Example 3: (ternery oparaton)
// export default class Index extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isSignUp: true,
//     };
//   }

//   render() {
//     const { isSignUp } = this.state; //destructure

//     return <>{isSignUp ? <SignIn /> : <Home />}</>;
//   }
// }

// Example 4: (Logiacal && )
export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignUp: true,
    };
  }

  render() {
    const { isSignUp } = this.state; //destructure
    
    
    return <>{isSignUp && <SignIn /> }</>;
  }
}
