import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { darkTheme, lightTheme } from '@/themes/theme.css'

interface IThemeContextData {
  themeName: 'light' | 'dark'
  toggleTheme: () => void
}

interface IThemeContextProviderProps {
  children: React.ReactNode
}

const ThemeContext = createContext({} as IThemeContextData)

export const useThemeContext = () => {
  return useContext(ThemeContext)
}

export const ThemeContextProvider: React.FC<IThemeContextProviderProps> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<'dark' | 'light'>('light')

  const toggleTheme = useCallback(() => {
    setThemeName((oldState) => (oldState === 'light' ? 'dark' : 'light'))
  }, [])

  useEffect(() => {
    themeName === 'light'
      ? (document.body.className = lightTheme)
      : (document.body.className = darkTheme)
  }, [themeName])

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeName }}>
      {children}
    </ThemeContext.Provider>
  )
}
