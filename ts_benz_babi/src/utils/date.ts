/**
 * 封装日期函数的
 *
 */
function timeForMat(count) {
    // 拼接时间
    const time1 = new Date()
    time1.setTime(time1.getTime() - (24 * 60 * 60 * 1000))
    time1.setTime(time1.getTime())
    const Y1 = time1.getFullYear()
    const M1 = ((time1.getMonth() + 1) >= 10 ? (time1.getMonth() + 1) : '0' + (time1.getMonth() + 1))
    const D1 = (time1.getDate() > 10 ? time1.getDate() : '0' + time1.getDate())
    const timer1 = Y1 + '-' + M1 + '-' + D1 + ' 00:00:00'  // 当前时间
    const time2 = new Date()
    time2.setTime(time2.getTime() - (24 * 60 * 60 * 1000 * (count)))
    const Y2 = time2.getFullYear()
    const M2 = ((time2.getMonth() + 1) >= 10 ? (time2.getMonth() + 1) : '0' + (time2.getMonth() + 1))
    const D2 = (time2.getDate() > 10 ? '' + time2.getDate() : '0' + time2.getDate())
    const timer2 = Y2 + '-' + M2 + '-' + D2 + ' 00:00:00' // 之前的7天或者30天
    return {
        t1: timer1,
        t2: timer2
    }
}
export function thirtyDays() {
    // 获取最近30天
    const timer = timeForMat(30)
    return timer
}