import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setModal, isLogin, autoLogin } from '../../../actions';
import { removeCookie, getCookie } from '../../../lib/cookie';
import { getBasicDatas } from '../../../lib/studentInfoAPI';
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
    const refreshToken = getCookie('RFT');
    if (jwtToken) {
      this.getBasicData(jwtToken, refreshToken);
    } else {
      this.props.history.push('/');
    }
  }

  getBasicData = (token, refreshToken) => {
    getBasicDatas(`Bearer ${token}`, `Bearer ${refreshToken}`).then(
      response => {
        if (response.status === 200) {
          this.props.setStudentBasicData(response.data);
        }
      },
    );
  };

  onLogOutBtn = () => {
    alert('로그아웃에 성공하셨습니다.');
    this.props.isLogin(false);
    removeCookie('JWT');
    removeCookie('RFT');
    this.props.resetStudentData();
    this.props.autoLogin({ id: '', pw: '' });
    this.props.history.push('/');
  };

  goDevelopers = go => {
    const { history } = this.props;

    history.push(`/${go}`);
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
      advice,
    } = this.props.studentData;
    const MyPageCardList = cardList.map(data => (
      <MyPageCard
        kind={data.kind}
        title={data.title}
        setModal={setModal}
        key={`my-pagecard${data.kind}`}
        onLogOutBtn={this.onLogOutBtn}
        goDevelopers={this.goDevelopers}
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
          advice={advice}
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
  autoLogin: data => dispatch(autoLogin(data)),
  setStudentBasicData: basicData => dispatch(setStudentBasicData(basicData)),
  resetStudentData: () => dispatch(resetStudentData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyPageContainer);
