import React, { useContext } from 'react'
import { ThemeContext } from '../../global/ThemeStore'


const ToggleThemeButton = () => {

  const { toggleTheme } = useContext(ThemeContext)

  return (
    <div>
      <button onClick={toggleTheme}>ToggleTheme</button>
    </div>
  )
}

export default ToggleThemeButton
