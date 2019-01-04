import React, { Component, Fragment } from 'react';

import Extra from '../../../component/Main/Extra/Extra';
import ExtraCard from '../../../component/Main/Extra/ExtraCard';

import imgSurvey from '../../../../assets/img/img_survey.png';
import imgBug from '../../../../assets/img/img_bug.png';
import imgBroken from '../../../../assets/img/img_broken.png';

class ExtraContainer extends Component {
    state = {
        extracardList: [
            {
                type: 'survey',
                src: imgSurvey,
                title: '설문조사'
            },
            {
                type: 'report',
                src: imgBug,
                title: '버그신고'
            },
            {
                type: 'broken',
                src: imgBroken,
                title: '시설물 고장 신고'
            }
        ]
    }

    render() {
        const { extracardList } = this.state;
        const cardList = extracardList.map(data => <ExtraCard type={data.type} src={data.src} title={data.title} key={data.type + '-extra-card'}/>)
        return (
            <Fragment>
                <Extra cardList={cardList}/>
            </Fragment>
        );
    }
}

export default ExtraContainer;