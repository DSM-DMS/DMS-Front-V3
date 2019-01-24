import React from 'react'
import { connect } from "react-redux";
import { selectMusicCard } from '../../../../actions/index'

import AppliedMusicCard from '../../../component/Apply/content/music/AppliedMusicCard';
import ApplyAddCard from '../../../component/Apply/content/utils/ApplyAddCard'

import './MusicCardContainer.scss';

const MusicCardContainer = (props) => {
    const { cardsInfo, musicCard, onChangeCard } = props;
    const musicCards = cardsInfo.map((info, i) => {
        let selectedClass;
        if(info.id === musicCard)
            selectedClass = 'apply--music--card--selected';
        return (
            <AppliedMusicCard title = {info.musicName} singer = {info.singer} author = {info.studentName} key = {info.id} id = {info.id} selectedClass = {selectedClass} onChangeCard = {onChangeCard}/>
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

const mapStateToProps = (state) => ({
    musicCard: state.ApplyCardSwitch.musicCard
});

const mapDispatchToProps = (dispatch) => ({
    onChangeCard: (musicCard) => dispatch(selectMusicCard(musicCard))
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicCardContainer);