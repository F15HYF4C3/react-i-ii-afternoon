import React, { Component } from 'react';
import './App.css';
import './index.css';
import './index.js';
import data from './myReactProj/data';
// import data from './myReactProj/data.js';
// import serviceWorker from './serviceWorker';
// import Comp1 from './myReactProj/stateTrack.js'
// import Comp2 from './myReactProj/userStats.js/index.js'
// import Comp3 from './myReactProj/userFaves.js/index.js'

class App extends Component {
  constructor(){
    super();

    this.state = {
      workerCard: data
      
    }
  }
  // handleClick(previous, next){
  //   this.setState({workerCard: data})
  //  }
  render() {
    // let workerList = this.state.workerCard.map((element, index)=>{
    //   return <h1 key={index}>{element}></h1>
    // })
    return (
      <div className="App"> 
      <div className="header">
       <h1>Home</h1> 
      </div>
        {/* {workerList} */}
      <div className="body">
      <h2 className="lineIndex">i/25</h2>
      <h2 className="name">data.name</h2>
      <div className="profileList">
        <p>From: data.city, data.state</p>
        <p>Job Title: data.title</p>
        <p>Employer: data.employer</p>
      </div>
      <div><h2 className="movies">Favorite Movies</h2>
      <section className="movieList">
      <p>1. data.favoriteMovies[0]</p>
      <p>2. data.favoriteMovies[1]</p>
      <p>3. data.favoriteMovies[2]</p>
      </section>
      
      </div>
      <div>
          {/* <input onClick={e => this.handleClick(e.target.value)} type="text"/> */}
      </div>
      </div>
      <div className="buttonSection">
      <h2 type='inline'>Previous</h2>
      <h2 type='inline'>Next</h2>
      </div>
       
      </div>
    );
}
}

export default App;
