import { useState } from 'react'
import './App.css'
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="App">
      <div className="App-header">
        <button type="button" onClick={() => changeLanguage('de')}>
          de
        </button>
        <button type="button" onClick={() => changeLanguage('en')}>
          en
        </button>
      </div>
      <div>
        <h1>{t('title')}</h1>
        <strong>
          {t('description.part1')}
        </strong>
      </div>
      <div>{t('description.part2')}</div>
    </div>
  )
}

export default App
