import React, { Component } from 'react';

import ApplyTypeSwitch from '../../../../component/Apply/Utils/ApplyTypeSwitch';


export default class ApplyContentInnerContainer extends Component {
  render() {
    const {
      applyType,
      typeList,
      selectedType,
      onSelectType,
      selectedMenu,
    } = this.props;

    let content = null;

    return (
      <div className='apply--content--inner--wrapper'>
        <div className='apply--content--inner--type--switch--wrapper'>
          <ApplyTypeSwitch
            content={typeList}
            selectedType={selectedType}
            onSelectType={onSelectType}
          />
        </div>
        <div className='apply--content--inner--content'>{content}</div>
      </div>
    );
  }
}
