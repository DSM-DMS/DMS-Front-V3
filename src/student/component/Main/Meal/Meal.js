import React from 'react';
import './Meal.scss';

import HeaderContainer from '../../../common/header/HeaderContainer';
import MealButton from './MealButton';
import MealCard from './MealCard';

import mealMan from '../../../../assets/illust/meal-man.png';

const Meal = ({
  selectedDate,
  breakfast,
  lunch,
  dinner,
  prevDate,
  nextDate,
}) => {
  return (
    <div className="meal--wrapper" id="meal">
      <div className="inner--wrapper">
        <HeaderContainer />
        <div className="meal--menu--wrapper">
          <div className="meal--menu--left--wrapper">
            <div className="meal--menu--title--wrapper">
              <span className="meal--menu--title">오늘의 메뉴</span>
              <span className="meal--menu--title--date">{selectedDate}</span>
            </div>
            <div className="meal--menu--content">
              <MealCard time="아침" list={breakfast} />
              <MealCard time="점심" list={lunch} />
              <MealCard time="저녁" list={dinner} />
            </div>
            <div className="meal--menu--button--list">
              <MealButton clickFun={prevDate} text="이전" />
              <MealButton clickFun={nextDate} text="다음" />
            </div>
          </div>
          <img
            src={mealMan}
            alt="meal man"
            className="meal--menu--right--img"
          />
        </div>
      </div>
    </div>
  );
};

export default Meal;
