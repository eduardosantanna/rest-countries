import { ICountrieData } from '@/services/ApiCountries/ContrieService'
import Image from 'next/image'
import * as styles from './styles.css'

interface ICardCountrieProps {
  countrieData: ICountrieData
  onClick: () => void
}

export const CardCountrie: React.FC<ICardCountrieProps> = ({
  countrieData,
  onClick,
}) => {
  return (
    <div onClick={onClick} className={styles.containerCard}>
      <Image
        className={styles.containerImage}
        width={300}
        height={200}
        alt="image cover countrie"
        src={countrieData.flags.png}
      />
      <p title={countrieData.name} className={styles.titleCard}>
        {countrieData.name || '-'}
      </p>
      <p className={styles.textDataCard['fontWeight600']}>
        Population:{' '}
        <span className={styles.textDataCard['fontWeight300']}>
          {countrieData.population.toLocaleString('en') || '-'}
        </span>
      </p>
      <p className={styles.textDataCard['fontWeight600']}>
        Region:{' '}
        <span className={styles.textDataCard['fontWeight300']}>
          {countrieData.region || '-'}
        </span>
      </p>
      <p className={styles.textDataCard['fontWeight600']}>
        Capital:{' '}
        <span className={styles.textDataCard['fontWeight300']}>
          {countrieData.capital || '-'}
        </span>
      </p>
    </div>
  )
}
