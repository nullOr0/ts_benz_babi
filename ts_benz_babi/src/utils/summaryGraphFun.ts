import echarts from 'echarts/lib/echarts'
export  function _Line(id, multiple, legend, xData, yData, name, multipleLine) {
    const option = {
        grid: {
            left: '4%',
            right: '2%',
            bottom: '15%',
            containLabel: true,
        },
        tooltip : {
            show: true,
            trigger: 'axis',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            formatter: multiple ?
                '< span style= "color:rgba(187,187,187,1);font-size: 10px" >' +
                '{b}　　' + name + '' +
                '</span>' + ' <br/>' +
                '<span style="color:rgba(255,255,255,1);font-size: 16px">{c}</span>'
                : '',
            axisPointer: {
                type: 'none'
            },
            padding: [14],
            textStyle: {
                fontSize: '16',
                fontFamily: 'ArialMT',
                color: 'rgba(255,255,255,1)'
            },
            singleAxis: {
                nameTextStyle: {
                    color: 'red'
                }
            }
        },
        legend: {
            show: true,
            data: multiple ? [name] : legend,
            textStyle: {
                color: 'rgba(187,187,187,1)',
            },
            selectedMode: false,
            bottom: 20,
        },
        xAxis: {
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
            min: 0,
            offset: 15,
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
                formatter: (value) => {
                    return value < 1000 ? value : value < 1000000 ? (value / 1000) + 'K' :
                        (value / 1000000) + 'M'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(67,67,67,1)',
                }
            }
        },
        series: multiple ? [{
            data: yData,
            name: name,
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(1,84,125,0.1)' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#25272C' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                }
            },
            itemStyle: {
                color: '#0e8fcf',
                borderColor: 'rgba(37, 39, 44, .8)',
                borderWidth: 3,
                borderType: 'solid'
            }
        }] : multipleLine
    }
    try {
        const lineEchart = echarts.init(document.getElementById(id))
        lineEchart.setOption(option, true)
    } catch (e) {}
}
