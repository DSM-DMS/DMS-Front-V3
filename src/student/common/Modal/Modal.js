import React from 'react';
import logoImg from '../../../assets/logo/logo@2x.png';
import exitImg from '../../../assets/icon/ic_exit.png';

import './Modal.scss';

const Login = ({ title, component, subTitle, link, setModal }) => {
  return (
    <div className="modal--wrapper">
      <div className="modal--inner--wrapper">
        <img
          src={exitImg}
          alt="exit"
          className="modal--exit--icon"
          onClick={() => setModal('')}
        />
        <div className="modal--logo--wrapper">
          <img src={logoImg} alt="" className="modal--logo" />
          <span className="modal--logo--title">{title}</span>
        </div>
        <div className="modal--content--wrapper">
          {component}
          <div className="modal--link--wrapper">
            <span>{subTitle}</span>
            <span className="modal--link" onClick={() => setModal(link)}>
              {link}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
