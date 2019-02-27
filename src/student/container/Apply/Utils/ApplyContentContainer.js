import React, { Component } from 'react';

import './ApplyContentContainer.scss';

import ApplyContentMenuContainer from './ApplyContentMenuContainer';
import ApplyContentInnerContainer from './ApplyContentInnerContainer';

import { getMyExtensionInfo, getStayInform } from '../../../../lib/applyAPI';
import { getCookie } from '../../../../lib/cookie';

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
    selectedMenu: 0,
    selectedType: {
      extension: 11,
      goingout: 'sat'
    },
    extensionInfo: ['', ''],
    stayInfo: ''
  };

  setExtensionInfo = async () => {
    try {
      const response1 = await getMyExtensionInfo(getCookie('JWT'), 11);
      const response2 = await getMyExtensionInfo(getCookie('JWT'), 12);
      this.setState({
        extensionInfo: [
          this.getRoomName(response1.data.classNum),
          this.getRoomName(response2.data.classNum)
        ]
      });
    } catch (e) {
      console.log(e);
    }
  };

  setStayInfo = async () => {
    try {
      const response = await getStayInform(getCookie('JWT'));
      this.setState({
        stayInfo: this.getStayType(response.data.value)
      });
    } catch (e) {
      console.log(e);
    }
  };

  getRoomName(roomNum) {
    switch (roomNum) {
      case 1:
        return '가온실';
      case 2:
        return '나온실';
      case 3:
        return '다온실';
      case 4:
        return '라온실';
      case 5:
        return '2층';
      case 6:
      case 7:
        return '3층';
      case 8:
      case 9:
        return '4층';
      case 10:
        return '5층';
      default:
        return '-';
    }
  }

  getStayType(stayNum) {
    switch (stayNum) {
      case 1:
        return '금요귀가';
      case 2:
        return '토요귀가';
      case 3:
        return '토요귀사';
      case 4:
        return '잔류';
      default:
    }
  }

  onSelectMenu = menuVal => {
    this.setState({
      selectedMenu: menuVal
    });
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

  componentDidMount() {
    this.setExtensionInfo();
    this.setStayInfo();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.refreshFlag) {
      this.setExtensionInfo();
      this.setStayInfo();
      this.props.afterRefresh();
    }
  }

  render() {
    const { type, menuList, typeList, onCancel, onApply } = this.props;
    const { selectedType, extensionInfo, stayInfo, selectedMenu } = this.state;
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
              selectedMenu={selectedMenu}
              onSelectMenu={this.onSelectMenu}
            />
          </div>
          <div className='apply--content--right'>
            <ApplyContentInnerContainer
              applyType={type}
              typeList={this.contentInfo[type].typeList}
              selectedType={selectedType[type]}
              onSelectType={this.onSelectType}
              selectedMenu={selectedMenu}
              onCancel={onCancel}
              onApply={onApply}
            />
          </div>
        </div>
      </div>
    );
  }
}
