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
      onApply
    } = this.props;

    let content = null;

    switch (applyType) {
      case 'extension':
        content = (
          <ExtensionContent time={selectedType} classNum={selectedMenu} />
        );
        break;
      case 'goingout':
        content = <GoingoutContent />;
        break;
      case 'stay':
        content = <StayContent selectedMenu={selectedMenu} />;
        break;
      case 'music':
        content = <MusicContent />;
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
                params={selectedType}
              />
              <ApplyAcceptBtn
                content='신청'
                btnClass='apply'
                onClick={onApply}
                params={selectedType}
              />
            </div>
          ) : (
            <div className='apply--content--btn--wrapper'>
              <ApplyAcceptBtn
                content='신청'
                btnClass='apply'
                onClick={onApply}
                params={selectedMenu}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
