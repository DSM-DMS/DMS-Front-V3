import React, { Component } from 'react'

import MenuContainer from './Menu/MenuContainer';

class ApplyMainContainer extends Component {
    render() {
        return (
            <div style={{ width: window.screen.width}} className="apply--main--wrapper">
                <MenuContainer />
            </div>
        )
    }
}

export default ApplyMainContainer;