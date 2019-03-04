import React, { Component } from 'react';

import ApplyTypeSwitch from '../../../../component/Apply/Utils/ApplyTypeSwitch';
import './GuideContentPostContainer.scss';

export default class GuideContentPostContainer extends Component {
  render() {
    const { typeList, selectedType, onSelectType, detailPost } = this.props;
    const postList = detailPost.content.split('\n');
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
        <div className='apply--content--inner--content guide--content--post'>
          <p>제목</p>
          <h2>{detailPost.title}</h2>
          <div>
            {postList.map((text, i) => {
              return <p key={i}>{text}</p>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
