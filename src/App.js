import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Display from './components/display/Display.js';
import Button from './button/Button';

class App extends Component {

  state = {disp: ''};
  
  displayUpdate = (valorBotao) => {
    
    if ((valorBotao==='C')||(valorBotao==='CE')){
      this.setState({
        disp: ``
      });
    }
    else{
      this.setState({
        disp: `${this.state.disp}${valorBotao}`
      });
    }

  }

  display(){
    if (this.state.disp===''){
      return 0;
    }
    else{
      return this.state.disp;
    }
  }

  render() {
    return (
      <div className="App">
        Carculadora Gama
        <Display valor={this.display()} />

        <div className='row'>
          <Button valor={7} update={this.displayUpdate}/>
          <Button valor={8} update={this.displayUpdate}/>
          <Button valor={9} update={this.displayUpdate}/>
          <Button valor={'+'} update={this.displayUpdate}/>
        </div>
        <div className='row'>
          <Button valor={4} update={this.displayUpdate}/>
          <Button valor={5} update={this.displayUpdate}/>
          <Button valor={6} update={this.displayUpdate}/>
          <Button valor={'-'} update={this.displayUpdate}/>
        </div>
        <div className='row'>
          <Button valor={1} update={this.displayUpdate}/>
          <Button valor={2} update={this.displayUpdate}/>
          <Button valor={3} update={this.displayUpdate}/>
          <Button valor={'x'} update={this.displayUpdate}/>
        </div>
        <div className='row'>
          <Button valor={'C'} update={this.displayUpdate}/>
          <Button valor={'CE'} update={this.displayUpdate}/>
          <Button valor={'='} update={this.displayUpdate}/>
          <Button valor={'/'} update={this.displayUpdate}/>
        </div>


      </div>
    );
  }
}

export default App;
