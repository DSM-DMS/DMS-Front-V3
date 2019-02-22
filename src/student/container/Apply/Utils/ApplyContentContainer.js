import React, { Component } from 'react';

import './ApplyContentContainer.scss';

import ApplyContentMenuContainer from './ApplyContentMenuContainer';
import ApplyContentInnerContainer from './ApplyContentInnerContainer';

export default class ApplyContentContainer extends Component {
  contentInfo = {
    extension: {
      title: '연장신청',
      menuTitle: '위치선택',
      menuList: [
        { content: '가', detail: '가온실' },
        { content: '나', detail: '나온실' },
        { content: '다', detail: '다온실' },
        { content: '라', detail: '라온실' },
        { content: '2층', detail: '2층 여자 독서실' },
        { content: '3층', detail: '3층 학교측 독서실' },
        { content: '3층', detail: '3층 기숙사측 독서실' },
        { content: '4층', detail: '4층 학교측 독서실' },
        { content: '4층', detail: '4층 기숙사측 독서실' },
        { content: '5층', detail: '5층 열린 교실' }
      ]
    },
    goingout: {
      title: '외출신청',
      menuTitle: '외출목록',
      menuList: [{ content: '토', detail: '' }, { content: '평일', detail: '' }]
    },
    music: {
      title: '기상음악',
      menuTitle: '요일선택',
      menuList: [
        { content: '월', detail: '신청가능' },
        { content: '화', detail: '신청가능' },
        { content: '수', detail: '신청가능' },
        { content: '목', detail: '신청가능' },
        { content: '금', detail: '신청가능' }
      ]
    },
    stay: {
      title: '잔류신청',
      menuTitle: '신청목록',
      menuList: [
        { content: '금', detail: '금요귀가' },
        { content: '토', detail: '토요귀가' },
        { content: '토', detail: '토요귀사' },
        { content: '잔류', detail: '잔류' }
      ]
    }
  };

  render() {
    const { type, menuList, typeList } = this.props;

    return (
      <div className='apply--content--outer--wrapper'>
        <div className='apply--content--wrapper'>
          <div className='apply--content--left'>
            <div className='apply--content--title--wrapper'>
              <span className='apply--content--title'>
                {this.contentInfo[type].title}
              </span>
            </div>
            <ApplyContentMenuContainer
              menuTitle={this.contentInfo[type].menuTitle}
              menuList={this.contentInfo[type].menuList}
            />
          </div>
          <div className='apply--content--right'>
            <ApplyContentInnerContainer />
          </div>
        </div>
      </div>
    );
  }
}
