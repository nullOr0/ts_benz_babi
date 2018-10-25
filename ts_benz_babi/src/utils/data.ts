/*折线报表样式*/
export function chartStyles() {
    return {
        lineStyle: function(borderColor, width, color) {
            return {
                /*设置折线样式*/
                line: {
                    /* 设置这点的颜色*/
                    color: color,
                    borderColor: borderColor,
                    borderWidth: width,
                    borderType: 'solid',
                    /*设置折线的颜色*/
                    lineStyle: {
                        color: color
                    }
                }
            }
        }
    }
}
export function dataHandle(type, loadData, color, legendName) {
    switch (type) {
        case 'line':
            const yData = []
            for(const i in loadData.entitys) {
                const obj = {
                    name: legendName[i],
                    type: type,
                    symbol: 'circle',
                    symbolSize: 10,
                    data: loadData.entitys[i].dataList,
                    itemStyle : chartStyles().lineStyle('rgba(37, 39, 44, .8)', 3, color[i]).line
                }
                yData.push(obj)
            }
            return {
                xData: loadData.xnames,
                yData: yData
            }
            break
        default:
    }
}
