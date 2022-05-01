import React from 'react'
import styles from './Home.module.scss'
import MainWrapper from '../../components/MainWrapper/MainWrapper'

export default function Home() {
  return (
    <MainWrapper>
        <div className={styles.Home}>Home</div>
    </MainWrapper>
  )
}
