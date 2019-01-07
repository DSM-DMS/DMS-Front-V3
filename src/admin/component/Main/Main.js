import React from 'react';
import './Main.scss';

import HeaderContainer from '../../common/header/HeaderContainer';
import SelectList from './SelectList';

import Download from '../../../assets/icon/ic_download.png'
import Arrow from '../../../assets/icon/ic_arrow.png'
import Woman from '../../../assets/illust/woman2.png'

const Main = ({onDownload, select, selected, onSelectBoxClick, list, selectListState, selectOff, onSelectOff}) => {
    return (
        <div className="main--wrapper">
            <div className="main--inner--wrapper">
                <HeaderContainer />
                <div className="main--download--wrapper">
                    <div className="main--download--content--wrapper">
                        <div className="main--download--description">
                            연장, 외출, 잔류신청을 다운받을 수 있습니다.
                        </div>
                        <div className = "main--download--selectbox--wrapper">
                            <div className = "main--download--selectbox--content--wrapper">
                                <div className = "main--download--selectbox--content" onClick = {onSelectBoxClick}>
                                    <div className = "main--download--selectbox--content--text" style = {selected ? {} : {color: 'rgba(0, 0, 0, 0.4)'}}>{select}</div>
                                    <img src = {Arrow} alt = "arrow_icon" className = "main--download--selectbox--icon"/>
                                </div>
                                { selectListState && 
                                    <SelectList onSelectOff = {onSelectOff}>
                                        {list}
                                    </SelectList>
                                }
                                {
                                    selectOff &&
                                    <div className = "main--download--selectbox--list--wrapper--off"/>
                                }
                            </div>
                            <div className = "main--download--button--wrapper" onClick = {onDownload}>
                                <img src = {Download} alt = "download_icon" className = "main--download--button--icon"/>
                                <div className = "main--download--button--text">
                                    Download
                                </div>
                            </div>
                        </div>
                    </div>
                    <img alt ="woman_illust" src = {Woman} className = "main--download--illust"/>
                </div>
            </div>
        </div>
    )
}

export default Main;