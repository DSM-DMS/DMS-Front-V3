import React from 'react';
import {Link} from 'react-router-dom'

import Woman from '../../../assets/illust/admin-1.png'

import './FixDetail.scss'

const FixDetail = ({data, index, lastIndex}) => {
    return (
        <React.Fragment>
            <div className = "fix--button--wrapper">
                <div className = "fix--button--detail fix">
                    <div className = "fix--button">시설물 고장</div>
                    <img src = {Woman} alt = "fix" className = "fix--button--illust"/>
                </div>
            </div>
            <div className = "fix--detail--wrapper">
                <div className = "fix--detail--header--wrapper">
                    상세 설명
                </div>
                <div className = "fix--detail--content--wrapper">
                    {
                        !(index === 0) &&
                    <Link to = {`/admin/fix/${data[index - 1].reportId}`} className = "fix--detail--content--prev"/>
                    }
                        <div className = "fix--detail--content--main--wrapper">
                                <div className = "fix--detail--content--main--header--wrapper">
                                    <div className = "fix--detail--content--main--header--name">
                                        {data[index].studentName}
                                    </div>
                                </div>
                                <div className = "fix--detail--content--main--detail--wrapper">
                                    {data[index].content}
                                </div>
                                <div className = "fix--detail--content--main--footer--wrapper">
                                    {data[index].room}호
                                </div>
                            </div>
                            {
                                !(index === lastIndex) &&
                            <Link to = {`/admin/fix/${data[index + 1].reportId}`} className = "fix--detail--content--next"/>
                            }
                        </div>
                </div>
        </React.Fragment>
    );
};

export default FixDetail;