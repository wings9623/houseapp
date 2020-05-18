import React, { Component } from 'react';
import My from "../my/my.module.scss"
import { WingBlank, WhiteSpace, Flex, List } from 'antd-mobile';
const Item = List.Item;
class chat extends Component {
    render() {

        
        return (
            <div>
                <div className={My.top}>
                    <WingBlank size="lg">
                        <WhiteSpace size="lg" />
                        <WhiteSpace size="lg" />
                        <Flex>
                            <div style={{ flex: "2.5" }}>
                                <img src={require("../../../assets/imgs/chat.jpg")}
                                    width="80"
                                    style={{ borderRadius: "50%" }}
                                />
                            </div>
                            <div style={{ flex: "6.5", color: "#fff" }}>
                                <span style={{ fontSize: "1.4em" }}>登录/注册</span>
                                <WhiteSpace size="xs" />
                                <span>可以和经纪人发起聊天</span>
                            </div>
                            <div style={{ flex: "1" }}>
                                <img src={require("../../../assets/My/options.png")} width="30" />
                            </div>
                        </Flex>
                        <WhiteSpace size="md" />

                        <Flex justify="between">
                            <div style={{ color: "#fff", borderRight: "1px solid #fff", flex: "3" }}>
                                <p style={{ textAlign: "center" }}>0</p>
                                <p style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={require("../../../assets/My/icon_zyizcvwdnco/qianbao.png")} alt=""
                                        style={{
                                            verticalAlign: "bottom",
                                            marginRight: "5px",
                                            width: "20px",
                                            height: "20px",
                                            marginRight: "10px"
                                        }}
                                    />
                                    <span>优惠券</span>
                                </p>
                            </div>
                            <div style={{ color: "#fff", borderRight: "1px solid #fff", flex: "3" }}>
                                <p style={{ textAlign: "center" }}>0</p>
                                <p style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={require("../../../assets/My/icon_zyizcvwdnco/youhuiquan.png")} alt=""
                                        style={{
                                            verticalAlign: "bottom",
                                            marginRight: "5px",
                                            width: "20px",
                                            height: "20px",
                                            marginRight: "10px"
                                        }}
                                    />
                                    <span>钱包</span>
                                </p>
                            </div>
                            <div style={{ color: "#fff", flex: "3" }}>
                                <p style={{ textAlign: "center" }}>0</p>
                                <p style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={require("../../../assets/My/icon_zyizcvwdnco/jifen.png")} alt=""
                                        style={{
                                            verticalAlign: "bottom",
                                            marginRight: "5px",
                                            width: "20px",
                                            height: "20px",
                                            marginRight: "10px"
                                        }}
                                    />
                                    <span>积分</span>
                                </p>
                            </div>
                        </Flex>
                        <WhiteSpace size="lg" />
                    </WingBlank>
                </div>
                {/* 选项 */}
                <div className={My.section}>
                    <Item
                        thumb={require("../../../assets/My/list/jifen.png")}
                        arrow="horizontal"
                        onClick={() => { }}
                    >我的积分</Item>
                    <Item
                        thumb={require("../../../assets/My/list/dingyue.png")}
                        onClick={() => { }}
                        arrow="horizontal"
                    >
                        我的订阅
                     </Item>
                    <Item
                        thumb={require("../../../assets/My/list/lianxiren.png")}
                        onClick={() => { }}
                        arrow="horizontal"
                    >
                        微聊联系人
                     </Item>
                </div>

                <div className={My.section}>
                    <Item
                        thumb={require("../../../assets/My/list/jisuanqi.png")}
                        arrow="horizontal"
                        onClick={() => { }}
                    >房贷计算器</Item>
                    <Item
                        thumb={require("../../../assets/My/list/wujiaoxing.png")}
                        onClick={() => { }}
                        arrow="horizontal"
                    >
                        我的房子
                     </Item>
                </div>
                <div className={My.section}>
                    <Item
                        thumb={require("../../../assets/My/list/jilu.png")}
                        arrow="horizontal"
                        onClick={() => { }}
                    >我的看房记录</Item>
                    <Item
                        thumb={require("../../../assets/My/list/user.png")}
                        onClick={() => { }}
                        arrow="horizontal"
                    >
                        我的问答
                     </Item>
                </div>
                <div className={My.section}>
                    <Item
                        thumb={require("../../../assets/My/list/shezhi.png")}
                        arrow="horizontal"
                        onClick={() => { }}
                    >设置</Item>
                    <Item
                        onClick={() => { }}
                        arrow="horizontal"
                    >
                        意见反馈
                     </Item>
                </div>
            </div>
        );
    }
}

export default chat;