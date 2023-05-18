import React, { useState } from 'react';
import Card from './utils/Card';

function PersonalInfo() {
  const [hasDetails, setHasDetails] = useState(false);
  const [info, setInfo] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });
  function handleSubmit(e) {
    e.preventDefault();
    setHasDetails(true);
  }

  function handleEdit(e) {
    e.preventDefault();
    setHasDetails(false);
  }

  function handleChange(e, name) {
    setInfo({ ...info, [name]: e.target.value });
  }

  return (
    <section className="info-container">
      <h2 className="title">Personal Information</h2>
      <form name="personal-info">
        <Card
          name="name"
          label="Name"
          type="text"
          hasDetails={hasDetails}
          onChange={handleChange}
          value={info.name}
        />
        <Card
          name="phoneNumber"
          label="Phone Number"
          type="number"
          hasDetails={hasDetails}
          onChange={handleChange}
          value={info.phoneNumber}
        />
        <Card
          name="email"
          label="Email"
          type="email"
          hasDetails={hasDetails}
          onChange={handleChange}
          value={info.email}
        />
        {hasDetails ? (
          <button className="edit-btn" onClick={handleEdit}>
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
