import React from 'react'

import AppliedMusicCard from '../../../component/Apply/content/music/AppliedMusicCard';

import './MusicCardContainer.scss';

const MusicCardContainer = ({cardsInfo}) => {
    const musicCards = cardsInfo.map((info, i) => {
        return (
            <AppliedMusicCard title = {info.title} singer = {info.singer} author = {info.author} key = {i}/>
        )
    })

    return (
        <div className = 'apply--music--card--wrapper'>
            {musicCards}
        </div>
    )
}

export default MusicCardContainer;