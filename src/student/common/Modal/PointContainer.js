import React, { Component, Fragment } from 'react';
import { getPointCardList } from '../../../lib/studentInfoAPI';
import { connect } from 'react-redux';
import { getCookie } from '../../../lib/cookie';
import { setStudentPointData } from '../../../actions';

import Point from './Point';
import PointCard from './PointCard';

class PointContainer extends Component {
  componentDidMount() {
    this.getPointCards();
  }

  getPointCards = () => {
    const accessToken = getCookie('JWT');
    const refreshToken = getCookie('RFT');
    if (accessToken || refreshToken)
      getPointCardList(accessToken, refreshToken)
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
    pointHistory.reverse();
    const historyCards =
      pointHistory.length === 0 ? (
        <div className="point--card--empty">상벌점 내역이 없습니다.</div>
      ) : (
        pointHistory.map(data => (
          <PointCard
            date={data.date}
            point={data.point}
            pointType={data.pointType}
            reason={data.reason}
            key={`point-card-${data.date}+${data.point}+${data.pointType}+${
              data.reason
            }`}
          />
        ))
      );

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
