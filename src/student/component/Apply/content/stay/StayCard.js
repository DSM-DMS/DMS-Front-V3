import React from 'react';

import './StayCard.scss'

const StayCard = ({title, content, iconSrc, isSelectedCard}) => {
    return (
        <div className = {`apply--stay--card ${isSelectedCard}`}>
            <img src = {iconSrc} alt = {`${title} 아이콘`} />
            <p className = 'apply--stay--card--title'>{title}</p>
            <p className = 'apply--stay--card--content'>{content}</p>
        </div>
    )
}

export default StayCard;