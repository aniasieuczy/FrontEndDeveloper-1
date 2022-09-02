import React from "react";
import PropTypes from "prop-types";

export default function Select(props) {
  let selectClass = "form-control";
  if (props.touched && props.error) {
    selectClass += " is-invalid";
  }

  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <select
        className={selectClass}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      >
        <option value="" disabled hidden>
          Wybierz
        </option>
        {props.options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <span className="invalid-feedback">{props.error}</span>
    </div>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

Select.defaultProps = {
  error: "",
};

