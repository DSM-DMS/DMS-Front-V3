import React from 'react';

import './Extra.scss'

import subBackground from '../../../assets/illust/sub-background.png';
import phonePerson from '../../../assets/illust/phone-person.png';
import structure from '../../../assets/illust/structure.png';
import buildingPerson from '../../../assets/illust/building-person.png';

const Extra = ({cardList}) => {
    return (
        <div className="extra--wrapper" id="extra">
            <div className="extra--inner--wrapper">
                <img src={subBackground} alt="" className="extra--background--board" />
                <img src={phonePerson} alt="" className="extra--background--phone" />
                <img src={structure} alt="" className="extra--background--structure" />
                <img src={buildingPerson} alt="" className="extra--background--building" />
                <div className="extra--title--wrapper">
                    <span className="extra--title">부가기능</span>
                    <span className="extra--title--sub">기숙사 생활에 관련된 부가 기능을 사용해보세요.</span>
                </div>

                <div className="extra--card--list">
                    {cardList}
                </div>
            </div>
        </div>
    );
};

export default Extra;