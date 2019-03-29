import React from 'react';

import './MealCard.scss';

const MealCard = ({ time, list }) => {
  let mealList;
  if (list) {
    if ((list.length === 1 && list[0] === '') || list.length === 0) {
      mealList = <span className="meal--card--temp">급식이 없어연</span>;
    } else {
      mealList = list.map((data, index) => (
        <span
          className="meal--card--content"
          key={`meal-card.num${index}-${data}`}
        >
          {data}
        </span>
      ));
    }
  } else {
    mealList = <span className="meal--card--temp">급식이 없어연</span>;
  }
  return (
    <div className="meal--card--wrapper">
      <p className="meal--card--header">{time}</p>
      <div className="meal--card--content--wrapper">{mealList}</div>
    </div>
  );
};

export default MealCard;
