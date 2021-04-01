import React, { Component } from "react";

import "./ApplyContentInnerContainer.scss";
import ApplyTypeSwitch from "../../../component/Apply/Utils/ApplyTypeSwitch";

import ApplyAcceptBtn from "../../../component/Apply/Utils/ApplyAcceptBtn";
import ExtensionContent from "../../../component/Apply/content/extension/ExtensionContent";
import GoingoutContent from "../../../component/Apply/content/goingout/GoingoutContent";
import GoingoutEmptyContent from "../../../component/Apply/content/goingout/GoingoutEmptyContent";
import MusicContent from "../../../component/Apply/content/music/MusicContent";
import StayContent from "../../../component/Apply/content/stay/StayContent";

export default class ApplyContentInnerContainer extends Component {
  render() {
    const {
      applyType,
      typeList,
      selectedType,
      onSelectType,
      selectedMenu,
      onCancel,
      onApply,
      params,
      onSelectSeat,
      selectedSeat,
      clearSeat,
      musicApplication,
      onChangeMusicApplication,
      musicInfo,
      onChangeGoingoutApplication,
      goingoutApplication,
      refreshFlag,
      isOnGoingoutApply,
      myMusicId,
    } = this.props;

    let content = null,
      btn = null;
    let applyParam = {};
    switch (applyType) {
      case "extension":
        content = (
          <ExtensionContent
            time={selectedType}
            classNum={selectedMenu}
            onSelectSeat={onSelectSeat}
            selectedSeat={selectedSeat}
            clearSeat={clearSeat}
            refreshFlag={refreshFlag}
          />
        );
        applyParam.apply = params.apply;
        applyParam.cancel = params.cancel;
        btn = (
          <div className="apply--content--btn--wrapper">
            <ApplyAcceptBtn
              content="취소"
              btnClass="cancel"
              onClick={onCancel}
              params={applyParam.cancel}
            />
            <ApplyAcceptBtn
              content="신청"
              btnClass="apply"
              onClick={onApply}
              params={applyParam.apply}
            />
          </div>
        );
        break;
      case "goingout":
        let btnContent = "";
        if (isOnGoingoutApply) {
          content = (
            <GoingoutContent
              onChangeGoingoutApplication={onChangeGoingoutApplication}
              goingoutApplication={goingoutApplication}
            />
          );
          btnContent = "신청";
        } else {
          content = (
            <GoingoutEmptyContent
              onChangeGoingoutApplication={onChangeGoingoutApplication}
              goingoutApplication={goingoutApplication}
            />
          );
          btnContent = "신청";
        }
        applyParam.apply = goingoutApplication;
        applyParam.cancel = params.cancel;
        btn = (
          <div className="apply--content--btn--wrapper">
            <ApplyAcceptBtn
              content="취소"
              btnClass="cancel"
              onClick={onCancel}
              params={applyParam.cancel}
            />
            <ApplyAcceptBtn
              content={btnContent}
              btnClass="apply"
              onClick={onApply}
              params={applyParam.apply}
            />
          </div>
        );
        break;
      case "stay":
        content = <StayContent selectedMenu={selectedMenu} />;
        applyParam.apply = params.apply;
        btn = (
          <div className="apply--content--btn--wrapper">
            <ApplyAcceptBtn
              content="신청"
              btnClass="apply"
              onClick={onApply}
              params={applyParam}
            />
          </div>
        );
        break;
      case "music":
        content = (
          <MusicContent
            musicApplication={musicApplication}
            onChangeMusicApplication={onChangeMusicApplication}
            musicInfo={musicInfo}
            isOnApply={selectedMenu !== 5}
          />
        );
        applyParam.apply = {
          day: params.apply,
          ...musicApplication,
        };
        applyParam.cancel = {
          myMusicId,
        };
        btn = (
          <div className="apply--content--btn--wrapper">
            <ApplyAcceptBtn
              content="취소"
              btnClass="cancel"
              onClick={onCancel}
              params={applyParam.cancel}
            />
            <ApplyAcceptBtn
              content="신청"
              btnClass="apply"
              onClick={onApply}
              params={applyParam.apply}
            />
          </div>
        );
        break;
      default:
    }

    return (
      <div className="apply--content--inner--wrapper">
        <div className="apply--content--inner--type--switch--wrapper">
          {typeList.length !== 0 ? (
            <ApplyTypeSwitch
              content={typeList}
              selectedType={selectedType}
              onSelectType={onSelectType}
            />
          ) : (
            undefined
          )}
        </div>
        <div className="apply--content--inner--content">
          {content}
          {btn}
        </div>
      </div>
    );
  }
}
