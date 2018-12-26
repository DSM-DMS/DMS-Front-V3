import React from 'react';

import { withRouter } from "react-router-dom";

const HeaderButton = ({title, scroll, location, history}) => {
    return (
        <span onClick={() => {
            if(location.pathname === '/') {
                document.querySelector('#' + scroll).scrollIntoView()
            } else {
                console.log(location.pathname);
                history.push('/'+scroll);
            }
        }} className="header--button--link">
            {title}
        </span>
    );
};

export default withRouter(HeaderButton);

