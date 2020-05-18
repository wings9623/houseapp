import { TabBar } from 'antd-mobile';
import React, { Component } from 'react';
import activeIndex from "../../assets/icons/Active/shouye.png"
import index from "../../assets/icons/FalseActive/shouye.png"
import activeWechat from "../../assets/icons/Active/wechat.png"
import wechat from "../../assets/icons/FalseActive/wechat.png"
import activeXing from "../../assets/icons/Active/xing.png"
import xing from "../../assets/icons/FalseActive/xing.png"
import activewode from "../../assets/icons/Active/wode.png"
import wode from "../../assets/icons/FalseActive/wode.png"
import Index from "./index/index" 
import Chat from "./chat/chat" 
import My from "./my/my" 
import Recommend from "./recommend/recommend" 

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'yellowTab',
            hidden: false,
        };
    }
    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <div>{pageText}</div>

            </div>
        );
    }
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#00bc5b"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    tabBarPosition="bottom"
                >
                    <TabBar.Item
                        title="首页"
                        key="Life"
                        icon={
                            <img src={index} alt="" width="28" height="28" />

                        }
                        selectedIcon={
                            <img src={activeIndex} alt="" width="28" height="28" />
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId"
                    >
                     <Index></Index>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <img src={wechat} alt="" width="28" height="28" />
                        }
                        selectedIcon={
                            <img src={activeWechat} alt="" width="28" height="28" />
                        }
                        title="微聊"
                        key="Koubei"
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        <Chat></Chat>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={
                            <img src={xing} alt="" width="24" height="24" />
                        }
                        selectedIcon={
                            <img src={activeXing} alt="" width="24" height="24" />

                        }
                        title="推荐"
                        key="Friend"
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        <Recommend></Recommend>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<img src={wode} alt="" width="24" height="24" />}
                        selectedIcon={
                            <img src={activewode} alt="" width="24" height="24" />
                        }
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >
                        <My></My>
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}


export default Nav;