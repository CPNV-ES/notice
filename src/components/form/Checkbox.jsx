/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './Checkbox.css';

export default function Checkbox({ text, checked = false }) {
  const [value, setValue] = useState(checked);

  return (
    <label className="control control--checkbox mb-0">
      <span className="caption">{text}</span>
      <input
        type="checkbox"
        value={value}
        defaultChecked={value}
        onClick={() => setValue(!value)}
      />
      <div className="control__indicator" />
    </label>
  );
}
