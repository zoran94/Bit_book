import React from 'react';


const InputField = (props) => {
    return (
        <div className="row">
            <div className="input-field col s7">
                <input
                    id={props.name}
                    type={props.type}
                    name={props.name}
                    className={`validate ${props.error ? 'invalid' : ''}`}
                    value={props.value}
                    onChange={props.onInputChange}
                    autoComplete="off"
                />
                <label htmlFor={props.name} className="active">{props.placeholder}</label>
                <span className="helper-text" data-error={props.error || ''}></span>
            </div>
        </div>
    )
}
export default InputField;