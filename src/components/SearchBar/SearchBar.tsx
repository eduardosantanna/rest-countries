import { useThemeContext } from '@/contexts'
import * as styles from './styles.css'

interface ISearchBarProps {
  onChange: (value: string) => void
  valueInput: string
}

export const SearchBar: React.FC<ISearchBarProps> = ({
  onChange,
  valueInput,
}) => {
  const { themeName } = useThemeContext()

  return (
    <div className={styles.containerSearchBar}>
      <input
        value={valueInput}
        onChange={(e) => onChange(e.target.value)}
        className={styles.searchBar[themeName]}
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  )
}
