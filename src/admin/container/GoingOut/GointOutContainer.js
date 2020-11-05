import React, { Component, Fragment } from 'react';

import axios from 'axios';

import { getCookie } from '../../../lib/cookie';

import GoingOut from '../../component/GoingOut/GoingOut';
import GoingOutButton from '../../component/GoingOut/GoingOutButton';
import GoingOutClassList from '../../component/GoingOut/GoingOutClassList';
import GoingOutList from '../../component/GoingOut/GoingOutList';
import GoingOutPageList from '../../component/GoingOut/GoingOutPageList';

class GointOutContainer extends Component {
  startIndex = 1;
  state = {
    goingOutList: [],
    checkList: [
      {
        kind: '1학년',
        check: false,
        id: 1,
      },
      {
        kind: '2학년',
        check: false,
        id: 2,
      },
      {
        kind: '3학년',
        check: false,
        id: 3,
      },
    ],
    selectList: [
      {
        kind: '전체',
        data: 0,
      },
      {
        kind: '1반',
        data: 1,
      },
      {
        kind: '2반',
        data: 2,
      },
      {
        kind: '3반',
        data: 3,
      },
      {
        kind: '4반',
        data: 4,
      },
    ],
    selected: false,
    selectState: '전체반',
    allcheck: true,
    pageSize: 6,
    curPage: 1,
    modal: false,
    modalData: [],
  };

  HandleModal = id => {
    const cookie = getCookie('JWT');
    axios
      .get(`https://admin.dsm-dms.com/goingout/${id}`, {
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      })
      .then(res => {
        this.setState({
          modalData: { ...res.data },
          modal: true,
        });
      })
      .catch(err => {});
  };

  HandleModalToggle = () => {
    this.setState({
      modal: false,
    });
  };

  FindCurrentClass = () => {
    const { selectList, selectState } = this.state;
    let classNumber = selectList.findIndex(data => data.kind === selectState);
    if (classNumber === -1) classNumber = 0;
    return classNumber;
  };

  FindCurrentGrade = () => {
    const { checkList } = this.state;
    return checkList.findIndex(data => data.check === true);
  };

  componentDidMount = async () => {
    const cookie = getCookie('JWT');
    axios
      .get(`https://admin.dsm-dms.com/goingout/0/0`, {
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      })
      .then(res => {
        this.setState({
          goingOutList: [...res.data].reverse(),
        });
      });
  };

  HandleGradeButton = async id => {
    const cookie = getCookie('JWT');
    const classNumber = this.FindCurrentClass();
    const data = this.state.checkList.map(data => {
      if (data.id !== id) return { ...data, check: false };
      else return { ...data, check: true };
    });
    const response = await axios.get(
      `https://admin.dsm-dms.com/goingout/${id}/${classNumber}`,
      {
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      },
    );
    this.setState({
      checkList: [...data],
      allcheck: false,
      goingOutList: [...response.data].reverse(),
    });
  };

  HandleSelectToggle = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };

  HandleSelect = async kind => {
    const cookie = getCookie('JWT');
    const { selectList } = this.state;
    const { allcheck } = this.state;
    let classNumber = selectList.findIndex(data => data.kind === kind);
    if (classNumber === -1) classNumber = 0;
    let gradeNumber = 0;
    if (allcheck === false) gradeNumber = this.FindCurrentGrade();
    const response = await axios.get(
      `https://admin.dsm-dms.com/goingout/${gradeNumber}/${classNumber}`,
      {
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      },
    );
    this.setState({
      selectState: kind,
      selected: false,
      goingOutList: [...response.data].reverse(),
    });
  };

  HandleAllToggle = () => {
    const cookie = getCookie('JWT');
    const data = this.state.checkList.map(data => {
      return { ...data, check: false };
    });
    const classNumber = this.FindCurrentClass();
    axios
      .get(`https://admin.dsm-dms.com/goingout/0/${classNumber}`, {
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      })
      .then(res => {
        this.setState({
          goingOutList: [...res.data].reverse(),
        });
      });
    this.setState({
      checkList: [...data],
      allcheck: true,
    });
  };

  HandlePageSelect = page => {
    this.setState({
      curPage: page,
    });
  };

  render() {
    const { checkList, pageSize, curPage, modalData } = this.state;
    const {
      selectList,
      selectState,
      selected,
      allcheck,
      goingOutList,
      modal,
      HandleModalToggle,
    } = this.state;
    const selectData = selectList.map(data => {
      return (
        <GoingOutClassList
          HandleSelect={this.HandleSelect}
          key={data.kind}
          data={data}
        >
          {data.kind}
        </GoingOutClassList>
      );
    });
    const data = checkList.map(data => {
      return (
        <GoingOutButton
          onToggle={this.HandleGradeButton}
          key={data.kind}
          data={data}
        >
          {data.kind}
        </GoingOutButton>
      );
    });
    let page = Math.floor(goingOutList.length / pageSize);
    if (goingOutList.length % pageSize > 0) page++;
    const goingOutData = goingOutList
      .slice((curPage - 1) * 6, curPage * 6)
      .map(data => {
        return (
          <GoingOutList
            onModal={this.HandleModal}
            key={data.applyId}
            data={data}
          />
        );
      });
    let PageList = [];
    if (curPage % 9 === 0) this.startIndex = curPage - 1;
    if (Math.floor(curPage / 9) < Math.floor(page / 9))
      this.startIndex = Math.floor(curPage / 9) * 9 + 1;
    for (let i = this.startIndex; i <= page; i++) {
      if (this.startIndex + 9 === i) {
        break;
      }
      PageList.push(
        <GoingOutPageList
          onPageMove={this.HandlePageSelect}
          key={i}
          numbering={i}
        >
          {i}
        </GoingOutPageList>,
      );
    }
    return (
      <Fragment>
        <GoingOut
          onModalToggle={this.HandleModalToggle}
          modalData={modalData}
          modal={modal}
          PageList={PageList}
          goingOutData={goingOutData}
          HandleAllToggle={this.HandleAllToggle}
          AllCheck={allcheck}
          HandleSelectToggle={this.HandleSelectToggle}
          selected={selected}
          selectState={selectState}
          selectData={selectData}
          data={data}
        />
      </Fragment>
    );
  }
}

export default GointOutContainer;
