import React, { Component } from 'react';

import './GoingoutCardContainer.scss'

import GoingoutCard from '../../../component/Apply/content/goingout/GoingoutCard';
import ApplyAddCard from '../../../component/Apply/content/utils/ApplyAddCard';

const GoingoutCardContainer = ({cardList}) => {
    const goingoutCards = cardList.map((card) => {
        return (<GoingoutCard gooutDate = {card.goOutDate} returnDate = {card.returnDate} reason = {card.reason}/>);
    });
    const isThereAddCard = cardList.length < 5;
    return (
        <div className = 'apply--goingout--card--wrapper'>
            {goingoutCards}
            {isThereAddCard && <ApplyAddCard />}
        </div>
    )
}

export default GoingoutCardContainer;