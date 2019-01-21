import React from 'react';

import './StayCard.scss'

const StayCard = ({title, content, iconSrc, onChangeType, selectedClass}) => {
    return (
        <div className = {`unselectable apply--stay--card ${selectedClass}`} onClick = {onChangeType.bind(null, title)}>
            <img className = 'apply--stay--card--icon' src = {iconSrc} alt = {`${title} 아이콘`} />
            <p className = 'apply--stay--card--title'>{title}</p>
            <p className = 'apply--stay--card--content'>{content}</p>
        </div>
    )
}

export default StayCard;