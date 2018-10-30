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
        case 'map':
            let mapData = []
            let allValue = []
            for (let i in loadData.entitys) {
                mapData.push({
                    name: loadData.entitys[i].name.replace("省","").replace("市","").replace("特别行政区","").replace("维吾尔","").replace("回族","").replace("壮族","").replace("自治区",""),
                    value: loadData.entitys[i].data
                })
                allValue.push(loadData.entitys[i].data)
            }
            return {
                data: mapData,
                maxValue: getMaxValue(allValue)
            }
            break;
        default:
    }
}
/**
 *  获取数组中最大值，在此主要用与map报表中
* */
export function getMaxValue(arr){
    let num =arr[0];
    for(let i=0;i<arr.length;i++){
        if(num<arr[i]){
            num=arr[i]
        }
    }
    return num
}