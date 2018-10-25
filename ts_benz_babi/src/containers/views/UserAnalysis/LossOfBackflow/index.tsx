import * as React from 'react'
import Line from './line'
import PageHeader from '@components/PageHeader'
// import * as styles from './index.scss'
class LossOfBackflow extends React.Component {
    render() {
        return (
            <div>
                <PageHeader/>
                <Line/>
            </div>
        )
    }
}
export default LossOfBackflow
