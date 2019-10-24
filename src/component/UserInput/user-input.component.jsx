import React, { Component } from 'react';
import Input from '../Input/input.component';

import './user-input.styles.css';

class UserInput extends Component {
    inputReference = React.createRef();

    handleFocusOnClick = e => {
        this.inputReference.current.focus();
    };

    handleClearTextOnClick = () => {
        this.inputReference.current.value = '';
    };

    render() {
        return (
            <div className="user-input">
                <Input ref={this.inputReference}></Input>
                <button className="input-button" onClick={this.handleFocusOnClick}>
                    Focus
                </button>
                <button className="input-button" onClick={this.handleClearTextOnClick}>
                    Clear text
                </button>
            </div>
        );
    }
}

export default UserInput;
