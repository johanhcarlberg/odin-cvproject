import React from 'react';
import '../styles/IconButton.css';

class IconButton extends React.Component {
    render() {
        return (
            <button className='icon-button' onClick={this.props.onClick}>
                {this.props.icon}
                <span>{this.props.text}</span>
            </button>
        )
    }
}

export default IconButton;