import React, { Component } from 'react';
import './button.css'

class Button extends Component {

    clicaBotao = () => {
        //console.log(this.props.valor);
        this.props.update(this.props.valor);
       
    }

    render() {
        return(
            <button onClick={this.clicaBotao} className='button'>
                {this.props.valor}
            </button>
        );
    }
}


export default Button;