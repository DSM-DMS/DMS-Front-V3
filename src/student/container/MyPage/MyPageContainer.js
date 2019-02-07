import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setModal } from '../../../actions';

import MyPage from '../../component/MyPage/MyPage';
import MyPageCard from '../../component/MyPage/MyPageCard';

class MyPageContainer extends Component {
  state = {
    grade: 3,
    classroom: 1,
    number: 4,
    name: '김동규',
    goodPoint: 15,
    badPoint: 19,
    comment: '긴장타세요 퇴사가 코앞입니다.',
    cardList: [
      {
        kind: 'score',
        title: '상벌점 내역 확인',
      },
      {
        kind: 'changepassword',
        title: '비밀번호 변경',
      },
      {
        kind: 'logout',
        title: '로그아웃',
      },
      {
        kind: 'developers',
        title: '개발자 소개',
      },
    ],
  };

  render() {
    const { cardList } = this.state;
    const { setModal } = this.props;
    const MyPageCardList = cardList.map(data => (
      <MyPageCard
        kind={data.kind}
        title={data.title}
        setModal={setModal}
        key={`my-pagecard${data.kind}`}
      />
    ));
    return (
      <Fragment>
        <MyPage
          grade={this.state.grade}
          classroom={this.state.classroom}
          number={this.state.number}
          name={this.state.name}
          goodPoint={this.state.goodPoint}
          badPoint={this.state.badPoint}
          comment={this.state.comment}
          myPageCardList={MyPageCardList}
        />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setModal: value => dispatch(setModal(value)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(MyPageContainer);
