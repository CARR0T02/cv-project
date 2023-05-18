import React, { useState } from 'react';
import Card from './Card';

function WorkExCard({ deleteCard, uniqID, handleChange, cardObj }) {
  const [hasDetails, setHasDetails] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setHasDetails(true);
  }

  function handleEdit(e) {
    e.preventDefault();
    setHasDetails(false);
  }

  function handleDelete(e) {
    e.preventDefault();
    deleteCard(uniqID);
  }

  return (
    <form name="work-info" className="card mb-5">
      <Card
        name="company"
        label="Company Name"
        type="text"
        hasDetails={hasDetails}
        onChange={handleChange}
        value={cardObj.company}
        uniqID={uniqID}
      />
      <Card
        name="position"
        label="Position"
        type="text"
        hasDetails={hasDetails}
        onChange={handleChange}
        value={cardObj.position}
        uniqID={uniqID}
      />
      <Card
        name="description"
        label="Job Description"
        type="text"
        hasDetails={hasDetails}
        onChange={handleChange}
        value={cardObj.description}
        uniqID={uniqID}
      />
      <Card
        name="duration"
        label="Duration of work"
        type="text"
        hasDetails={hasDetails}
        onChange={handleChange}
        value={cardObj.duration}
        uniqID={uniqID}
      />
      <div className="card-footer">
        {hasDetails ? (
          <span className="clickable card-footer-item" onClick={handleEdit}>
            Edit
          </span>
        ) : (
          <span
            className="clickable card-footer-item"
            type="submit"
            onClick={handleSubmit}
          >
            Save
          </span>
        )}
        <span className="clickable card-footer-item" onClick={handleDelete}>
          Delete
        </span>
      </div>
    </form>
  );
}

export default WorkExCard;
