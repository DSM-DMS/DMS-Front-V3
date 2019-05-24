import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setMeal, setMealDate } from '../../../../actions';
import { getMealDate } from '../../../../lib/mealAPI';

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

  bool = true;

  debounceCheck = null;

  componentDidMount() {
    this.getMeal(0, this.props.setMeal);
  }

  debounce = (callback, milliseconds) => {
    return () => {
      clearTimeout(this.debounceCheck);
      this.debounceCheck = setTimeout(() => {
        callback();
      }, milliseconds);
    };
  };

  changeDate = date => {
    this.props.setMealDate(date);
    this.debounce(this.getMeal, 200)();
  };

  getMeal = () => {
    const { selectedDate, setMeal } = this.props;
    const getFormDate = `${selectedDate.getFullYear()}-${
      selectedDate.getMonth() + 1 < 10
        ? `0${selectedDate.getMonth() + 1}`
        : selectedDate.getMonth() + 1
    }-${
      selectedDate.getDate() < 10
        ? `0${selectedDate.getDate()}`
        : selectedDate.getDate()
    }`;
    getMealDate(getFormDate)
      .then(res => {
        setMeal(res.data[getFormDate]);
      })
      .catch(err => {
        setMeal({ breakfast: [], lunch: [], dinner: [] });
      });
  };

  render() {
    const { selectedDate, breakfast, lunch, dinner } = this.props;

    return (
      <Meal
        selectedDate={`${selectedDate.getFullYear()}년
            ${selectedDate.getMonth() + 1}월
            ${selectedDate.getDate()}일
            ${this.dateList[selectedDate.getDay()]}`}
        breakfast={breakfast}
        lunch={lunch}
        dinner={dinner}
        changeDate={this.changeDate}
      />
    );
  }
}

const mapStateToProps = state => ({
  selectedDate: state.meal.selectedDate,
  breakfast: state.meal.meal.breakfast,
  lunch: state.meal.meal.lunch,
  dinner: state.meal.meal.dinner,
});

const mapDispatchToProps = dispatch => ({
  setMealDate: date => dispatch(setMealDate(date)),
  setMeal: meal => dispatch(setMeal(meal)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MealContainer);
