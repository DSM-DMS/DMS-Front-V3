import React from 'react';
import './MainSelectList.scss'

const MainSelectList = ({selectData, onSelect}) => {
    return (
        <div className="download--list--element" id = {selectData.kind} onClick = {() => {
            onSelect(selectData.title)
        }}>{selectData.title}</div>
    )
}

export default MainSelectList;