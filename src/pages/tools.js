import React,{Component} from 'react';
import Router from '../router/router';
import {Link} from 'react-router-dom';
class Tools extends Component{
    constructor(){
        super()
        this.goAccount = this.goAccount.bind(this)
    }
    render(){
        console.log(this.props)
        return <div>
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