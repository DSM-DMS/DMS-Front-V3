import React, { Component, Fragment } from 'react';

import Footer from '../../../component/Main/Footer/Footer';
import FooterCard from '../../../component/Main/Footer/FooterCard';

class FooterContainer extends Component {

    state = {
        peopleList: [
            {
                team: 'Frontend',
                members: [
                    '최이삭',
                    '이수하',
                    '김형규',
                    '오인서'
                ]
            },
            {
                team: 'Android',
                members: [
                    '이주용',
                    '송진우',
                    '이종현',
                    '이성현'
                ]
            },
            {
                team: 'Design',
                members: [
                    '김영찬',
                    '윤석민',
                    '김동규'
                ]
            },
            {
                team: 'Windows&CS',
                members: [
                    '유동근',
                    '이종현'
                ]
            },
            {
                team: 'IOS',
                members: [
                    '이동기'
                ]
            },
            {
                team: 'Server',
                members: [
                    '인상민',
                    '김윤재'
                ]
            }
        ]
    }

    render() {
        const { peopleList } = this.state;
        const cardList = peopleList.map(data => <FooterCard team={data.team} members={data.members} key={`${data.team}-${data.members}-footer`}/>)

        return (
            <Fragment>
                <Footer cardList={cardList}/>
            </Fragment>
        );
    }
}

export default FooterContainer;