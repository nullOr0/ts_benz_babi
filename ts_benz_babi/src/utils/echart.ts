/*引用echart库*/
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/chart/line'
import 'echarts/map/js/china'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/pie'
/*报表自适应*/
const setWindowSize = ( type ) => {
    window.addEventListener('resize', function() {
        type.resize()
    })
}
/*多条折线类型*/
export function multipleLines(id, xData, yData, legend) {
    const option  = {
        grid: {
            left: '4%',
            right: '2%',
            bottom: '15%',
            containLabel: true,
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            // formatter: '<span style="color:rgba(187,187,187,1);font-size: 10px">' +
            //     '{b}　　'+name+'' +
            //     '</span>'+' <br/>' +
            //     '<span style="color:rgba(255,255,255,1);font-size: 16px">{c}</span>',
            axisPointer: {
                type: 'none'
            },
            padding: [14],
            textStyle: {
                fontSize: '16',
                fontFamily: 'ArialMT',
                color: 'rgba(255,255,255,1)'
            },
        },
        legend: {
            data: legend,
            textStyle: {
                color: 'rgba(187,187,187,1)',
            },
            selectedMode: false,
            bottom: 20,
        },
        toolbox: {
            show: true,
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: xData,
            offset: 0,
            //  改变x轴颜色
            axisLine: {
                show: false
            },
            //  改变x轴字体颜色和大小
            axisLabel: {
                color: 'rgba(153,153,153,1)',
                fontSize: 12,
                rotate: 60,
            },
            axisTick: {
                show: false,
                alignWithLabel: true
            },
        },
        yAxis: {
            type: 'value',
            offset:15,
            position: 'top',
            //  改变y轴颜色
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            //  改变y轴字体颜色和大小
            axisLabel: {
                color: 'rgba(187,187,187,1)',
                fontSize: 12,
                formatter: function(value) {
                    return value < 1000 ? value : value < 1000000 ? (value / 1000) + 'K' :
                        (value / 1000000) + 'M'
                }
            },
            /*设置分割线的颜色*/
            splitLine: {
                lineStyle: {
                    color: ['rgba(67,67,67,1)'],
                }
            }
        },
        series: yData
    }
    try{
        const lines = echarts.init(document.getElementById(id))
        lines.setOption(option, true)
        setWindowSize(lines)
    } catch (e) {}
}
/*单条折线*/
export function line(name, id, xData, yData, lineColor, areaColor) {
    const option = {
        color: lineColor,
        legend: {
            icon: 'rect',
            itemWidth: 13,
            itemHeight: 2,
            itemGap: 10,
            data: [name],
            textStyle: {
                fontSize: 12,
                color: '#BBBBBB'
            },
            selectedMode: false,
            bottom: '3%',
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xData,
            show: false
        },
        yAxis: {
            type: 'value',
            show: false,
        },
        series: [{
            name: name,
            data: yData,
            symbol: 'none',
            type: 'line',
            lineStyle: {
                normal: {
                    color: lineColor
                }
            },
            areaStyle: {
                color: areaColor
            }
        }]
    }
    try {
        const lineEchart = echarts.init(document.getElementById(id))
        lineEchart.setOption(option)
        setWindowSize(lineEchart)
    } catch (e) {}
}
/*地图报表*/
export function map(id, title, max, data) {
    const option = {
        title: {
            text: title,
            left: '3%',
            bottom: '0%',
            textStyle: {
                color: '#fff',
                fontSize: '12px'
            },
        },
        tooltip : {
            backgroundColor:'rgba(0, 0, 0, 0.9)',
            padding: [10,20],
            trigger: 'item',
            formatter: function(params) {
                let res = params.name+'<br/>';
                let mySeries = option.series;
                for (let i = 0; i < mySeries.length; i++) {
                    for(let j=0;j<mySeries[i].data.length;j++){
                        if(mySeries[i].data[j].name==params.name){
                            res+=mySeries[i].name +' : '+mySeries[i].data[j].value+'</br>';
                        }if(params.name==''){
                            res='暂无数据'
                        }
                    }
                }
                return res;
            }
        },
        dataRange: {
            min: 0,
            max: max,
            left: 'center',
            itemWidth: '8px',
            itemHeight: '120px',
            color: ['#00677F', '#FFFFFF'], // range 范围的颜色
            range: [max, 0], // 文本，默认为数值文本
            realtime:true,
            calculable: true,
            orient: 'horizontal',
            textStyle:{color:'#fff'},
        },
        series: [{
            name:title,
            type: 'map',
            mapType: 'china',
            zoom:1.2,
            data: data,
        }]
    }
    try {
        let map =echarts.init(document.getElementById(id))
        map.setOption(option, true)
        setWindowSize(map)
    } catch (e) {}
}
