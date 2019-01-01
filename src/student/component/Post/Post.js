import React from 'react';

import postLeftBackground from '../../../assets/illust/left_illustration.png'
import postRightBackground from '../../../assets/illust/right_illustration.png'

import './Post.scss';

const Post = ({cardList}) => {
    return (
        <div className="post--wrapper" id="post">
            <img src={postLeftBackground} alt="" className="post--background--left"/>
            <img src={postRightBackground} alt="" className="post--background--right"/>
            <div className="inner--wrapper">
                <div className="post--title--wrapper">
                    <span className="post--title">DMS 기숙사 안내사항</span>
                    <span className="post--title--sub">
                        대덕소프트웨어마이스터고등학교 사감부에서 작성한 안내사항을 열람하세요.
                    </span>
                </div>

                <div className="post--card--list">
                    {cardList}
                </div>
            </div>
        </div>
    );
};

export default Post;