import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMusicDate } from '../../../../actions/ApplyActions';
import { getMusicList, submitMusic } from '../../../../lib/applyAPI';
import { getCookie } from '../../../../lib/cookie';

import './MusicApplyContainer.scss';

import ApplyExtensionBtn from '../../../component/Apply/content/ApplyExtensionBtn';
import MusicCardContainer from './MusicCardContainer';
import MusicSubmitCard from '../../../component/Apply/content/music/MusicSubmitCard';

class MusicApplyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayType: [
        { date: '월요일', val: 'mon' },
        { date: '화요일', val: 'tue' },
        { date: '수요일', val: 'wed' },
        { date: '목요일', val: 'thu' },
        { date: '금요일', val: 'fri' }
      ],
      cardsInfo: null,
      isMusicSubmitOpened: false,
      loading: false,
      selectedDate: ''
    };
  }

  getCards = async () => {
    if (this.state.loading) return;
    this.setState({
      loading: true
    });

    try {
      const response = await getMusicList(getCookie('JWT'));
      const musicList = response.data;

      this.setState({
        cardsInfo: musicList
      });
    } catch (e) {
      alert('error');
      console.log('error: ' + e);
    }
    this.setState({
      loading: false
    });
  };

  componentDidMount() {
    this.getCards();
  }

  onApplyMusic = () => {
    this.setState({
      isMusicSubmitOpened: true
    });
  };

  onExitSubmit = () => {
    this.setState({
      isMusicSubmitOpened: false
    });
  };

  onSubmitMusic = async (title, artist) => {
    if (title === '' || artist === '') {
      alert('음악 제목 혹은 아티스트 이름을 적지 않았습니다.');
      return;
    }
    await submitMusic(getCookie('JWT'), this.dateToNum(this.props.musicDate), artist, title);
    this.onExitSubmit();
    await this.getCards();
  };

  dateToNum = date => {
    switch (date) {
      case 'mon':
        return 0;
      case 'tue':
        return 1;
      case 'wed':
        return 2;
      case 'thu':
        return 3;
      case 'fri':
        return 4;
      default:
        return 0;
    }
  };

  render() {
    console.log(this.state.cardsInfo);
    const { musicDate, onChangeDate } = this.props;
    const musicBtnList = this.state.dayType.map((type, i) => {
      let selectedClass = undefined;
      if (type.val === musicDate)
        selectedClass = 'apply--extens--btn--selected';
      return (
        <ApplyExtensionBtn
          content={type.date}
          key={i}
          selected={selectedClass}
          onChangeType={onChangeDate}
          val={type.val}
        />
      );
    });

    return (
      <div className='apply--music--wrapper'>
        <p className='unselectable apply--title'>기상음악 신청</p>
        <div className='apply--music--btnlist'>{musicBtnList}</div>
        {this.state.cardsInfo !== null && (
          <MusicCardContainer
            cardsInfo={this.state.cardsInfo[musicDate]}
            onApplyMusic={this.onApplyMusic}
          />
        )}
        {this.state.isMusicSubmitOpened && (
          <MusicSubmitCard
            onSubmitMusic={this.onSubmitMusic}
            onExit={this.onExitSubmit}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  musicDate: state.ApplyTypeSwitch.musicDate
});

const mapDispatchToProps = dispatch => ({
  onChangeDate: musicDate => dispatch(setMusicDate(musicDate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicApplyContainer);
