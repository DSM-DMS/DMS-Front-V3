import React from 'react';
import { connect } from 'react-redux';
import { selectGoingoutCard } from '../../../../actions/ApplyActions';

import './GoingoutCardContainer.scss';

import GoingoutCard from '../../../component/Apply/content/goingout/GoingoutCard';
import ApplyAddCard from '../../../component/Apply/content/utils/ApplyAddCard';

const GoingoutCardContainer = props => {
  const {
    goingoutCard,
    onChangeCard,
    cardList,
    onApplyGoingout,
    onSubmitGoingout
  } = props;

  const goingoutCards = cardList.map(card => {
    let selectedClass = undefined;
    if (card.id === goingoutCard)
      selectedClass = 'apply--goingout--card--selected';
    return (
      <GoingoutCard
        gooutDate={card.goOutDate}
        returnDate={card.returnDate}
        reason={card.reason}
        key={card.id}
        selectedClass={selectedClass}
        onChangeCard={onChangeCard}
        id={card.id}
      />
    );
  });

  const isThereAddCard = cardList.length < 5;
  return (
    <div className='apply--goingout--card--wrapper'>
      {goingoutCards}
      {isThereAddCard && <ApplyAddCard onClickAdd={onApplyGoingout} />}
    </div>
  );
};

const mapStateToProps = state => ({
  goingoutCard: state.ApplyCardSwitch.goingoutCard
});

const mapDispatchToProps = dispatch => ({
  onChangeCard: card => dispatch(selectGoingoutCard(card))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoingoutCardContainer);
