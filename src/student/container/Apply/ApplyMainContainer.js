import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import ApplyMenuContainer from './Menu/ApplyMenuContainer';
import ExtensionApplyContainer from './Content/ExtensionApplyContainer'
import GoingoutApplyContainer from './Content/GoingoutApplyContainer'
import MusicApplyContainer from './Content/MusicApplyContainer'
import StayApplyContainer from './Content/StayApplyContainer'

import { getCookie } from '../../../lib/cookie'

import './ApplyMainContainer.scss'

class ApplyMainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: this.props.location.pathname
        }

        this.props.history.listen((location, action) => {
            this.setState({
                path:location.pathname
            })
        });
    }

    componentDidMount() {
        const { history } = this.props;

        if(!getCookie("JWT")) {
            alert("로그인이 필요합니다.");
            history.push("")
        }
    }

    render() {
        const {path} = this.state;
        const type = path.substring(7, path.length);
        const containerType = {
            extension: <ExtensionApplyContainer/>,
            goingout: <GoingoutApplyContainer/>,
            music: <MusicApplyContainer/>,
            stay: <StayApplyContainer/>
        }
        const content = containerType[type];

        return (
            <div style={{ width: window.screen.width}} className="apply--main--wrapper">
                <ApplyMenuContainer menuType = 'apply' selectedMenu = {type}/>
                {content}
            </div>
        )
    }
}

export default withRouter(ApplyMainContainer);