import React from 'react';
import './Meal.scss';

import HeaderContainer from '../../common/header/HeaderContainer';
import MealButton from './MealButton';

import mealMan from '../../../assets/icon/meal-man.png'

const Meal = ({selectedDate, prevDate, nextDate}) => {
    return (
        <div className="meal--wrapper" id="meal">
            <div className="meal--inner--wrapper">
                <HeaderContainer />
                <div className="meal--menu--wrapper">
                    <div className="meal--menu--left--wrapper">
                        <div className="meal--menu--title--wrapper">
                            <span className="meal--menu--title">오늘의 메뉴</span>
                            <span className="meal--menu--title--date">{selectedDate}</span>
                        </div>
                        <div className="meal--menu--content">

                        </div>
                        <div className="meal--menu--button--list">
                            <MealButton clickFun={prevDate} text='이전'/>
                            <MealButton clickFun={nextDate} text='다음'/>
                        </div>
                    </div>
                    <img src={mealMan} alt="meal man" className="meal--menu--right--img"/>
                </div>
            </div>
        </div>
    );
};

export default Meal;