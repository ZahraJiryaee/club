import React from "react";

import "./custom-radio-input.styles.scss";

const CustomRadioInput = ({
  data,
  addressSelected,
  onAddressSelectedChange,
}) => {
  const RadioInput = ({ name, label, value, isChecked, handleChange }) => {
    const handleRadioChange = (e) => {
      const { id } = e.currentTarget;
      handleChange(id); // Send back id to radio group for comparison
    };

    return (
      <div className="custom-radio-container">
        {/* Target this input: opacity 0 */}
        <input
          type="radio"
          className="custom-radio"
          name={name}
          id={value} // htlmlFor targets this id.
          checked={isChecked}
          onChange={handleRadioChange}
        />
        <label htmlFor={value}>
          <span>{label}</span>
        </label>
      </div>
    );
  };

  const RadioGropupInput = () => {
    return (
      <div className="radio-gropup-input-container">
        {data.map((item) => (
          <RadioInput
            key={item.id}
            name={item.id}
            value={item.id}
            label={item.content}
            isChecked={addressSelected === item.id}
            handleChange={() => onAddressSelectedChange(item.id)}
          />
        ))}
      </div>
    );
  };

  return <RadioGropupInput />;
};

export default CustomRadioInput;
