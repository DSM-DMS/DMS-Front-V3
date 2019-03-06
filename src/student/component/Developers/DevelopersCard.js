import React from 'react';

import { b64EncodeUnicode } from '../../../lib/unicodeBase64';

import './DevelopersCard.scss';

const DevelopersCard = ({ src, name, job }) => {
  return (
    <div className="developers--card--wrapper">
      <img
        src={`https://s3.ap-northeast-2.amazonaws.com/dms.istruly.sexy/DMS-Developers/${encodeURIComponent(
          b64EncodeUnicode(name),
        )}.png`}
        alt=""
        className="developers--card--img"
      />
      <div className="developers--card--description--wrapper">
        <p className="developers--card--description--name">{name}</p>
        <p className="developers--card--description--job">{job}</p>
      </div>
    </div>
  );
};

export default DevelopersCard;
