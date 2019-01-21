import React, { Component } from 'react';
import './ApplyMenuContainer.scss'

import ApplyTitle from '../../../component/Apply/ApplyTitle'
import ApplyMenu from '../../../component/Apply/ApplyMenu'

export default class ApplyMenuContainer extends Component {
    render() {
        const {selectedMenu} = this.props;
        return (
            <div className="apply--menu">
                <ApplyTitle />
                <ApplyMenu selectedMenu = {selectedMenu}/>
            </div>
        )
    }
}