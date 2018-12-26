import React, { Component, Fragment } from 'react';

import Meal from "../../../component/Meal/Meal";

const dateList = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];

class MealContainer extends Component {
    state = {
        selectedDate: new Date()
    }

    componentDidMount() {
    }

    prevDate = () => {
        const { selectedDate } = this.state;
        const date = selectedDate.getDate();
        this.setState({
            selectedDate: new Date(selectedDate.setDate(date - 1))
        })
    }

    nextDate = () => {
        const { selectedDate } = this.state;
        const date = selectedDate.getDate();
        this.setState({
            selectedDate: new Date(selectedDate.setDate(date + 1))
        })
    }

    render() {
        const { selectedDate } = this.state;
        return (
            <Fragment>
                <Meal selectedDate={selectedDate.getFullYear() + '년 ' + (selectedDate.getMonth()+ 1) + '월 ' + selectedDate.getDate() + '일 ' + dateList[selectedDate.getDay()]} prevDate={this.prevDate} nextDate={this.nextDate}/>
            </Fragment>
        );
    }
}

export default MealContainer;