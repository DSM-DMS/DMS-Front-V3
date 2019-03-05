import React, { Component, Fragment } from 'react';

import Developers from '../../component/Developers/Developers';
import DevelopersCard from '../../component/Developers/DevelopersCard';

class DevelopersContainer extends Component {
  state = {
    developers: [
      [
        { name: '오인서', job: 'Frontend', src: '' },
        { name: '김형규', job: 'Frontend', src: '' },
        { name: '최이삭', job: 'Frontend', src: '' },
        { name: '이수하', job: 'Frontend', src: '' },
      ],
      [
        { name: '이성현', job: 'android', src: '' },
        { name: '이종현', job: 'android/cs', src: '' },
        { name: '이주용', job: 'android', src: '' },
        { name: '송진우', job: 'android', src: '' },
      ],
      [
        { name: '이동기', job: 'ios', src: '' },
        { name: '유동근', job: 'cs', src: '' },
        { name: '인상민', job: 'backend', src: '' },
        { name: '김윤재', job: 'backend', src: '' },
      ],
      [
        { name: '김동규', job: 'design', src: '' },
        { name: '윤석민', job: 'design', src: '' },
        { name: '김영찬', job: 'design', src: '' },
      ],
    ],
  };

  render() {
    const { developers } = this.state;
    const devCards = developers.map((data, index) => (
      <p className="developers--card--list">
        {data.map(data => (
          <DevelopersCard src={data.src} name={data.name} job={data.job} />
        ))}
      </p>
    ));

    return (
      <Fragment>
        <Developers devCards={devCards} />
      </Fragment>
    );
  }
}

export default DevelopersContainer;
