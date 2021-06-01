import React, { Component } from "react";

import {
  getNoticeList,
  getRuleList,
  getNoticeDetailPost,
  getRuleDetailPost,
} from "../../../../../lib/guideAPI";

import GuideContentPostContainer from "./GuideContentPostContainer";
import ApplyContentMenuContainer from "../../../Apply/Utils/ApplyContentMenuContainer";

export default class GuideContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentInfo: {
        notice: {
          title: "공지사항",
          menuTitle: "공지목록",
          menuList: [
            { content: "금", detail: "금요귀가", val: 0 },
            { content: "토", detail: "토요귀가", val: 1 },
            { content: "토", detail: "토요귀사", val: 2 },
            { content: "잔류", detail: "잔류", val: 3 },
          ],
          typeList: [
            { content: "공지사항", val: "notice" },
            { content: "기숙사규정", val: "rule" },
          ],
          haveEmptyMenuContent: false,
        },
        rule: {
          title: "기숙사 규정",
          menuTitle: "공지목록",
          menuList: [
            { content: "금", detail: "금요귀가", val: 0 },
            { content: "토", detail: "토요귀가", val: 1 },
            { content: "토", detail: "토요귀사", val: 2 },
            { content: "잔류", detail: "잔류", val: 3 },
          ],
          typeList: [
            { content: "공지사항", val: "notice" },
            { content: "기숙사규정", val: "rule" },
          ],
          haveEmptyMenuContent: false,
        },
      },
      selectedType: this.props.type,
      selectedMenu: {
        notice: "",
        guide: "",
      },
      isOnDetail: false,
      loading: false,
      guidePostList: [],
      detailPost: {
        content: "",
        title: "",
      },
    };
  }

  setPostList = () => {
    if (this.state.loading) return;
    this.setState({
      loading: true,
    });

    try {
      switch (this.props.type) {
        case "notice":
          this.getNoticeList();
          break;
        case "rule":
          this.getRuleList();
          break;
        default:
      }
    } catch (e) {
      alert("error");
      console.error(e);
    }
    this.setState({
      loading: false,
    });
  };

  setDetailPost = async (id) => {
    if (this.state.loading) return;
    this.setState({
      loading: true,
    });
    try {
      let response = null;
      switch (this.props.type) {
        case "notice":
          response = await getNoticeDetailPost(id);
          break;
        case "rule":
          response = await getRuleDetailPost(id);
          break;
        default:
      }
      this.setState({
        detailPost: response.data,
      });
    } catch (e) {
      alert("error");
      console.error(e);
    }
    this.setState({
      isOnDetail: true,
      loading: false,
    });
  };

  getNoticeList = async () => {
    const response = await getNoticeList();
    const noticeList = response.data.noticeList;

    const notices = noticeList.map((post, i) => {
      if (i === 0) {
        this.setState({
          selectedMenu: {
            ...this.state.selectedMenu,
            notice: post.id,
          },
        });
      }
      return {
        content: i + 1,
        detail: post.title,
        val: post.id,
      };
    });

    await this.setState({ guidePostList: notices });
    if (noticeList.length > 0) {
      this.setDetailPost(noticeList[0].id);
    }
  };

  getRuleList = async () => {
    const response = await getRuleList();
    const ruleList = response.data.ruleList;

    await this.setState({
      guidePostList: ruleList.map((post, i) => {
        if (i === 0) {
          this.setState({
            selectedMenu: {
              ...this.state.selectedMenu,
              rule: post.id,
            },
          });
        }
        return {
          content: i + 1,
          detail: post.title,
          val: post.id,
        };
      }),
    });
    if (ruleList.length > 0) {
      this.setDetailPost(ruleList[0].id);
    }
  };

  onSelectMenu = (menuVal) => {
    this.setState({
      selectedMenu: {
        ...this.state.selectedMenu,
        [this.props.type]: menuVal,
      },
    });
    this.setDetailPost(menuVal);
  };

  onSelectType = (typeVal) => {
    this.setState({
      selectedType: typeVal,
    });
    this.props.history.push("/guide/" + typeVal);
  };

  componentDidMount() {
    this.setPostList();
  }

  render() {
    const { type } = this.props;
    const {
      contentInfo,
      selectedType,
      selectedMenu,
      guidePostList,
      detailPost,
    } = this.state;

    return (
      <div className="apply--content--outer--wrapper">
        <div className="apply--content--wrapper">
          <div className="apply--content--left">
            <div className="apply--content--title--wrapper">
              <span className="apply--content--title">
                {contentInfo[type].title}
              </span>
            </div>
            <ApplyContentMenuContainer
              menuTitle={contentInfo[type].menuTitle}
              menuList={guidePostList}
              selectedMenu={selectedMenu[type]}
              onSelectMenu={this.onSelectMenu}
              haveEmptyMenuContent={contentInfo[type].haveEmptyMenuContent}
            />
          </div>
          <div className="apply--content--right">
            <GuideContentPostContainer
              typeList={contentInfo[type].typeList}
              selectedType={selectedType}
              onSelectType={this.onSelectType}
              detailPost={detailPost}
            />
          </div>
        </div>
      </div>
    );
  }
}
