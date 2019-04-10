import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { mealPrevDate, mealNextDate, setMeal } from '../../../../actions';
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

  componentDidMount() {
    // this.getMeal('currentMeal', 0);
    // this.getMeal('nextMeal', 1);
    // this.getMeal('prevMeal', -1);
    this.settingMeal();
  }

  settingMeal = async () => {
    const currentMeal = await this.getMeal(0);
    this.props.setMeal({ mealObj: currentMeal, when: 'currentMeal' });
    const nextMeal = await this.getMeal(1);
    this.props.setMeal({ mealObj: nextMeal, when: 'nextMeal' });
    const prevMeal = await this.getMeal(-1);
    this.props.setMeal({ mealObj: prevMeal, when: 'prevMeal' });
  };

  prevDate = async () => {
    this.props.prevDate(await this.getMeal(-2));
    // this.getMeal('prevMeal', -1);
  };

  nextDate = async () => {
    this.props.nextDate(await this.getMeal(2));
    // this.getMeal('nextMeal', 1);
  };

  getMeal = async (/*when, */ addDate) => {
    const { selectedDate } = this.props;
    let mealObj;
    const needDate = new Date(
      new Date().setDate(selectedDate.getDate() + addDate),
    );
    const getFormDate = `${needDate.getFullYear()}-${
      needDate.getMonth() + 1 < 10
        ? `0${needDate.getMonth() + 1}`
        : needDate.getMonth() + 1
    }-${
      needDate.getDate() < 10 ? `0${needDate.getDate()}` : needDate.getDate()
    }`;
    let response = await getMealDate(getFormDate);
    if (response.status === 200) {
      mealObj = response.data[getFormDate];
    }
    return mealObj;
    // .then(response => {
    //   if (response.status === 200) {
    //     this.props.setMeal({
    //       mealObj: response.data[getFormDate],
    //       when: when,
    //     });
    //     return response.data[getFormDate];
    //   } else if (response.status === 205) {
    //     return;
    //   }
    // })
    // .catch(err => {
    //   console.warn(err);
    // });
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
  breakfast: state.meal.currentMeal.breakfast,
  lunch: state.meal.currentMeal.lunch,
  dinner: state.meal.currentMeal.dinner,
});

const mapDispatchToProps = dispatch => ({
  prevDate: meal => dispatch(mealPrevDate(meal)),
  nextDate: meal => dispatch(mealNextDate(meal)),
  setMeal: meal => dispatch(setMeal(meal)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MealContainer);
