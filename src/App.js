
import React from 'react'
import './App.css';
import Personne from './Personne';

class App extends React.Component{
 state= { B:false }
 toggleshow=()=>{ this.setState({ B: ! this.state.B})}

  render(){
return(
  <div>
    <button className='boutton' onClick={()=>this.toggleshow()} > {this.state.B ? 'Hide' : 'Show'} </button>
     {this.state.B && <Personne />}
  </div>
)

  }
}
export default App;