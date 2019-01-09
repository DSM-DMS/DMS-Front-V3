import React from 'react';

import './ApplyBackImg.scss';

const ApplyBackImg = ({kind, src, hovered}) => {
    return (
        <img src={src} alt="" className={`apply--background--img ${(hovered === kind)?'apply--background--act': ''}`}/>
    );
};

export default ApplyBackImg;