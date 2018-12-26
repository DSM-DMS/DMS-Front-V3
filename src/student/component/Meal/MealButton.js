import React from 'react';

import './MealButton.scss';

const MealButton = ({clickFun, text}) => {
    return (
        <button onClick={clickFun} className="meal--date--button">
            {text}
        </button>
    );
};

export default MealButton;