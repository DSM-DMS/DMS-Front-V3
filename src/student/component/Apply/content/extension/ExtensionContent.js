import React, { Component } from "react";

import "./ExtensionContent.scss";

import { getExtensionMap } from "../../../../../lib/applyAPI";
import ExtensionMapSeat from "./ExtensionMapSeat";

const mapInfoList = [
  {
    top: "칠판",
    bottom: "벽",
    left: "창문",
    right: "복도",
  },
  {
    top: "칠판",
    bottom: "벽",
    left: "창문",
    right: "복도",
  },
  {
    top: "칠판",
    bottom: "벽",
    left: "창문",
    right: "복도",
  },
  {
    top: "칠판",
    bottom: "벽",
    left: "창문",
    right: "복도",
  },
  {
    //2층 여자 학습실
    top: "창문",
    bottom: "문",
    left: "벽",
    right: "벽",
  },
  {
    //3층 학교측 독서실
    top: "창문",
    bottom: "복도",
    left: "학교",
    right: "옆방",
  },
  {
    //3측 기숙사측 독서실
    top: "창문",
    bottom: "복도",
    left: "옆방",
    right: "계단",
  },
  {
    //4층 학교측 독서실
    top: "창문",
    bottom: "복도",
    left: "옆방",
    right: "계단",
  },
  {
    //4층 기숙사측 독서실
    top: "창문",
    bottom: "복도",
    left: "옆방",
    right: "계단",
  },
  {
    //5층 열린 교실
    top: "창문",
    bottom: "",
    left: "옆방",
    right: "계단",
  },
  {
    //소파
    top: "칠판",
    bottom: "벽",
    left: "창문",
    right: "복도",
  },
];

export default class ExtensionContent extends Component {
  state = {
    loading: false,
    mapData: [],
  };
  setMapInfo = async (time, classNum) => {
    if (this.state.loading) return;
    this.setState({
      loading: true,
    });
    try {
      const response = await getExtensionMap(time, classNum);
      this.setState({
        mapData: response.data.map,
      });
    } catch (e) {}
    this.setState({
      loading: false,
    });
  };

  componentDidMount() {
    const { time, classNum } = this.props;
    this.setMapInfo(time, classNum + 1);
  }

  componentWillReceiveProps(nextProps) {
    const { time, classNum, refreshFlag } = nextProps;
    if (time !== this.props.time || classNum !== this.props.classNum) {
      this.props.clearSeat();
      this.setMapInfo(time, classNum + 1);
    }
    if (refreshFlag) {
      this.props.clearSeat();
      this.setMapInfo(time, classNum + 1);
    }
  }

  render() {
    const { classNum, selectedSeat, onSelectSeat } = this.props;
    const { mapData } = this.state;
    const isBigClass = classNum === 9;
    const map = mapData.map((seatCol, i) => {
      const row = seatCol.map((seat, i) => {
        if (seat === 0)
          return <ExtensionMapSeat key={i} invisibleClass="invisible" />;
        if (seat === -1) {
          return <ExtensionMapSeat key={i} preventClass="prevented" />;
        }
        if (seat === selectedSeat) {
          return (
            <ExtensionMapSeat
              key={i}
              selectedClass="selected"
              content={seat}
              onClick={onSelectSeat}
            />
          );
        }
        if (Number.isInteger(seat)) {
          return (
            <ExtensionMapSeat
              key={i}
              selectedClass="unselected"
              content={seat}
              onClick={onSelectSeat}
            />
          );
        }
        return <ExtensionMapSeat key={i} content={seat} />;
      });
      return <tr key={i}>{row}</tr>;
    });
    return (
      <div className="apply--content--extension">
        <span className="apply--content--extension--mark top">
          {mapInfoList[classNum].top}
        </span>
        <span className="apply--content--extension--mark bottom">
          {mapInfoList[classNum].bottom}
        </span>
        <span className="apply--content--extension--mark left">
          {mapInfoList[classNum].left}
        </span>
        <span className="apply--content--extension--mark right">
          {mapInfoList[classNum].right}
        </span>
        <div
          className={`apply--content--extension--map--wrapper ${
            isBigClass ? "big--class" : ""
          }`}
        >
          <table
            className={`apply--content--extension--map ${
              isBigClass ? "big--class" : ""
            }`}
          >
            <tbody>{this.state.loading ? "" : map}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
