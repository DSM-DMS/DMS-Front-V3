import React, { Component } from 'react';

import { getCookie } from '../../../lib/cookie';

import Developers from '../../component/Developers/Developers';
import DevelopersCard from '../../component/Developers/DevelopersCard';

class DevelopersContainer extends Component {
  state = {
    developers: [
      [
        { name: '김동규', job: 'design' },
        { name: '김형규', job: 'Frontend' },
        { name: '오인서', job: 'Frontend' },
        { name: '윤석민', job: 'design' },
        { name: '이종현', job: 'android/cs' },
      ],
      [
        { name: '이성현', job: 'android' },
        { name: '인상민', job: 'backend' },
        { name: '이동기', job: 'ios' },
        { name: '최이삭', job: 'Frontend' },
        { name: '이수하', job: 'Frontend' },
      ],
      [
        { name: '유동근', job: 'cs' },
        { name: '김영찬', job: 'design' },
        { name: '송진우', job: 'android' },
        { name: '이주용', job: 'android' },
        { name: '김윤재', job: 'backend' },
      ],
    ],
  };

  componentDidMount() {
    const refreshToken = getCookie('RFT');

    if (!refreshToken) {
      this.props.history.push('/');
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { developers } = this.state;
    const devCards = developers.map((data, index) => (
      <div className="developers--card--list" key={`devcard-${index}line`}>
        {data.map(data => (
          <DevelopersCard
            name={data.name}
            job={data.job}
            key={`devcard-${data.name}`}
          />
        ))}
      </div>
    ));

    return (
      <Developers devCards={devCards} />
    );
  }
}

export default DevelopersContainer;
