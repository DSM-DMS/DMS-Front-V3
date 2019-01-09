import React from 'react';

import './Manage.scss'

<<<<<<< HEAD
import gears from '../../../assets/icon/ic_gears.png'

=======
>>>>>>> a78b4390810b356f1fca223edd605b069b6888e9
const Manage = ({cardList}) => {
    return (
        <div className = "manage--wrapper">
            <div className = "manage--inner--wrapper">
                <div className = "manage--logo--wrapper">
<<<<<<< HEAD
                    <img className = "manage--logo--icon" src = {gears} alt = "gears"/>
=======
                    <img className = "manage--logo--icon"/>
>>>>>>> a78b4390810b356f1fca223edd605b069b6888e9
                    <div className = "manage--logo--text">
                        Management
                    </div>
                </div>
                <div className = "manage--card--wrapper">
                    {cardList}
                </div>
            </div>
        </div>
    );
};

export default Manage;