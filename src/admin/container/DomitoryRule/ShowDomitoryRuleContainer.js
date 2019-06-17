import React, { Component, Fragment } from 'react';
import ShowDomitoryRule from '../../component/DomitoryRule/ShowDomitoryRule';
import Loading from '../../common/Loading/Loading';

import { noticeContentGet } from '../../lib/notice';

class ShowDomitoryRuleContainer extends Component {
  state = {
    content: '',
    title: '',
    loading: true,
  };

  TaskData = async () => {
    const { match } = this.props;
    try {
      const response = await noticeContentGet(
        'rule',
        parseInt(match.params.postId),
      );
      const { content, title } = response.data;
      this.setState({
        content: content,
        title: title,
        loading: false,
      });
    } catch (err) {
      alert('로그인이 필요합니다');
      this.props.history.push('/admin/login');
    }
  };

  componentDidMount() {
    this.TaskData();
  }

  render() {
    const data = this.state;
    const { loading } = this.state;
    return (
      <Fragment>
        {loading && <Loading />}
        <ShowDomitoryRule data={data} />
      </Fragment>
    );
  }
}

export default ShowDomitoryRuleContainer;
