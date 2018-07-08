import React,{Component} from 'react';
import Router from '../router/router';
import {Link} from 'react-router-dom';
import '../assets/css/tools.css'

class Tools extends Component{
    constructor(){
        super()
        this.goAccount = this.goAccount.bind(this)
    }
    render(){
        console.log(this.props)
        return <div className="tools">
            <div className="tools-header">
                <span className="iconfont icon-jin"></span>
                <span className="iconfont icon-tishi"></span>
                <span>
                    wangjiahao
                    账户ID:6875759
                </span>
            </div>
            <div className="tools-main">
                <h1>工具箱</h1>
            </div>
            <p>
                <Link to="/tools/account">账户管理</Link>
                <Link to="/tools/customer">客户管理</Link>
                <button onClick={this.goAccount}>账户管理</button>
            </p>
            <Router routes={this.props.routes}/>
        </div>
    }
    goAccount(){
        this.props.history.push('/tools/account')
    }
}

export default Tools