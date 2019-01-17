import React, { Component } from 'react';

import './GoingoutCardContainer.scss'

import GoingoutCard from '../../../component/Apply/content/goingout/GoingoutCard'

const GoingoutCardContainer = ({cardList}) => {
    const goingoutCards = cardList.map((card) => {
        return (<GoingoutCard gooutDate = {card.goOutDate} returnDate = {card.returnDate} reason = {card.reason}/>);
    })
    return (
        <div className = 'apply--goingout--card--wrapper'>
            {goingoutCards}
        </div>
    )
}

export default GoingoutCardContainer;