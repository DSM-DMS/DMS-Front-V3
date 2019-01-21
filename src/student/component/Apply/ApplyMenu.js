import React from 'react';
import './ApplyMenu.scss';

import ApplyMenuBtn from './ApplyMenuBtn'

import extsIcon from '../../../assets/icon/ic_extension_apply.png';
import gooutIcon from '../../../assets/icon/ic_goingout_apply.png';
import musicIcon from '../../../assets/icon/ic_music_apply.png';
import stayIcon from '../../../assets/icon/ic_staying_apply.png';

const ApplyMenu = ({selectedMenu}) => {
    const menus = [
        { iconSrc: extsIcon, title: '연장학습 신청', url: 'extension' },
        { iconSrc: gooutIcon, title: '외출 신청', url: 'goingout' },
        { iconSrc: stayIcon, title: '잔류 신청', url: 'stay' },
        { iconSrc: musicIcon, title: '기상음악 신청', url: 'music' }
    ]

    const list = menus.map(
        (info, i) =>  {
            let selectedClass = 'apply--detail--btn--selected';
            if(selectedMenu !== info.url)
                selectedClass = undefined;
            return (
                <ApplyMenuBtn 
                    iconSrc = {info.iconSrc} 
                    title = {info.title}
                    url = {info.url}
                    key = {i}
                    selectedClass = {selectedClass}/>        
            )
        }
    );
    return (
        <div className = 'apply--menu--btn--wrapper'>
            {list}
        </div>
    )
}

export default ApplyMenu;