import React from 'react';

import './MealCard.scss';

const MealCard = ({time, list}) => {
    const mealList = list.map(data => <span className="meal--card--content">{data}</span>)
    return (
        <div className="meal--card--wrapper">
            <p className="meal--card--header">{time}</p>
            <div className="meal--card--content--wrapper">
                {mealList}
            </div>
        </div>
    );
};

export default MealCard;