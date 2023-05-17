import React, { useState } from 'react';

function PersonalInfo() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [hasDetails, setHasDetails] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setHasDetails(true);
  }

  function handleEdit(e) {
    e.preventDefault();
    setHasDetails(false);
  }

  return (
    <section class="info-container">
      <form name="personal-info">
        <div class="details">
          <label htmlFor="name">Name: </label>
          {hasDetails ? (
            <div>{name}</div>
          ) : (
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
        </div>
        <div class="details">
          <label htmlFor="phone-number">Phone Number:</label>
          {hasDetails ? (
            <div>{phoneNumber}</div>
          ) : (
            <input
              id="phone-number"
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          )}
        </div>
        <div class="details">
          <label htmlFor="email">Email:</label>
          {hasDetails ? (
            <div>{email}</div>
          ) : (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
        </div>
        {hasDetails ? (
          <button class="edit-btn" onClick={handleEdit}>
            Edit
          </button>
        ) : (
          <button type="submit" onClick={handleSubmit}>
            Save
          </button>
        )}
      </form>
    </section>
  );
}

export default PersonalInfo;
