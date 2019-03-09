import React from 'react';
import { Link } from 'react-router-dom';

import './ManageCard.scss'

const ManageCard = ({cardData}) => {
    return (
        <Link to = {`/admin/${cardData.kind}`} className="manage--card--content--wrapper">
            <span className={"manage--card--content--icon " + cardData.kind + '--admin--icon'}></span>
            <div className="manage--card--content--title--wrapper">
                <span className="manage--card--content--title">{cardData.title}</span>
                <p className="manage--card--content--description">{cardData.description}</p>
            </div>
        </Link>
    );
};

export default ManageCard;