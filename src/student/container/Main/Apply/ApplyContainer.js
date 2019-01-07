import React, { Component, Fragment } from 'react';

import Apply from "../../../component/Main/Apply/Apply";
import ApplyCard from '../../../component/Main/Apply/ApplyCard';
import ApplyBackImg from '../../../component/Main/Apply/ApplyBackImg';

import ExtensionIllust from '../../../../assets/illust/extension-illust.png';
import goingoutIllust from '../../../../assets/illust/goingout-illust.png';
import stayIllust from '../../../../assets/illust/stay-illust.png';
import musicIllust from '../../../../assets/illust/music-illust.png';

import extensionImg from '../../../../assets/img/img_study.png';
import goingoutImg from '../../../../assets/img/img_outing.png';
import stayImg from '../../../../assets/img/img_room.png';
import musicImg from '../../../../assets/img/img_school.png';

class ApplyContainer extends Component {

    state = {
        cardDataList: [
            {
                kind: 'extension',
                title: '연장학습신청', 
                subTitle: '추가 연장학습이 필요한 경우\n연장학습을 신청해보세요.',
                illust: ExtensionIllust
            },
            {
                kind: 'goingout',
                title: '외출신청', 
                subTitle: '주말 기숙사 외출이 필요한 경우\n토요, 일요 외출을 신청해보세요.',
                illust: goingoutIllust
            },
            {
                kind: 'stay',
                title: '잔류신청', 
                subTitle: '주말 기숙사 잔류여부를 확인하고\n잔류 또는 귀가를 신청해보세요.',
                illust: stayIllust
            },
            {
                kind: 'music',
                title: '기상음악신청', 
                subTitle: '월요일부터 금요일까지 방송할 \n기상 알람음악을 신청해보세요.',
                illust: musicIllust
            }
        ],
        backgroundImg: [
            {kind: 'extension',src: extensionImg},
            {kind: 'goingout',src: goingoutImg},
            {kind: 'stay',src: stayImg},
            {kind: 'music',src: musicImg}
        ],
        hovered: ''
    }

    cardHoverOn = (kind) => {
        this.setState({
            hovered: kind
        });
    }

    cardHoverOff = () => {
        this.setState({
            hovered: ''
        });
    }

    hoverImg = () => {

        const { hovered,backgroundImg } = this.state;
        return backgroundImg.map(data =>             <ApplyBackImg kind={data.kind} src={data.src} hovered={hovered} key={`${data.kind}--background`}/>)
    }

    render() {
        const {cardDataList} = this.state;
        const cardList = cardDataList.map(data => (
            <ApplyCard cardData={data} cardHoverOn={this.cardHoverOn} cardHoverOff={this.cardHoverOff} key={data.kind}/>
        ))
        return (
            <Fragment>
                <Apply cardList={cardList} hoverImg={this.hoverImg}/>
            </Fragment>
        );
    }
}

export default ApplyContainer;