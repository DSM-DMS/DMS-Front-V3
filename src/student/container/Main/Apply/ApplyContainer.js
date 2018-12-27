import React, { Component, Fragment } from 'react';

import Apply from "../../../component/Apply/Apply";
import ApplyCard from '../../../component/Apply/ApplyCard';
import ExtensionIllust from '../../../../assets/icon/extension-illust.png';
import goingoutIllust from '../../../../assets/icon/goingout-illust.png';
import stayIllust from '../../../../assets/icon/stay-illust.png';
import musicIllust from '../../../../assets/icon/music-illust.png';

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

    render() {
        const {cardDataList} = this.state;
        const cardList = cardDataList.map(data => (
            <ApplyCard cardData={data} cardHoverOn={this.cardHoverOn} cardHoverOff={this.cardHoverOff} key={data.kind}/>
        ))
        return (
            <Fragment>
                <Apply cardList={cardList}/>
            </Fragment>
        );
    }
}

export default ApplyContainer;