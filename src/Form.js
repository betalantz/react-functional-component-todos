import React, { useState } from 'react';

const Form = (props) => {

    const [inputs, setInputs] = useState(props.inputs.map(input => ""))

    const renderInputs = () => {
        return props.inputs.map((inputName, index) => (
            <input
            type="text"
            value={inputs[index]}
            placeholder={inputName}
            key={inputName}
            onChange={e => this.handleTextChange(e, index)}
          />
        ))
    }
    
    const handleSubmit = () => {
        
    }


    return (
        <div>
            {renderInputs()}
            <button type="submit" onClick={handleSubmit}>
              {props.submitValue}
            </button>
        </div>
    );
}

export default Form;
