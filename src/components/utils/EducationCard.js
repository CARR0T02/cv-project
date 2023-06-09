import React, { useState } from 'react';
import Card from './Card';

function EducationCard({ deleteCard, uniqID, handleChange, cardObj }) {
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
    <form name="education-info" className="card mb-5">
      <Card
        name="school"
        label="School Name"
        type="text"
        hasDetails={hasDetails}
        onChange={handleChange}
        value={cardObj.school}
        uniqID={uniqID}
      />
      <Card
        name="course"
        label="Course"
        type="text"
        hasDetails={hasDetails}
        onChange={handleChange}
        value={cardObj.course}
        uniqID={uniqID}
      />
      <Card
        name="gradDate"
        label="Date of Graduation"
        type="date"
        hasDetails={hasDetails}
        onChange={handleChange}
        value={cardObj.gradDate}
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

export default EducationCard;
