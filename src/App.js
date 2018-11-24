import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Display from './components/display/Display.js';
import Button from './button/Button';

class App extends Component {

  state = {disp: ''};

  handleClick = (event) => {
    let master = '1234567890-+=/*';
    event.preventDefault();
    if (master.indexOf(event.key)>=0){
      this.displayUpdate(event.key);
    }
    if (event.key==='Enter'){
      this.displayUpdate('=');
    }
  
  }

  componentDidMount() {
      document.addEventListener('keyup',this.handleClick,false);
  }
  
    componentWillUnmount() {
      document.removeEventListener('keyup', this.handleClick);
  }

  displayUpdate = (valorBotao) => {
    
    if ((valorBotao==='C')||(valorBotao==='CE')){
      this.setState({
        disp: ``
      });
      return;
    }
    else if (valorBotao==='='){
      try {
        eval(this.state.disp);
      }
      catch(err) {
        this.setState({
          disp: err.message
        });
        return;
      }
      
      this.setState({
        disp: eval(this.state.disp)
      });
      return
    }

    this.setState({
      disp: `${this.state.disp}${valorBotao}`
    });
    return

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
          <Button valor={'*'} update={this.displayUpdate}/>
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
