import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStayType } from '../../../../actions/ApplyActions';

import './StayApplyContainer.scss';

import StayCardContainer from './StayCardContainer';
import ApplyAcceptBtn from '../../../component/Apply/content/ApplyAcceptBtn';

import { getStayInform, submitStayInform } from '../../../../lib/applyAPI';
import { getCookie } from '../../../../lib/cookie';

class StayApplyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      loading: false
    };
  }

  getStayInform = async () => {
    if (this.state.loading) return;
    this.setState({
      loading: true
    });

    try {
      const response = await getStayInform(getCookie('JWT'));
      this.props.onChangeStayType(response.data.value);
    } catch (e) {
      console.log(e);
    }
    this.setState({
      loading: false
    });
  };

  componentDidMount() {
    this.getStayInform();
  }

  onCancled = () => {
    this.setState({
      isClicked: false
    });
  };

  onClickCard = () => {
    this.setState({
      isClicked: true
    });
  };

  onSubmitStayInform = async (token, value) => {
    try {
      const response = await submitStayInform(token, value);
      switch (response.status) {
        case 201:
          alert('잔류신청 성공!');
          break;
        case 204:
          alert('잔류신청에 실패했습니다. (신청 가능 시간 아님)');
          break;
        default:
      }
    } catch (e) {
      console.log(e);
      switch (e.response.status) {
        case 403:
          alert('권한이 없습니다.');
          break;
        case 409:
          alert('잔류신청 시간이 아닙니다.');
          break;
        default:
      }
    }
  };

  onClickSubmit = () => {
    const value = this.props.stayType;
    this.onSubmitStayInform(getCookie('JWT'), value);
  };

  render() {
    const { stayType, onChangeStayType } = this.props;
    const { isClicked } = this.state;
    return (
      <div className='apply--stay--wrapper'>
        <p className='unselectable apply--title'>잔류 신청</p>
        <StayCardContainer
          selectedType={stayType}
          onChangeType={onChangeStayType}
          onClickCard={this.onClickCard}
        />
        {isClicked && (
          <div className='apply--extension--accept--btnlist'>
            <ApplyAcceptBtn
              type='apply--extension--cancle--btn'
              title='취소'
              onClickFunc={this.onCancled}
            />
            <ApplyAcceptBtn
              type='apply--extension--accept--btn'
              title='신청'
              onClickFunc={this.onClickSubmit}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stayType: state.ApplyTypeSwitch.stayType
});

const mapDispatchToProps = dispatch => ({
  onChangeStayType: stayType => dispatch(setStayType(stayType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StayApplyContainer);
