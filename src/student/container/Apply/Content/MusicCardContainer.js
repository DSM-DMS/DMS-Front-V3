import React from 'react'

import AppliedMusicCard from '../../../component/Apply/content/music/AppliedMusicCard';
import ApplyAddCard from '../../../component/Apply/content/utils/ApplyAddCard'

import './MusicCardContainer.scss';

const MusicCardContainer = ({cardsInfo}) => {
    const musicCards = cardsInfo.map((info, i) => {
        return (
            <AppliedMusicCard title = {info.title} singer = {info.singer} author = {info.author} key = {i}/>
        )
    })

    const isThereAddCard = musicCards.length <= 4;

    return (
        <div className = 'apply--music--card--wrapper'>
            {musicCards}
            {isThereAddCard && <ApplyAddCard />}
        </div>
    )
}

export default MusicCardContainer;