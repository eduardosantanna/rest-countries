import { useThemeContext } from '@/contexts'
import Image from 'next/image'
import * as styles from './styles.css'

export const Header: React.FC = () => {
  const { toggleTheme, themeName } = useThemeContext()

  return (
    <header className={styles.containerHeader}>
      <div className={styles.containerHeaderContent}>
        <h1 className={styles.textTitle}>Where in the world?</h1>
        <span onClick={toggleTheme} className={styles.containerDarkMode}>
          {themeName === 'dark' && (
            <Image
              style={{ cursor: 'pointer' }}
              className={styles.containerImage}
              width={16}
              height={16}
              loading='eager'
              alt="Dark theme icon"
              src="/assets/img/moon-light-icon.png"
            />
          )}
          {themeName === 'light' && (
            <Image
              style={{ cursor: 'pointer' }}
              className={styles.containerImage}
              width={16}
              height={16}
              alt="Dark theme icon"
              src="/assets/img/moon-dark-icon.png"
            />
          )}
          Dark Mode
        </span>
      </div>
    </header>
  )
}
