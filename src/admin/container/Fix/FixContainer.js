import React, { Component } from 'react';
import Fix from '../../component/Fix/Fix';

import FixList from '../../component/Fix/FixList';

class FixContainer extends Component {
    id = 1;

    state = {
        data : [
            {
                name : '이주용',
                content : '승우형의 발냄새가 너무 심해요.',
                room : '421',
                id : this.id
            }
        ]
    }

    render() {
        const { data } = this.state;
        const fixList = data.map( data =>
            <FixList data = {data} key = {this.id++} />
        )
        return (
            <Fix fixList = {fixList}/>
        );
    }
}

export default FixContainer;