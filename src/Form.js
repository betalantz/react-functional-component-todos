import React, { useState } from 'react';

const Form = (props) => {

    const [inputs, setInputs] = useState(props.inputs.map(input => ""))

    const handleTextChange = (e, index) => {
        const nextInputs = [...inputs]
        nextInputs[index] = e.target.value
        setInputs(nextInputs)
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        setInputs(props.inputs.map(input => ""))
        props.submitCallback(inputs)
    }
    
    const renderInputs = () => {
        return props.inputs.map((inputName, index) => (
            <input
            type="text"
            value={inputs[index]}
            placeholder={inputName}
            key={inputName}
            onChange={e => handleTextChange(e, index)}
          />
        ))
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
