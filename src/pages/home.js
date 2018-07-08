import React, { Component } from 'react'
//let echarts = require('echarts/lib/echarts');
import moment from 'moment'
import '../assets/css/home.css'

class Home extends Component {
    render() {
        return <div className="home">
            <div className="home-header">
                <span className="iconfont icon-jin"></span>
                <span className="iconfont icon-tishi"></span>
                <span>
                    wangjiahao
                    账户ID:6875759
                </span>
            </div>
            <div className="home-main">
                <div className="home-list">
                    <dl>
                        <dt>
                            <span className="iconfont icon-qianbao-SVG"></span>
                        </dt>
                        <dd>
                            <p>现金账户</p>
                            <h2>￥126,560.00</h2>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span className="iconfont icon-qianbao-SVG"></span>
                        </dt>
                        <dd>
                            <p>今日消耗</p>
                            <h2>￥5,400</h2>
                        </dd>
                    </dl>
                </div>
                <div className="home-section">
                    <div className="home-up">
                        <b>整体情况</b>
                        <p>
                            <span>近7天</span>
                            <span>近30天</span>
                            <input type="text" placeholder="请选择订单日期"/>
                        </p>
                    </div>
                    <div id="main"></div>
                </div>
            </div>
        </div>
    }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('main'));
        let date = new Date();
        console.log(moment().month(date.getMonth()).format("YYYY-MM-DD"))
        console.log(moment().add(1,'days').format("YYYY/MM/DD"))
        let arr = []
        for(let i = 1;i<=5;i++){
            arr.unshift(moment().subtract(i,'days').format("YYYY/MM/DD"))
        }
        myChart.setOption({
            xAxis: {
                type: 'category',
                data: arr
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [600, 930, 800, 1200, 1290],
                type: 'line'
            }]
        });
        window.onresize = function(){
            myChart.resize()
        }
    }

}

export default Home