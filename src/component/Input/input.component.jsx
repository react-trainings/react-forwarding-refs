import React from 'react';
import './input.styles.css';

const Input = React.forwardRef((props, ref) => {
    return <input type="text" className="input-box" ref={ref} />;
});

export default Input;
