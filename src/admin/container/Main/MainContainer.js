import React, { Component } from 'react';
import Main from '../../component/Main/Main';
import MainSelectList from '../../component/Main/MainSelectList'

class MainContainer extends Component {
    
    state = {
        select: '다운로드 할 사항을 선택해주세요.',
        selected: false,
        selectListState: false,
        selectList: [
            {
                kind: 'apply',
                title: '잔류신청'
            },
            {
                kind: '11extension',
                title: '11시 연장'
            },
            {
                kind: '12extension',
                title: '12시 연장'
            },
            {
                kind: 'goingout',
                title: '외출 신청'
            }
        ],
        selectOff: false
    };

    onSelectOff = () => {
        this.setState({
            selectOff: true
        })
    }

    onSelected = () => {
        this.setState({
            selected : true
        })
    }

    onSelectBoxClick = () => {
        this.setState({
            selectListState: !this.state.selectListState,
            selectOff: false
        })
    }

    onSelect = (title) => {
        this.setState({
            select: title,
            selected: true,
            selectListState: !this.state.selectListState
        })
    }

    onDownload = () => {
        switch (this.state.select) {
            case '잔류신청':
                console.log('잔류신청')
                break
            case '11시 연장':
                console.log('11시 연장')
                break
            case '12시 연장':
                console.log('12시 연장')
                break
            case '외출 신청':
                console.log('외출 신청')
                break
            default :
                break
        }
    }

    render() {
        const { selectOff, select, selected, selectList, selectListState } = this.state;
        const list = selectList.map(data => (
            <MainSelectList onSelect = {this.onSelect} selectData={data} key={data.kind}/>
        ))
        return (
            <Main onDownload = {this.onDownload} selectOff = {selectOff} onSelectOff = {this.onSelectOff} selectListState = {selectListState} list = {list} select={select} selected = {selected} onSelectBoxClick = {this.onSelectBoxClick}/>
        );
    }
}

export default MainContainer;