import React from 'react';
import { Link } from 'react-router-dom';
import './ApplyMenu.scss';

import ApplyMenuBtn from './ApplyMenuBtn';

import extsIcon from '../../../assets/icon/ic_extension_apply.png';
import gooutIcon from '../../../assets/icon/ic_goingout_apply.png';
import musicIcon from '../../../assets/icon/ic_music_apply.png';
import stayIcon from '../../../assets/icon/ic_staying_apply.png';

const ApplyMenu = ({ menuType, selectedMenu }) => {
  const menus = {
    apply: [
      { iconSrc: extsIcon, title: '연장학습 신청', url: 'extension' },
      { iconSrc: gooutIcon, title: '외출 신청', url: 'goingout' },
      { iconSrc: stayIcon, title: '잔류 신청', url: 'stay' },
      { iconSrc: musicIcon, title: '기상음악 신청', url: 'music' }
    ],
    guide: [
      { iconSrc: extsIcon, title: '공지사항', url: 'notice' },
      { iconSrc: extsIcon, title: '기숙사 규정', url: 'rule' },
      { iconSrc: extsIcon, title: '자주하는 질문', url: 'faq' }
    ],
    report: [
      { iconSrc: extsIcon, title: '설문조사', url: 'notice' },
      { iconSrc: extsIcon, title: '버그 신고', url: 'notice' },
      { iconSrc: extsIcon, title: '시설물 고장 신고', url: 'notice' }
    ]
  };

  const list = menus[menuType].map((info, i) => {
    let selectedClass = 'apply--detail--btn--selected';
    if (selectedMenu !== info.url) selectedClass = undefined;
    return (
      <ApplyMenuBtn
        iconSrc={info.iconSrc}
        title={info.title}
        baseUrl={menuType}
        url={info.url}
        key={i}
        selectedClass={selectedClass}
      />
    );
  });
  return (
    <div className='apply--menu--btn--wrapper'>
      {list}
      <div className='unselectable apply--detail--btn apply--detail--btn--back'>
      <img className='apply--detail--btn--icon' src={extsIcon} alt='icon' />
      <Link className='apply--detail--btn--title' to={`/${menuType}`}>
        뒤로가기
      </Link>
    </div>
    </div>
  );
};

export default ApplyMenu;
