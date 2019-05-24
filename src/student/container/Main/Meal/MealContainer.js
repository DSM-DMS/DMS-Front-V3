import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  mealPrevDate,
  mealNextDate,
  setMeal,
  setMealDate,
} from '../../../../actions';
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

  prevDate = () => {
    if (this.bool) {
      this.getMeal(-1, this.props.prevDate);
    }
  };

  nextDate = () => {
    if (this.bool) {
      this.getMeal(1, this.props.nextDate);
    }
  };

  // getMeal = async (addDate, callback) => {
  //   this.bool = false;
  //   const { selectedDate } = this.props;
  //   const needDate = new Date(selectedDate);
  //   needDate.setDate(selectedDate.getDate() + addDate);
  //   const getFormDate = `${needDate.getFullYear()}-${
  //     needDate.getMonth() + 1 < 10
  //       ? `0${needDate.getMonth() + 1}`
  //       : needDate.getMonth() + 1
  //   }-${
  //     needDate.getDate() < 10 ? `0${needDate.getDate()}` : needDate.getDate()
  //   }`;
  //   try {
  //     const response = await getMealDate(getFormDate);
  //     if (response.status === 200) {
  //       callback(response.data[getFormDate]);
  //     }
  //     this.bool = true;
  //     // .catch(err => {
  //     //   console.warn(err);
  //     // });
  //   } catch (e) {
  //     console.log(e);
  //     callback({ breakfast: [], lunch: [], dinner: [] });
  //     this.bool = true;
  //   }
  // };

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
        // prevDate={this.prevDate}
        // nextDate={this.nextDate}
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
  prevDate: meal => dispatch(mealPrevDate(meal)),
  nextDate: meal => dispatch(mealNextDate(meal)),
  setMealDate: date => dispatch(setMealDate(date)),
  setMeal: meal => dispatch(setMeal(meal)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MealContainer);
