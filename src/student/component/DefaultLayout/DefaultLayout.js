import React, { Component,Fragment } from 'react';

import LoginModal from '../../common/Login/LoginContainer';

class DefaultLayout extends Component {
    render() {
        return (
            <Fragment>
                <LoginModal />
            </Fragment>
        );
    }
}

export default DefaultLayout;