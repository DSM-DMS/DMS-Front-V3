import React, { Component } from 'react';

import './ApplyContentInnerContainer.scss';
import ApplyTypeSwitch from '../../../component/Apply/Utils/ApplyTypeSwitch';

import ApplyAcceptBtn from '../../../component/Apply/Utils/ApplyAcceptBtn';
import ExtensionContent from '../../../component/Apply/content/extension/ExtensionContent';
import GoingoutContent from '../../../component/Apply/content/goingout/GoingoutContent';
import MusicContent from '../../../component/Apply/content/music/MusicContent';
import StayContent from '../../../component/Apply/content/stay/StayContent';

export default class ApplyContentInnerContainer extends Component {
  render() {
    const {
      applyType,
      typeList,
      selectedType,
      onSelectType,
      selectedMenu,
      onCancel,
      onApply,
      params,
      musicApplication,
      onChangeMusicApplication
    } = this.props;

    let content = null;
    let applyParam = null;
    switch (applyType) {
      case 'extension':
        content = (
          <ExtensionContent time={selectedType} classNum={selectedMenu} />
        );
        applyParam = params.apply;
        break;
      case 'goingout':
        content = <GoingoutContent />;
        applyParam = params.apply;
        break;
      case 'stay':
        content = <StayContent selectedMenu={selectedMenu} />;
        applyParam = params.apply;
        break;
      case 'music':
        content = (
          <MusicContent
            musicApplication={musicApplication}
            onChangeMusicApplication={onChangeMusicApplication}
          />
        );
        applyParam = {
          day: params.apply,
          ...musicApplication
        };
        break;
      default:
    }

    return (
      <div className='apply--content--inner--wrapper'>
        <div className='apply--content--inner--type--switch--wrapper'>
          {typeList.length !== 0 ? (
            <ApplyTypeSwitch
              content={typeList}
              selectedType={selectedType}
              onSelectType={onSelectType}
            />
          ) : (
            undefined
          )}
        </div>
        <div className='apply--content--inner--content'>
          {content}
          {applyType !== 'stay' ? (
            <div className='apply--content--btn--wrapper'>
              <ApplyAcceptBtn
                content='취소'
                btnClass='cancel'
                onClick={onCancel}
                params={applyParam}
              />
              <ApplyAcceptBtn
                content='신청'
                btnClass='apply'
                onClick={onApply}
                params={applyParam}
              />
            </div>
          ) : (
            <div className='apply--content--btn--wrapper'>
              <ApplyAcceptBtn
                content='신청'
                btnClass='apply'
                onClick={onApply}
                params={applyParam}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
