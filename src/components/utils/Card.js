import React from 'react';

function Card({
  name,
  label,
  type,
  hasDetails,
  onChange,
  value,
  uniqID = undefined,
}) {
  return (
    <div className="details">
      <label htmlFor={name}>{label}: </label>
      {hasDetails ? (
        <div>{value}</div>
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e, name, uniqID)}
        />
      )}
    </div>
  );
}

export default Card;
