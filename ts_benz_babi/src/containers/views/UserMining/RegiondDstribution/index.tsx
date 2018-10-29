import * as React from 'react'
import PageHeader from '@components/PageHeader'
import Map from './map'
import * as styles from './index.scss'


function RegiondDstribution() {
    return (
        <div className={styles.regiondDstribution}>
            <PageHeader/>
            <Map/>
        </div>
    )
}
export default RegiondDstribution
