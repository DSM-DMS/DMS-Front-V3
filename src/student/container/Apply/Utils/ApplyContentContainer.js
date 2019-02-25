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
      ],
      typeList: [{ content: '11시', val: 11 }, { content: '12시', val: 12 }]
    },
    goingout: {
      title: '외출신청',
      menuTitle: '외출목록',
      menuList: [
        { content: '토', detail: '' },
        { content: '평일', detail: '' }
      ],
      typeList: [
        { content: '토요일', val: 'sat' },
        { content: '일요일', val: 'sun' },
        { content: '평일', val: 'week' }
      ]
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
      ],
      typeList: []
    },
    stay: {
      title: '잔류신청',
      menuTitle: '신청목록',
      menuList: [
        { content: '금', detail: '금요귀가' },
        { content: '토', detail: '토요귀가' },
        { content: '토', detail: '토요귀사' },
        { content: '잔류', detail: '잔류' }
      ],
      typeList: []
    }
  };

  state = {
    selectedType: {
      extension: 11,
      goingout: 'sat'
    },
    extensionInfo: ['가온실', '-'],
    stayInfo: '금요귀가'
  };

  onSelectType = typeVal => {
    const { type } = this.props;
    this.setState({
      selectedType: {
        ...this.state.selectedType,
        [type]: typeVal
      }
    });
  };

  render() {
    const { type, menuList, typeList } = this.props;
    const { selectedType, extensionInfo, stayInfo } = this.state;
    const applyTag = {
      extension: (
        <div className='apply--content--tag--wrapper'>
          <div className='apply--content--tag'>{extensionInfo[0]}</div>
          <div className='apply--content--tag second'>{extensionInfo[1]}</div>
        </div>
      ),
      stay: (
        <div className='apply--content--tag--wrapper'>
          <div className='apply--content--tag'>{stayInfo}</div>
        </div>
      )
    };
    return (
      <div className='apply--content--outer--wrapper'>
        <div className='apply--content--wrapper'>
          <div className='apply--content--left'>
            <div className='apply--content--title--wrapper'>
              <span className='apply--content--title'>
                {this.contentInfo[type].title}
              </span>
              {applyTag[type]}
            </div>
            <ApplyContentMenuContainer
              menuTitle={this.contentInfo[type].menuTitle}
              menuList={this.contentInfo[type].menuList}
            />
          </div>
          <div className='apply--content--right'>
            <ApplyContentInnerContainer
              typeList={this.contentInfo[type].typeList}
              selectedType={selectedType[type]}
              onSelectType={this.onSelectType}
            />
          </div>
        </div>
      </div>
    );
  }
}
