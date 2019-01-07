import React from 'react';

import './Footer.scss';

import logo from '../../../../assets/logo/logo.png';
import icGithub from '../../../../assets/icon/ic_github.png';
import icFacebook from '../../../../assets/icon/ic_facebook.png';

const Footer = ({cardList}) => {
    return (
        <div className="footer--wrapper" id="footer">
            <div className="footer--inner--wrapper">
                <div className="footer--content--wrapper">
                    <div className="footer--content--inner--wrapper">
                        {cardList}
                    </div>
                </div>
                <div className="footer--bottom--wrapper">
                    <div className="footer--bottom--copyright--wrapper">
                        <img src={logo} alt="" className="footer--bottom--copyright--logo"/>
                        <span className="footer--bottom--copyright">
                        &#9400;2018 Team DMS</span>
                    </div>
                    <div className="footer--bottom--link--wrapper">
                        <a href="https://www.facebook.com/DMSforDSM">
                            <img src={icFacebook} alt="" className="footer--bottom--link"/>
                        </a>
                        <a href="https://github.com/dsm-DMS/">
                            <img src={icGithub} alt="" className="footer--bottom--link"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;