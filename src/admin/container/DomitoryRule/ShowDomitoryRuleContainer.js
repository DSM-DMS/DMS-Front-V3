import React, { Component } from 'react';
import ShowDomitoryRule from '../../component/DomitoryRule/ShowDomitoryRule'

import { connect } from 'react-redux'

class ShowDomitoryRuleContainer extends Component {
    render() {
        const { match } = this.props
        const { list } = this.props.domitoryrule;
        console.log(this.props)
        return (
            <ShowDomitoryRule match = {match} postData = { list }/>
        );
    }
}

const mapStateToProps = (state) => ({
    domitoryrule: state.domitoryrule
})

export default connect(mapStateToProps)(ShowDomitoryRuleContainer);