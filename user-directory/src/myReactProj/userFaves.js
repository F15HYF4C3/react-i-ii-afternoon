// // our project should...

// Use at least 3 different components, including at least 1 that holds and updates state.
// Allow users to navigate through all the user information from the array in data.js using the < Previous and Next > buttons. Include special handling for those buttons for the first and last users in the array to avoid errors.
// Display where in the array the current user is located (ex. 1/25)
// Match the layout and styling of the mockup as closely as possible.
// *Note: The Edit, Delete and New buttons are not required to get credit for this project. They are part of the Black Diamond if you finish the requirements early.

// Black Diamond
// After the < Previous and Next > buttons are functional, start working on Delete.
// After the Delete button is functional, start working on New. This will require a form for users to input new information. Focus on the functionality more than the styling.
// After the New button is functional, start working on Edit. This will also require a form for users to input updated information. Focus on the functionality more than the styling.
import React, { Component } from 'react';

class Comp1 extends Component {
    constructor(){
      super();
  
      this.state = {
        workerName: "",
       
        
      }
    }
    render() {
      return (
        <div className="App">
        <h1>Home</h1>
         
        </div>
      );
    }
  }
  
  export default Comp1;