import React, { Component } from 'react';
import './ApplyExtensionMap.scss'
import * as applyExtensionApi from '../../../../lib/applyAPI';

export default class ApplyExtensionMap extends Component {

    render() {
        applyExtensionApi.getExtensionMap(11,1).then(result => console.log(`data: ${result.data}`));

        return (
            <div className = 'apply--extension--map'>

            </div>
        )
    }
}