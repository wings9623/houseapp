import React, { Component } from 'react';
import index from "./index.module.scss"
import { SearchBar, Carousel, Grid, WingBlank, WhiteSpace, Flex } from 'antd-mobile';
import { gethouselist } from "../../../api/apis"
// 宫格
const data1 = Array.from(new Array(8)).map((_val, i) => ({
    icon: require("../../../assets/Grid/grid" + i + ".png"),
    bgColor: ["#ff5a5f", "#a782b9", "#f6d149", "#f9db9f", "#ffa650", "#57aff8", "#00e4dd", "#d29bcb"][i],
    text: ["新房", "二手房", "租房", "商铺写字楼", "卖房", "海外房产", "小区房价", "问答"][i],
}));
// 宫格2
const data2 = Array.from(new Array(4)).map((_val, i) => ({
    icon: require("../../../assets/GridFour/grid" + i + ".png"),
    text: ["我要贷款", "房贷计算", "知识", "扫一扫"][i],
}));

class chat extends Component {
    state = {
        data: ['1', '2', '3', '4'],
        imgHeight: 176,
        houseList: []
    }
    componentDidMount() {
        gethouselist().then((v) => {
            this.setState({
                houseList: v.data
            })
        })
    }
    componentDidUpdate() {
        console.log(this.state.houseList);
    }
    render() {
        return (
            <div>
                <div className={index.index}>
                    <div className={index.top}>
                        <p>成都市
                        <img src={require('../../../assets/icons/sanjiaox.png')} width="10" height="20" />
                        </p>
                        <div >
                            <SearchBar
                                className={index.search}
                                placeholder="买房子就买汤臣一品"
                            />
                        </div>
                        <img src={require('../../../assets/icons/ditu.png')} width="25" />
                    </div>
                </div>
                {/* 轮播 */}
                <Carousel
                    autoplay
                    infinite
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={require("../../../assets/Carousel/banner (" + val + ").jpg")}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                {/* 宫格 */}
                <Grid data={data1}
                    columnNum={4}
                    hasLine={false}
                    renderItem={dataItem => (
                        <div>
                            <img src={dataItem.icon} style={{ width: '35px', height: '35px', background: dataItem.bgColor, borderRadius: "50%" }} />
                            <div style={{ color: '#888', fontSize: '14px', }}>
                                <span>
                                    {dataItem.text}
                                </span>
                            </div>
                        </div>
                    )}
                />
                <div className={index.section}>
                    <WingBlank size='lg'>
                        <WhiteSpace size='md' />
                        <Flex align="end">
                            <div style={{ color: "#00bc5b", fontSize: "1.1em", fontWeight: "bold" }}>房产全百科</div>
                            <div style={{ color: "#999", fontSize: "0.8em", marginLeft: "10px" }}>专业买房攻略</div>
                        </Flex>
                        <WhiteSpace size='xs' />
                        <div>
                            <Grid data={data2}
                                columnNum={4}
                                hasLine={false}
                                renderItem={dataItem => (
                                    <div>
                                        <img src={dataItem.icon} style={{ width: '35px', height: '35px' }} />
                                        <div style={{ color: '#888', fontSize: '14px', }}>
                                            <span>
                                                {dataItem.text}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            />
                        </div>
                    </WingBlank>

                </div>
                {/* 猜你喜欢 */}
                <div className={index.like}>
                    <WingBlank size='lg'>
                        <WhiteSpace size="md" />
                        猜你喜欢
                        <WhiteSpace size="md" />
                        {/* 房产部分 */}
                        {this.state.houseList.map((value,index) => {
                            return <div key={index} style={{display:"flex"}}>
                                <div style={{flex:2.5}}>
                               <p>
                               <img src={"http://129.211.169.131:33833"+value.imgs} width="100" alt=""/>
                               </p>
                                </div>
                                <div style={{flex:4.5,marginLeft:"10px"}}>
                                    <p style={{fontWeight:"bold",fontSize:"1.2em",marginBottom:"0"}}>{value.name}</p>
                                    <p style={{fontSize:"0.8em",color:"#999"}}>{value.area}</p>
                                    <p style={{fontSize:"0.8em",color:"#999"}}>{value.type} {value.point}平</p>
                                </div>
                                <div style={{flex:3,fontSize:"1em",color:"red"}}>
                                    <p  style={{fontSize:"1.2em",color:"red",textAlign:"right",fontWeight:"bold"}}>{value.price}</p>
                                </div>
                            </div>
                        })}

                    </WingBlank>
                </div>
            </div>
        );
    }
}

export default chat;