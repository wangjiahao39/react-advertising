import React, { Component } from 'react'
// 引入 ECharts 主模块
let echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
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
                    <div id="main" style={{ width: 400, height: 400 }}></div>
                </div>
            </div>
        </div>
    }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('main'));
        myChart.setOption({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }

}

export default Home