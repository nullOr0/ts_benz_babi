import * as React from 'react'
import Line from './line'
import Table from './table'
import PageHeader from '@components/PageHeader'
import * as styles from './index.scss'
class UserTrends extends React.Component {
    render() {
        return (
            <div className={styles.userTrends}>
                <div className={styles.pageHeader}>
                    <PageHeader/>
                </div>
                <div className={styles.pageLine}>
                    <Line />
                </div>
                <div className={styles.pageTable}>
                    <Table />
                </div>
            </div>
        )
    }
}

export default UserTrends
