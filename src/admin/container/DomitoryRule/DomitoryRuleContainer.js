import React, { Component } from 'react';

import DomitoryRule from '../../component/DomitoryRule/DomitoryRule';
import DomitoryRuleList from '../../component/DomitoryRule/DomitoryRuleList'

import { connect } from 'react-redux';

class DomitoryRuleContainer extends Component {
/*
    state = {
        postData : [
            {
                number: 1,
                title: '우정관 점호 안내',
                author: '사감부'
            },
            {
                number: 2,
                title: '우정관 외출, 외박(귀가) 규정',
                author: '사감부'
            }
        ]
    }
*/
    

    render() {
        console.log(this.props)
        const { list } = this.props.domitoryrule;
        const postList = list.map( data => 
            <DomitoryRuleList data = {data} key = {data.number}/>
        )
        return (
            <DomitoryRule postList = {postList}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        domitoryrule: state.domitoryrule
    }
};

export default connect(mapStateToProps)(DomitoryRuleContainer);