import React, { Component } from 'react';

import './GoingoutModifyCard.scss';

export default class GoingoutModiyCard extends Component {
  state = {
    date: '',
    time: '',
    reason: '',
    fieldActivate: false
  };

  textarea = null;

  activeField = () => {
    this.setState({
      fieldActivate: true
    });
  };

  disableFocus = e => {
    console.log(e.target.value);
    if (e.target.value === '') {
      this.setState({
        fieldActivate: false
      });
    }
  };

  updateTextValue = e => {
    this.activeField();
    this.setState({
      reason: e.target.value
    });
    this.disableFocus(e);
    e.preventDefault();
  };

  onClickTextarea = () => {
    console.log(1);
    console.log(this.textarea);
    this.textarea.focus();
  };

  render() {
    return (
      <div className='apply--goingout--modify--card'>
        <p className='apply--goingout--modify--card--title'>외출</p>
        <p className='apply--goingout--modify--card--subtitle'>사유</p>
        <div className='apply--goingout--modify--card--input--wrapper'>
          <label
            className={`apply--goingout--modify--label ${this.state.fieldActivate ? 'field-active' : ''}`}
            onClick={() => {
              this.textarea.focus();
            }}
          >
            사유를 적어주세요
          </label>
          <textarea
            ref={ref => (this.textarea = ref)}
            className='apply--goingout--modify--card--reason'
            onFocus={this.activeField}
            value={this.state.reason}
            onBlur={this.disableFocus}
            onChange={this.updateTextValue}
          />
        </div>
      </div>
    );
  }
}
