import { useThemeContext } from '@/contexts'
import { useState } from 'react'
import * as styles from './styles.css'

interface IFilterByRegionProps {
  children: React.ReactNode
  onChange: (value: string) => void
}

export const FilterByRegion: React.FC<IFilterByRegionProps> = ({
  children,
  onChange,
}) => {
  const { themeName } = useThemeContext()
  const [selectedValue, setSelectedValue] = useState('Filter by Region')

  return (
    <div className={styles.containerSelect}>
      <select
        value={selectedValue}
        className={styles.select[themeName]}
        onChange={(e) => (
          onChange(e.target.value), setSelectedValue(e.target.value)
        )}
      >
        <option value={'Filter by Region'} disabled hidden>
          Filter by Region
        </option>
        {children}
      </select>
    </div>
  )
}
