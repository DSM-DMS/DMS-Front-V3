import React, { Component } from "react";
import fileSaver from "file-saver";

import Main from "../../component/Main/Main";
import MainSelectList from "../../component/Main/MainSelectList";
import axiosWrapper from "../../lib/axiosWrapper";
import { getCookie } from "../../../lib/cookie";

class MainContainer extends Component {
  state = {
    select: "다운로드 할 사항을 선택해주세요.",
    selectKind: null,
    selected: false,
    selectListState: false,
    selectList: [
      {
        kind: "stay",
        title: "잔류신청",
      },
      {
        kind: 'extension_12',
        title: '연장학습',
      },
    ],
    selectOff: false,
  };

  onSelectOff = () => {
    this.setState({
      selectOff: true,
    });
  };

  onSelected = () => {
    this.setState({
      selected: true,
    });
  };

  onSelectBoxClick = () => {
    this.setState({
      selectListState: !this.state.selectListState,
      selectOff: false,
    });
  };

  onSelect = (title, kind) => {
    this.setState({
      select: title,
      selected: true,
      selectKind: kind,
      selectListState: !this.state.selectListState,
    });
  };

  onDownload = () => {
    const cookie = getCookie("JWT");
    const refcookie = getCookie("RFT");
    axiosWrapper
      .get(
        `https://admin.dsm-dms.com/excel/${this.state.selectKind}`,
        `Bearer ${cookie}`,
        `Bearer ${refcookie}`,
        {
          responseType: "arraybuffer",
        }
      )
      .then((res) => {
        let blob = new Blob([res.data], { type: res.headers["content-type"] });
        fileSaver.saveAs(blob, `${this.state.select}명단.xlsx`);
      })
      .catch((err) => {});
  };

  render() {
    const {
      selectOff,
      select,
      selected,
      selectList,
      selectListState,
    } = this.state;
    const list = selectList.map((data) => (
      <MainSelectList
        onSelect={this.onSelect}
        selectData={data}
        key={data.kind}
      />
    ));
    return (
      <Main
        onRealDownload={this.onRealDownload}
        onDownload={this.onDownload}
        selectOff={selectOff}
        onSelectOff={this.onSelectOff}
        selectListState={selectListState}
        list={list}
        select={select}
        selected={selected}
        onSelectBoxClick={this.onSelectBoxClick}
      />
    );
  }
}

export default MainContainer;
