import React, { Component } from 'react';
import MealContainer from '../Meal/MealContainer';

class MainContainer extends Component {
    render() {
        return (
            <div style={{width: window.screen.width}}>
                <MealContainer />
            </div>
        );
    }
}

export default MainContainer;