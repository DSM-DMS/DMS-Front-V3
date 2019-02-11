import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setModal, isLogin } from '../../../actions';
import { removeCookie, getCookie } from '../../../lib/cookie';
import { setStudentBasicData, resetStudentData } from '../../../actions';

import MyPage from '../../component/MyPage/MyPage';
import MyPageCard from '../../component/MyPage/MyPageCard';

class MyPageContainer extends Component {
  state = {
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

  componentWillMount() {
    const jwtToken = getCookie('JWT');
    if (jwtToken) {
      this.getBasicData(jwtToken);
    } else {
      this.props.history.push('/');
    }
  }

  getBasicData = token => {
    axios
      .get('http://ec2.istruly.sexy:5000/info/basic', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => {
        if (response.status === 200) {
          this.props.setStudentBasicData(response.data);
        }
      });
  };

  onLogOutBtn = () => {
    alert('로그아웃에 성공하셨습니다.');
    this.props.isLogin(false);
    removeCookie('JWT');
    removeCookie('RFT');
    this.props.resetStudentData();
    this.props.history.push('/');
  };

  render() {
    const { cardList } = this.state;
    const { setModal } = this.props;
    const {
      grade,
      classroom,
      number,
      name,
      goodPoint,
      badPoint,
      comment,
    } = this.props.studentData;
    const MyPageCardList = cardList.map(data => (
      <MyPageCard
        kind={data.kind}
        title={data.title}
        setModal={setModal}
        key={`my-pagecard${data.kind}`}
        onLogOutBtn={this.onLogOutBtn}
      />
    ));
    return (
      <Fragment>
        <MyPage
          grade={grade}
          classroom={classroom}
          number={number}
          name={name}
          goodPoint={goodPoint}
          badPoint={badPoint}
          comment={comment}
          myPageCardList={MyPageCardList}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  studentData: state.studentData,
});

const mapDispatchToProps = dispatch => ({
  setModal: value => dispatch(setModal(value)),
  isLogin: bool => dispatch(isLogin(bool)),
  setStudentBasicData: basicData => dispatch(setStudentBasicData(basicData)),
  resetStudentData: () => dispatch(resetStudentData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyPageContainer);
