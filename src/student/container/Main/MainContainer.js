import React, { Component } from 'react';
import MealContainer from './Meal/MealContainer';
import ApplyContainer from './Apply/ApplyContainer';

class MainContainer extends Component {

    componentDidMount() {
        const { location } = this.props;
        console.log(location.pathname)
        if(location.pathname !== '/'){
            document.querySelector(location.pathname.replace('/', '#')).scrollIntoView({ behavior: 'smooth' })
        }
    }

    render() {
        return (
            <div style={{width: window.screen.width}}>
                <MealContainer />
                <ApplyContainer />
            </div>
        );
    }
}

export default MainContainer;