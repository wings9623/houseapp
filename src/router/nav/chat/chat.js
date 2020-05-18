import React, { Component } from 'react';
import Chat from "./chat.module.scss"
import { WingBlank, WhiteSpace, Flex, Button } from "antd-mobile"
class chat extends Component {
    render() {
        return (
            <div className={Chat.box}>
                <div className={Chat.chat}>
                    <WingBlank>
                        <WhiteSpace size="lg" />
                        <WhiteSpace size="lg" />

                        <Flex justify="center">
                            <img src={require("../../../assets/imgs/chat.jpg")} width="80" alt="" style={{ borderRadius: "50%" }}
                            />
                        </Flex>
                        <WhiteSpace size="lg" />
                        <Flex justify="center">
                            <p> 置业顾问: <span style={{ color: "#00bc5b" }}>Mr Ming</span> </p>

                        </Flex>
                        <Flex justify="center">
                            <span>专业服务诚信做人诚心做事</span>
                        </Flex>
                        <WhiteSpace size="lg" />
                        <WhiteSpace size="lg" />
                        <Flex justify="center">
                            <Button type="default" style={{background:"#00bc5b",width:"120px",color:"#fff"}} >我要聊天</Button>
                        </Flex>
                    </WingBlank>
                </div>
            </div>
        );
    }
}

export default chat;