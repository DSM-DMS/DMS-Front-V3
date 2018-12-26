import React from 'react';
import './Meal.scss';

import HeaderContainer from '../../common/header/HeaderContainer';
import MealButton from './MealButton';
import MealCard from './MealCard';

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
                            <MealCard time="아침" list={['차조밥','들깨감자국','왕만두찜','초간장','갈치구이','진미채버터구이','석박지']}/>
                            <MealCard time="점심" list={['참치마요덮밥','미소국','사과','크로크무슈','배추김치','복숭아아이스티']}/>
                            <MealCard time="저녁" list={['차조밥','통배추된장국','닭칠리소스오븐구이','우렁야채초무침','수제식혜','백김치']}/>
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