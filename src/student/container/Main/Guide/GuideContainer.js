import React, { Component, Fragment } from 'react';

import Guide from '../../../component/Main/Guide/Guide';
import GuideCard from '../../../component/Main/Guide/GuideCard';

import ImgNotice from '../../../../assets/img/img_notice.png';
import ImgRule from '../../../../assets/img/img_rule.png';

class GuideContainer extends Component {
  state = {
    guideCardList: [
      {
        type: 'notice',
        title: '공지사항',
        subtitle: '사감부에서 공지된 사항을 확인하세요.',
        src: ImgNotice,
      },
      {
        type: 'rule',
        title: '기숙사 규정',
        subtitle: '사감부에서 제정한 규정을 확인하세요.',
        src: ImgRule,
      },
    ],
  };

  render() {
    const { guideCardList } = this.state;
    const cardList = guideCardList.map(data => (
      <GuideCard
        type={data.type}
        title={data.title}
        subtitle={data.subtitle}
        src={data.src}
        key={data.title + '-guide'}
      />
    ));
    return (
      <Fragment>
        <Guide cardList={cardList} />
      </Fragment>
    );
  }
}

export default GuideContainer;
