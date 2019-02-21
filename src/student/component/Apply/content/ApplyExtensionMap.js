import React, { Component } from 'react';
import './ApplyExtensionMap.scss';
import { getExtensionMap } from '../../../../lib/applyAPI';

export default class ApplyExtensionMap extends Component {
  state = {
    loading: false,
    map: null
  };

  componentWillReceiveProps(nextProps) {
    const { time, classNum } = nextProps;
    this.setExtensionMap(time, classNum);
  }

  componentDidMount() {
    const { time, classNum } = this.props;
    this.setExtensionMap(time, classNum);
  }

  setExtensionMap = async (time, classNum) => {
    if (this.state.loading) {
      return;
    }
    this.setState({
      loading: true
    });
    try {
      const response = await getExtensionMap(time, classNum);
      this.setState({
        map: response.data.map
      });
    } catch (e) {
      console.error(e);
    }
    this.setState({
      loading: false
    });
  };

  render() {
    return <div className='apply--extension--map'>{this.state.map}</div>;
  }
}
