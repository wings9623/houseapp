import React, { Component } from 'react';
import {HashRouter,Switch,Route} from "react-router-dom"
import Login from "./login/Login"
import Nav from "./nav/Nav"
import Register from "./register/Register"
import City from "./city/City"
import Error404 from "./error404/Error404"
class MainRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    {/* 根目录加载nav,并精确查找 */}
                    <Route path="/" exact component={Nav}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route path="/city" component={City}></Route>
                    <Route path="/nav" component={Nav}></Route>
                    {/* 404页面 */}
                    <Route component={Error404}></Route>
                </Switch>
            </HashRouter>
        );
    }
}

export default MainRouter;