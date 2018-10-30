import React from 'react'
import { Tabs } from 'antd'
const TabPane = Tabs.TabPane
import './index.less'
class TabMapTable extends React.Component{
    callback(key){
        console.log(key)
    }
    render(){
        return(
           <Tabs defaultActiveKey="1" onChange={this.callback}>
               <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
               <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
           </Tabs>
        )
   }
}
export default TabMapTable