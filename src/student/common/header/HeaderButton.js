import React from 'react';

import { withRouter } from 'react-router-dom';

const HeaderButton = ({ title, scroll, location, history }) => {
  return (
    <span
      onClick={() => {
        if (
          location.pathname === '/' ||
          location.pathname === '/apply' ||
          location.pathname === '/guide' ||
          location.pathname === '/extra'
        ) {
          document
            .querySelector('#' + scroll)
            .scrollIntoView({ behavior: 'smooth' });
        } else {
          history.push('/' + scroll);
        }
      }}
      className="header--button--link"
    >
      {title}
    </span>
  );
};

export default withRouter(HeaderButton);
