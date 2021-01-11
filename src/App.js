import React from 'react';
import {connect} from "react-redux";

function App(props) {
  console.log(props)
  return (
    <div>
      <h1>I am Ali Raza</h1>
      <h2>my  name is{props.myname}</h2>
    </div>
  );
}
const mapStateToProps = (state)=>{

  return {
    myname:state.name
    
  }
} 
  
export default connect(mapStateToProps)(App);

