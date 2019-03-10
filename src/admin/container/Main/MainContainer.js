import React, { Component } from 'react';
import Main from '../../component/Main/Main';
import MainSelectList from '../../component/Main/MainSelectList'
import axios from 'axios';

class MainContainer extends Component {
    
    state = {
        select: '다운로드 할 사항을 선택해주세요.',
        selectKind: null,
        selected: false,
        selectListState: false,
        selectList: [
            {
                kind: 'stay',
                title: '잔류신청'
            },
            {
                kind: 'extenstion/11',
                title: '11시 연장'
            },
            {
                kind: 'extension/12',
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
                this.setState({
                    selectKind: this.state.selectList[0].kind
                })
                break
            case '11시 연장':
            this.setState({
                    selectKind: this.state.selectList[1].kind
                })
                break
            case '12시 연장':
            this.setState({
                    selectKind: this.state.selectList[2].kind
                })
                break
            case '외출 신청':
            this.setState({
                    selectKind: this.state.selectList[3].kind
                })
                break
            default :
                break
        }

        axios
            .get(`http://ec2.istruly.sexy:5001/excel/${this.state.selectKind}`, {
        headers: { Authorization: `Bearer `},
      })
      .then(response => {
        if (response.status === 200) {
            console.log(response)
        }
      })
      .catch(err => {
        console.log(err);
      });
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