import React, { useState } from 'react';
import EducationCard from './utils/EducationCard';
import uniqid from 'uniqid';

function Education() {
  const [cards, setCards] = useState([]);

  function addCard() {
    const cardObj = {
      uniqID: uniqid(),
      school: '',
      course: '',
      gradDate: '',
    };
    setCards([...cards, cardObj]);
  }

  function deleteCard(cardID) {
    setCards(cards.filter((cardObj) => cardObj.uniqID !== cardID));
  }

  function handleChange(e, name, cardID) {
    const newCards = [...cards];
    const card = newCards.find((cardObj) => cardObj.uniqID === cardID);
    card[name] = e.target.value;
    setCards(newCards);
  }

  return (
    <section className="education">
      <h2 className="title">Education</h2>
      {cards.map((card) => (
        <EducationCard
          deleteCard={deleteCard}
          uniqID={card.uniqID}
          handleChange={handleChange}
          cardObj={card}
          key={card.uniqID}
        />
      ))}
      <button id="add-education-btn" onClick={addCard}>
        Add
      </button>
    </section>
  );
}

export default Education;
