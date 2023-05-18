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
    <div className="is-flex card-content">
      <label htmlFor={name}>{label}: </label>
      {hasDetails ? (
        <span>{value}</span>
      ) : (
        <input
          className="input is-small is-rounded"
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
