import React from 'react';
import './Switch.css';

const Switch = ({ isOn, handleToggle }) => {
    return (
        <>
            <input
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
                checked={isOn}
                onChange={handleToggle}
            />
            <label
                style={{
                    background: isOn
                        ? 'linear-gradient(to left, hsl(210, 78%, 56%), hsl(146, 68%, 55%))'
                        : '#aeb3cb',
                }}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </>
    );
};

export default Switch;
