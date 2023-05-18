import React, { useState } from 'react';
import WorkExCard from './utils/WorkExCard';
import uniqid from 'uniqid';

function WorkEx() {
  const [cards, setCards] = useState([]);

  function addCard() {
    const cardObj = {
      uniqID: uniqid(),
      company: '',
      position: '',
      description: '',
      duration: '',
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
    <section className="work-experience">
      <h2 className="title">Work Experience</h2>
      {cards.map((card) => (
        <WorkExCard
          deleteCard={deleteCard}
          uniqID={card.uniqID}
          handleChange={handleChange}
          cardObj={card}
          key={card.uniqID}
        />
      ))}
      <button id="add-work-btn" onClick={addCard}>
        Add
      </button>
    </section>
  );
}

export default WorkEx;
