import React from 'react';

import './FooterCard.scss'

const FooterCard = ({team, members}) => {
    const memberList = members.map(data => <span className="footer--card--members" key={team + '-' + data}>{data}</span>)
    return (
        <div className="footer--card--wrapper">
            <span className="footer--card--team">{team}</span>
            {memberList}
        </div>
    );
};

export default FooterCard;