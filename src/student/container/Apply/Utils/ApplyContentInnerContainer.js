import React, { Component } from 'react';

import './ApplyContentInnerContainer.scss';
import ApplyTypeSwitch from '../../../component/Apply/Utils/ApplyTypeSwitch';

export default class ApplyContentInnerContainer extends Component {
  render() {
    const { typeList, selectedType, onSelectType } = this.props;

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
      </div>
    );
  }
}
