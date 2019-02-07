import React from 'react';

import './MealCard.scss';

const MealCard = ({ time, list }) => {
  let mealList;
  if (list) {
    mealList = list.map(data => (
      <span className="meal--card--content" key={data}>
        {data}
      </span>
    ));
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
