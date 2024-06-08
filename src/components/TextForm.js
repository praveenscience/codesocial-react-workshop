import React from "react";

const TextForm = ({ Label, Text, handleChange }) => {
  return (
    <div className="form-group">
      <label>
        Enter {Label} Text:
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={Text}
        />
      </label>
    </div>
  );
};

export default TextForm;
