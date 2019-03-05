import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getCookie } from '../../../lib/cookie';
import { setStudentPointData } from '../../../actions';

import Point from './Point';
import PointCard from './PointCard';

class PointContainer extends Component {
  componentWillMount() {
    const jwtToken = getCookie('JWT');
    this.getPointCards(jwtToken);
  }

  getPointCards = token => {
    axios
      .get('https://dms-api.istruly.sexy/info/point', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => {
        if (response.status === 200) {
          this.props.setStudentPointData(response.data.point_history);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { pointHistory } = this.props;
    const historyCards = pointHistory.map(data => (
      <PointCard
        date={data.date}
        point={data.point}
        pointType={data.pointType ? 'point--card--good' : 'point--card--bad'}
        reason={data.reason}
      />
    ));

    return (
      <Fragment>
        <Point setModal={this.props.setModal} historyCards={historyCards} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  pointHistory: state.studentData.pointHistory,
});

const mapDispatchToProps = dispatch => ({
  setStudentPointData: pointData => dispatch(setStudentPointData(pointData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PointContainer);
