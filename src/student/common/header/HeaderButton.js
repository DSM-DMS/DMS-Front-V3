import React from 'react';

import { withRouter } from "react-router-dom";

import { connect } from 'react-redux';
import { setScroll } from '../../../actions';

const HeaderButton = ({title, scroll, location, history, setScroll}) => {
    return (
        <span onClick={() => {
            if(location.pathname === '/' || location.pathname === '/apply' || location.pathname === '/post' || location.pathname === '/extra') {
                setScroll(scroll)
            } else {
                console.log(location.pathname);
                history.push('/'+scroll);
            }
        }} className="header--button--link">
            {title}
        </span>
    );
};

let mapDispatchToProps = (dispatch) => {
    return {
        setScroll: (value) => dispatch(setScroll(value))
    }
}

export default connect(undefined, mapDispatchToProps)(withRouter(HeaderButton));

