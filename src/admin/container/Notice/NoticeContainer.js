import React, { Component, Fragment } from "react";

import { noticeGet, noticeDelete } from "../../lib/notice";

import Notice from "../../component/Notice/Notice";
import NoticeList from "../../component/Notice/NoticeList";
import Loading from "../../common/Loading/Loading";

import { withRouter } from "react-router-dom";

class NoticeContainer extends Component {
  TaskData = async () => {
    try {
      const response = await noticeGet("notice");
      this.HandleAfterRequest(response);
    } catch (err) {
      alert("로그인이 필요합니다");
      this.props.history.push("/admin/login");
    }
  };

  HandleAfterRequest = (response) => {
    const { noticeList } = response.data;
    this.setState({
      noticeList,
      loading: false,
    });
  };

  HandleDelete = async (id) => {
    await noticeDelete("notice", id);
    this.TaskData();
  };

  state = {
    noticeList: [],
    loading: true,
  };

  componentDidMount() {
    this.TaskData();
  }

  render() {
    const { noticeList, loading } = this.state;
    const List = noticeList
      .reverse()
      .map((data) => (
        <NoticeList
          HandleDelete={this.HandleDelete}
          data={data}
          key={data.noticeId}
        />
      ));
    return (
      <Fragment>
        {loading && <Loading />}
        <Notice List={List} />
      </Fragment>
    );
  }
}

export default withRouter(NoticeContainer);
