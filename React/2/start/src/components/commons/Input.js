import React from "react";
import PropTypes from "prop-types";


export default function Input(props) {
    let inputClass = "form-control";
    if(props.touched && props.error.length > 0) {
        inputClass += " is-invalid";
        console.log(inputClass);
    }
    return(
        <div className="mb-3">
        <label htmlFor={props.id}>{props.label}</label>
        <input
          type={props.type}
          className={inputClass}
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
        <span className="invalid-feedback">{props.error}</span>      
    </div>
    );
}

    Input.propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        error: PropTypes.string,
};

Input.defaultProps = {
    error: "",
};