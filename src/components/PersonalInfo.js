import React, { useState } from 'react';
import Card from './utils/Card';

function PersonalInfo() {
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
    <section className="info-container">
      <form name="personal-info">
        <Card
          id="name"
          label="Name"
          type="text"
          defaultValue=""
          hasDetails={hasDetails}
        />
        <Card
          id="phone-number"
          label="Phone Number"
          type="number"
          defaultValue=""
          hasDetails={hasDetails}
        />
        <Card
          id="email"
          label="Email"
          type="email"
          defaultValue=""
          hasDetails={hasDetails}
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
