import React, { Component, Fragment } from 'react';

import GoingOut from '../../component/GoingOut/GoingOut'
import GoingOutButton from '../../component/GoingOut/GoingOutButton'
import GoingOutClassList from '../../component/GoingOut/GoingOutClassList'

class GointOutContainer extends Component {
    state = {
        checkList : [
            {
                kind : '1학년',
                check : false,
                id : 1
            },
            {
                kind : '2학년',
                check : false,
                id : 2
            },
            {
                kind : '3학년',
                check : false,
                id : 3
            },
        ],
        selectList : [
            {
                kind: '1반'
            },
            {
                kind: '2반'
            },
            {
                kind: '3반'
            },
            {
                kind: '4반'
            },
        ]
    }

    HandleClassButton = (id) => {
        const index = this.state.checkList.findIndex(data => data.id === id)
        const targetData = { 
            ...this.state.checkList[index],
            check : !this.state.checkList[index].check
        }

        this.setState({
            checkList : [
                ...this.state.checkList.slice(0, index),
                targetData,
                ...this.state.checkList.slice(index + 1, this.state.checkList.length)
            ]
        })
    }

    render() {
        const { checkList } = this.state;
        const { selectList } = this.state;
        const selectData = selectList.map(data => {
            return <GoingOutClassList data = {data}>{data.kind}</GoingOutClassList>
        })
        const data = checkList.map(data => {
            return <GoingOutButton onToggle = {this.HandleClassButton} data = {data}>{data.kind}</GoingOutButton>
        })
        return (
            <Fragment>
                <GoingOut selectData = {selectData} data = {data}/>
            </Fragment>
        );
    }
}

export default GointOutContainer;