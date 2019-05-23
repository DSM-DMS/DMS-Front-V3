import React from 'react';

import './MusicList.scss'

const MusicList = ({data}) => {
    return (
        <div className = "music--list--wrapper">
            <div className = "music--list--day--wrapper">
                {data.day}
            </div>
            <div className = "music--list--info--wrapper">
                <div className = "music--list--info--title--wrapper">
                    <div className = "music--list--info--title">
                        {data.list[0].musicName}
                    </div>
                    <div className = "music--list--info--title">
                        {data.list[1].musicName}
                    </div>
                </div>
                <div className = "music--list--info--artist--wrapper">
                    <div className = "music--list--info--artist">
                        {data.list[0].singer}    
                    </div>
                    <div className = "music--list--info--artist">
                        {data.list[0].singer}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicList;