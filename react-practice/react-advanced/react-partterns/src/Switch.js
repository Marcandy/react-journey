import React from 'react';
import './Switch.css';

function Switch({on , className= '', ...props}) {
    return (
        <div className="toggle">
            <input
                className="toggle-input"
                type="checkbox"
            />
            <button
                className={`${className} toggle-btn ${on
                ? 'toggle-btn-on'
                : 'toggle-btn-off'}`}
                aria-expanded={on}
                {...props}
            />
        </div>
    )
}

export default Switch;