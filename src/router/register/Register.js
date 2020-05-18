import React, { Component } from 'react';
import reg from "./register.module.scss"
import { InputItem, Button, WhiteSpace, Checkbox, Flex } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { registerAxios, validateAxios } from "../../api/apis"
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
class Login extends Component {
    state = {
        acc: "",
        pwd: "",
        radio: false,
        flag:"none"
    }
    render() {
        return (
            <div className={reg.register}>
                <div className={reg.form}>
                    <InputItem
                        className={reg.phone}
                        maxLength="11"
                        placeholder="请输入手机号"
                        onChange={this.acc}
                    >
                    </InputItem>
                    <InputItem
                        type="password"
                        placeholder="请输入密码"
                        onChange={this.pwd}
                    >
                    </InputItem>
                    <InputItem
                        type="password"
                        placeholder="请输入验证码"
                        extra="获取验证码"
                    ></InputItem>
                    <p style={{display:this.state.flag,marginLeft:"20px",color:"red",fontSize:"0.8em"}}>请同意服务协议</p>
                    <Flex>
                        <Flex.Item>
                            <AgreeItem data-seed="logId" onChange={e => {
                                this.setState({ radio: e.target.checked })
                            }}>
                                <a onClick={(e) => { e.preventDefault(); }}> <span className={reg.my}>我已同意</span> <span className={reg.agree}>《用户服务协议》及《隐私权政策》</span></a>
                            </AgreeItem>
                        </Flex.Item>
                    </Flex>

                    <Button type="primary" className={reg.Button} onClick={this.registerBtn}>注 册</Button><WhiteSpace />
                    <div className={reg.text}>
                        <span><Link to="/login">已有账号</Link></span>
                    </div>
                </div>
            </div>
        );
    }
    //用户名
    acc = (val) => {
        this.setState({
            acc: val
        })
    }
    //密码
    pwd = (val) => {
        this.setState({
            pwd: val
        })
    }
    // 注册按钮
    registerBtn = () => {
        if (this.state.radio == true) {
            registerAxios(this.state.acc, this.state.pwd).then((res) => {
                if (res.data === "ok") {
                    window.location.href = "/login"
                }
            })
        }else{
            console.log(123);
            this.setState({
                flag:"block"
            })
        }

    }

}

export default Login;