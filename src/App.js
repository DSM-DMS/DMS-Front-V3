import React, { Component, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.scss";
import { autoLogin, isLogin } from "./actions";
import { getCookie } from "./lib/cookie";
import { getBasicDatas, getPointCardList } from "./lib/studentInfoAPI";
import { setStudentBasicData, setStudentPointData } from "./actions";

import MainContainer from "./student/container/Main/MainContainer";
import ApplyMainContainer from "./student/container/Apply/ApplyMainContainer";
import StudentDefaultLayout from "./student/common/DefaultLayout/DefaultLayout";
import MyPageContainer from "./student/container/MyPage/MyPageContainer";
import GuideMainContainer from "./student/container/Guide/GuideMainContainer";
import FixContainer from "./admin/container/Fix/FixContainer";
import FixDetailContainer from "./admin/container/Fix/FixDetailContainer";
import LoginContainer from "./admin/container/Login/LoginContainer";
import ShowNoticeContainer from "./admin/container/Notice/ShowNoticeContainer";
import GoingOutContainer from "./admin/container/GoingOut/GointOutContainer";
import DormitoryRuleContainer from "./admin/container/DomitoryRule/DomitoryRuleContainer";
import DormitoryRuleWriteContainer from "./admin/container/DomitoryRule/DomitoryRuleWriteContainer";
import DormitoryRuleEditContainer from "./admin/container/DomitoryRule/DomitoryRuleEditContainer";
import CommonDesign from "./admin/common/commonDesign/CommonDesign";
import ShowDormitoryRuleContainer from "./admin/container/DomitoryRule/ShowDomitoryRuleContainer";
import NoticeContainer from "./admin/container/Notice/NoticeContainer";
import NoticeWriteContainer from "./admin/container/Notice/NoticeWriteContainer";
import NoticeEditContainer from "./admin/container/Notice/NoticeEditContainer";
import AdminMainContainer from "./admin/container/Main/AdminMainContainer";
import MusicContainer from "./admin/container/Music/MusicContainer";

const DevelopersContainer = React.lazy(() =>
  import("./student/container/Developers/DevelopersContainer")
);

class App extends Component {
  componentDidMount() {
    if (
      (navigator.appName === "Netscape" &&
        navigator.userAgent.search("Trident") !== -1) ||
      navigator.userAgent.indexOf("msie") !== -1
    ) {
      alert(
        "인터넷 익스플로러 브라우저 입니다.\n DMS는 공식적으로 IE를 지원하지 않습니다."
      );
    }

    this.loginApi();
  }

  loginApi = () => {
    const accessToken = getCookie("JWT");
    const refreshToken = getCookie("RFT");

    if (accessToken || refreshToken) {
      getBasicDatas(accessToken, refreshToken)
        .then((res) => {
          if (res.status === 200) {
            this.props.setStudentBasicData(res.data);
            this.props.isLogin(true);

            getPointCardList(getCookie("JWT"), refreshToken).then(
              (response) => {
                if (response.status === 200) {
                  this.props.setStudentPointData(response.data.point_history);
                }
              }
            );
          }
        })
        .catch((err) => {
          if (err === "expired Token") {
            // hmm...
          }
        });
    }
  };

  render() {
    if (
      (navigator.appName === "Netscape" &&
        navigator.userAgent.search("Trident") !== -1) ||
      navigator.userAgent.indexOf("msie") !== -1
    ) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            color: "red",
            height: "100vh",
          }}
        >
          IE를 지원하지 않습니다. 타 브라우저로 접속해주세요.
        </div>
      );
    }
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading..</div>}>
          <Switch>
            <Route path="/admin" component={AdminMainContainer} exact />
            <Route
              path="/apply/extension"
              component={ApplyMainContainer}
              exact
            />
            <Route
              path="/apply/goingout"
              component={ApplyMainContainer}
              exact
            />
            <Route path="/apply/stay" component={ApplyMainContainer} exact />
            <Route path="/apply/music" component={ApplyMainContainer} exact />
            <Route path="/guide/faq" component={GuideMainContainer} exact />
            <Route path="/guide/notice" component={GuideMainContainer} exact />
            <Route path="/guide/rule" component={GuideMainContainer} exact />
            <Route
              path="/developers"
              component={() => <DevelopersContainer />}
              exact
            />
            <Route path="/admin/login" component={LoginContainer} exact />
            <Route
              path="/admin/:uri?"
              render={() => (
                <CommonDesign>
                  <Switch>
                    <Route
                      path="/admin/domitoryrule"
                      component={DormitoryRuleContainer}
                      exact
                    />
                    <Route
                      path="/admin/domitoryrule/write"
                      component={DormitoryRuleWriteContainer}
                      exact
                    />
                    <Route
                      path="/admin/domitoryrule/edit/:postId"
                      component={DormitoryRuleEditContainer}
                      exact
                    />
                    <Route
                      path="/admin/domitoryrule/:postId"
                      component={ShowDormitoryRuleContainer}
                    />
                    <Route
                      path="/admin/notice"
                      component={NoticeContainer}
                      exact
                    />
                    <Route
                      path="/admin/notice/write"
                      component={NoticeWriteContainer}
                      exact
                    />
                    <Route
                      path="/admin/notice/edit/:postId"
                      component={NoticeEditContainer}
                      exact
                    />
                    <Route
                      path="/admin/notice/:postId"
                      component={ShowNoticeContainer}
                    />
                    <Route path="/admin/fix" component={FixContainer} exact />
                    <Route
                      path="/admin/fix/:uri"
                      component={FixDetailContainer}
                      exact
                    />
                    <Route
                      path="/admin/music"
                      component={MusicContainer}
                      exact
                    />
                    <Route
                      path="/admin/goingout"
                      component={GoingOutContainer}
                      exact
                    />
                    <Redirect to="/admin/login" />
                  </Switch>
                </CommonDesign>
              )}
            />
            <Route
              path="/:uri?"
              render={() => (
                <StudentDefaultLayout>
                  <Switch>
                    <Route path="/" component={MainContainer} exact />
                    <Route path="/apply" component={MainContainer} exact />
                    <Route path="/guide" component={MainContainer} exact />
                    <Route path="/extra" component={MainContainer} exact />
                    <Route path="/mypage" component={MyPageContainer} exact />
                  </Switch>
                </StudentDefaultLayout>
              )}
            />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.login.id,
  pw: state.login.pw,
});

const mapDispatchToProps = (dispatch) => ({
  autoLogin: (val) => dispatch(autoLogin(val)),
  isLogin: (bool) => dispatch(isLogin(bool)),
  setStudentBasicData: (basicData) => dispatch(setStudentBasicData(basicData)),
  setStudentPointData: (pointData) => dispatch(setStudentPointData(pointData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
