import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { mealPrevDate, mealNextDate, setMeal } from '../../../../actions';
import axios from 'axios';

import Meal from '../../../component/Main/Meal/Meal';

class MealContainer extends Component {
  dateList = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];

  componentDidMount() {
    this.getMeal();
  }

  prevDate = () => {
    this.props.prevDate();
    this.getMeal();
  };

  nextDate = () => {
    this.props.nextDate();
    this.getMeal();
  };

  getMeal = () => {
    const { selectedDate } = this.props;
    const getFormDate = `${selectedDate.getFullYear()}-${
      selectedDate.getMonth() + 1 < 10
        ? '0' + (selectedDate.getMonth() + 1)
        : selectedDate.getMonth() + 1
    }-${
      selectedDate.getDate() < 10
        ? '0' + selectedDate.getDate()
        : selectedDate.getDate()
    }`;
    axios
      .get(`http://ec2.istruly.sexy:5000/meal/${getFormDate}`)
      .then(response => {
        if (response.status === 200) {
          this.props.setMeal(response.data[getFormDate]);
        } else if (response.status === 205) {
          return;
        }
      })
      .catch(err => {
        console.warn(err);
      });
  };

  render() {
    const { selectedDate, breakfast, lunch, dinner } = this.props;
    return (
      <Fragment>
        <Meal
          selectedDate={`${selectedDate.getFullYear()}년
            ${selectedDate.getMonth() + 1}월
            ${selectedDate.getDate()}일
            ${this.dateList[selectedDate.getDay()]}`}
          breakfast={breakfast}
          lunch={lunch}
          dinner={dinner}
          prevDate={this.prevDate}
          nextDate={this.nextDate}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  selectedDate: state.meal.selectedDate,
  breakfast: state.meal.breakfast,
  lunch: state.meal.lunch,
  dinner: state.meal.dinner,
});

const mapDispatchToProps = dispatch => ({
  prevDate: () => dispatch(mealPrevDate()),
  nextDate: () => dispatch(mealNextDate()),
  setMeal: meal => dispatch(setMeal(meal)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MealContainer);
