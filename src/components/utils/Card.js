import React, { useState } from 'react';

function Card({ id, label, type, defaultValue, hasDetails }) {
  const [value, setValue] = useState(defaultValue);

  return (
    <div className="details">
      <label htmlFor={id}>{label}: </label>
      {hasDetails ? (
        <div>{value}</div>
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
}

export default Card;
