import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setModal } from '../../../../actions';

import Extra from '../../../component/Main/Extra/Extra';
import ExtraCard from '../../../component/Main/Extra/ExtraCard';
import { getCookie } from '../../../../lib/cookie';

import imgSurvey from '../../../../assets/img/img_survey.png';
import imgBug from '../../../../assets/img/img_bug.png';
import imgBroken from '../../../../assets/img/img_broken.png';

class ExtraContainer extends Component {
  state = {
    extracardList: [
      {
        type: 'survey',
        src: imgSurvey,
        title: '설문조사',
      },
      {
        type: 'report',
        src: imgBug,
        title: '버그신고',
      },
      {
        type: 'broken',
        src: imgBroken,
        title: '시설물 고장 신고',
      },
    ],
  };

  onClickModal = (e, val) => {
    if (getCookie('JWT')) {
      e.preventDefault();
      this.props.setModal(val);
    } else {
      alert('로그인 후 시도해주세요.');
      this.props.setModal('로그인');
    }
  };

  linkToSurvey = val => {
    this.props.history.push(val);
  };

  render() {
    const { extracardList } = this.state;
    const cardList = extracardList.map(data => (
      <ExtraCard
        type={data.type}
        src={data.src}
        title={data.title}
        key={data.type + '-extra-card'}
        onClickModal={this.onClickModal}
        linkToSurvey={this.linkToSurvey}
      />
    ));
    return (
      <Fragment>
        <Extra cardList={cardList} />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setModal: val => dispatch(setModal(val)),
});

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(ExtraContainer));
