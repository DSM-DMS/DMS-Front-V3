import React from 'react';

import { withRouter } from "react-router-dom";

import { connect } from 'react-redux';
import { setSection } from '../../../actions';

const HeaderButton = ({title, scroll, location, history, setSection}) => {
    return (
        <span onClick={() => {
            if(location.pathname === '/' || location.pathname === '/apply' || location.pathname === '/post' || location.pathname === '/extra') {
                setSection(scroll)
            } else {
                console.log(location.pathname);
                history.push('/'+scroll);
            }
        }} className="header--button--link">
            {title}
        </span>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSection: (value) => dispatch(setSection(value))
    }
}

export default connect(undefined, mapDispatchToProps)(withRouter(HeaderButton));

