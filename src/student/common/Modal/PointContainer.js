import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { getCookie } from '../../../lib/cookie';

import Point from './Point';
import PointCard from './PointCard';

class PointContainer extends Component {
  state = {
    pointHistory: [
      { date: '2017-12-17', point: 3, pointType: false, reason: '치킨 먹음' },
      { date: '2017-12-19', point: 2, pointType: true, reason: '치킨 맛있음' },
      { date: '2017-12-19', point: 2, pointType: true, reason: '치킨 맛있음' },
      { date: '2017-12-19', point: 2, pointType: true, reason: '치킨 맛있음' },
      { date: '2017-12-19', point: 2, pointType: true, reason: '치킨 맛있음' },
      { date: '2017-12-19', point: 2, pointType: true, reason: '치킨 맛있음' },
      { date: '2017-12-19', point: 2, pointType: true, reason: '치킨 맛있음' },
    ],
  };

  componentDidMount() {
    axios
      .get('http://ec2.istruly.sexy:5000/info/point', {
        headers: { Authorization: getCookie('jwt') },
      })
      .then(response => {
        if (response.status === 200) {
          this.setState({
            pointHistory: response.data.point_history,
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { pointHistory } = this.state;
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

export default PointContainer;
