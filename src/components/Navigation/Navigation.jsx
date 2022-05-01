import React, {useState, useEffect} from 'react'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import styles from './Navigation.module.scss'


export default function Navigation(props) {  

  const [isFixed, setIsFixed] = useState(false)

  const [loginWithLanguages, setLoginWithLanguages] = useState(null)

  useEffect(() => {
    setIsFixed(props.isFixed)
    setLoginWithLanguages(props.loginWithLanguages)
  }, [props.loginWithLanguages])

  const render = {
    listLogin: () => {
      if (loginWithLanguages) {
        return 
      } else if (!loginWithLanguages) {
        return (
          <a href='#1' className={styles['Navigation-item']}>Login</a>
        )
      }
    },
    languagesLogin: () => {
      if (!loginWithLanguages) {
        return 
      } else if (loginWithLanguages) {
        return (
          <a href='#1' className={styles['Navigation-item']}>Login</a>
        )
      }
    }
  }
  return (

    <div 
      className={
        styles.Navigation 
        + ` ` + 
        (props.styles)
        + ` ` +
        (isFixed ? styles['fixed'] : '')
      }>
      <ul 
        className={
          styles['Navigation-list']
          + ` ` +
          (props.linkGap)
        }>
        <li className={styles['Navigation-item']}>Home</li>
        <li className={styles['Navigation-item']}>More</li>
        {render.listLogin()}
        {/* <li className={styles['Navigation-item']}>Login</li> */}
      </ul>
      <div 
        className={
          styles['lang-log-container']
          + ` ` +
          (props.linkGap)
        }>
        {render.languagesLogin()}
        <LanguageSwitcher languageBtnGap={props.linkGap}/>
      </div>
    </div>

  )
}

//Navigation links and language switcher styles: 
//sp-b: spaced between
//sp-a: spaced around

//Links gap styles:
//g-1: 1rem
//...
//g-5: 5rem