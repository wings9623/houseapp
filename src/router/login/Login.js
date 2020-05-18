import React, { Component } from 'react';
import login from "./login.module.scss"
import imgUrlLogo from "../../assets/imgs/logo.jpg"
import { InputItem, Button, WhiteSpace } from 'antd-mobile';
import user from "../../assets/icons/yonghu.png"
import lock from "../../assets/icons/mimasuo.png"
import { Link } from 'react-router-dom';
import { loginAxios } from "../../api/apis"

class Login extends Component {
    state = {
        acc: "",
        pwd: "",
        error: "none"
    }
    render() {
        return (
            <div className={login.login}>
                    <div className={login.imgBox}>
                        <img src={imgUrlLogo} width="120"
                            height="120"
                            alt="" />
                    </div>
                    <div className={login.form}>
                        <InputItem
                            clear
                            className={login.phone}
                            maxLength="11"
                            placeholder="请输入手机号"
                            onChange={this.acc}
                        >
                            <img src={user} alt="" />
                        </InputItem>
                        <InputItem
                            clear
                            type="password"
                            placeholder="请输入密码"
                            onChange={this.pwd}
                        >
                            <img src={lock} alt="" />
                        </InputItem>
                        <p style={{ display: this.state.error, color: "red", fontSize: "0.8em" }}>登录名或密码错误</p>
                        <Button type="primary" className={login.Button} onClick={this.loginBtn}>登 陆</Button><WhiteSpace />
                        <div className={login.text}>
                            <span><Link to="/register">手机快速注册</Link></span>
                            <span><Link to="/register">忘记密码</Link></span>
                        </div>
                    </div>
                   
            </div>
        );
    }
    acc = (val) => {
        this.setState({ acc: val })
    }
    pwd = (val) => {
        this.setState({ pwd: val })
    }
    loginBtn = () => {
        // 点击过后flag为true
        if (this.flag) return
        this.flag = true
        setTimeout(() => {
            this.flag = false//为false的时候才可以点击
        }, 2000)
        // 调请求
        loginAxios(this.state.acc, this.state.pwd).then((res) => {
            if (res.data === "ok") {
                //前往导航页
                window.location.href = "/#/"
            } else {
                this.setState({
                    error: "block"//显示错误信息
                })
            }
        })
    }
}

export default Login;