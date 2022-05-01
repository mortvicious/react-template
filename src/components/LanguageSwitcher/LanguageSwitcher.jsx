import React, {useState} from 'react'
import styles from './LanguageSwitcher.module.scss'

export default function LanguageSwitcher(props) {

  const [language, setLanguage] = useState('en')
  
  const handleLanguageChange = (e) => {
    const id = e.target.id
    setLanguage(id)
  }

  return (
    <div 
      className={
        styles.LanguageSwitcher
        + ` ` +
        (props.languageBtnGap)
      }>
        <button 
          id='en' 
          onClick={handleLanguageChange}
          className={styles['lng-btn'] + ` ` + (language === 'en' ? 'active' : '')}
          >en
          </button>
        <button 
          id='de' 
          onClick={handleLanguageChange}
          className={styles['lng-btn'] + ` ` + (language === 'de' ? 'active' : '')}
          >de
          </button>
    </div>
  )
}
