import { Header } from '@/components/Header/Header'
import { useThemeContext } from '@/contexts'
import {
  ContrieService,
  ICountrieData,
} from '@/services/ApiCountries/ContrieService'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import * as styles from './styles.css'

interface IDetailCountryProps {
  dataCountry: ICountrieData
}

export const DetailCountry: React.FC<IDetailCountryProps> = ({
  dataCountry,
}) => {
  const [borderCountries, setBorderCountries] = useState<string[]>([])
  const { themeName } = useThemeContext()
  const router = useRouter()

  useEffect(() => {
    setBorderCountries([])
    dataCountry.borders?.map((borderCountry) => {
      new ContrieService().getCountryByCode(borderCountry).then((result) => {
        if (result instanceof Error) return console.log(result.message)
        setBorderCountries((oldsBorders) => [...oldsBorders, result.name])
      })
    })
  }, [dataCountry.borders])

  return (
    <>
      <Header />
      <nav>
        <div className={styles.containerBackButton}>
          <button onClick={() => router.push('/')} className={styles.button}>
            {themeName === 'light' && (
              <Image
                width={20}
                height={20}
                alt="arrow back"
                src="/assets/img/arrow-left-dark-icon.png"
              />
            )}
            {themeName === 'dark' && (
              <Image
                width={20}
                height={20}
                alt="arrow back"
                src="/assets/img/arrow-left-white-icon.png"
              />
            )}
            Back
          </button>
        </div>
      </nav>
      <main>
        <div className={styles.containerMainDetailContent}>
          <section className={styles.section}>
            <Image
              className={styles.containerImage}
              width={300}
              height={200}
              alt="Country image"
              src={dataCountry.flags.svg}
            />
          </section>
          <section className={`${styles.section} ${styles.sectionTextData}`}>
            <p className={styles.titleCard}>{dataCountry.name}</p>
            <div className={styles.containerDataCountry}>
              <div className={styles.dataInnerSections}>
                <p className={styles.textData['fontWeight600']}>
                  Native Name:{' '}
                  <span className={styles.textData['fontWeight300']}>
                    {dataCountry.nativeName}
                  </span>
                </p>
                <p className={styles.textData['fontWeight600']}>
                  Population:{' '}
                  <span className={styles.textData['fontWeight300']}>
                    {dataCountry.population.toLocaleString('en')}
                  </span>
                </p>
                <p className={styles.textData['fontWeight600']}>
                  Region:{' '}
                  <span className={styles.textData['fontWeight300']}>
                    {dataCountry.region}
                  </span>
                </p>
                <p className={styles.textData['fontWeight600']}>
                  Sub Region:{' '}
                  <span className={styles.textData['fontWeight300']}>
                    {dataCountry.subregion}
                  </span>
                </p>
                <p className={styles.textData['fontWeight600']}>
                  Capital:{' '}
                  <span className={styles.textData['fontWeight300']}>
                    {dataCountry.capital}
                  </span>
                </p>
              </div>
              <div className={styles.dataInnerSections}>
                <p className={styles.textData['fontWeight600']}>
                  Top Level Domain:{' '}
                  <span className={styles.textData['fontWeight300']}>
                    {dataCountry.topLevelDomain}
                  </span>
                </p>
                <p className={styles.textData['fontWeight600']}>
                  Currencies:{' '}
                  {dataCountry.currencies.map((currency, idx) => (
                    <span
                      key={Math.random()}
                      className={styles.textData['fontWeight300']}
                    >
                      {idx > 0 ? ', ' : ''}
                      {currency.name}
                    </span>
                  ))}
                </p>
                <p className={styles.textData['fontWeight600']}>
                  Languages:{' '}
                  {dataCountry.languages.map((language, idx) => (
                    <span
                      key={Math.random()}
                      className={styles.textData['fontWeight300']}
                    >
                      {idx > 0 ? ', ' : ''}
                      {language.name}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <p className={styles.borderCountrieText}>
              Border Countries: {borderCountries.length === 0 && '-'}
              <span className={styles.containerContentBorderCountrie}>
                {borderCountries.map((borderName) => (
                  <button
                    onClick={() => router.push(`/detail/${borderName}`)}
                    className={styles.borderButtonsContainer}
                    key={Math.random()}
                  >
                    {borderName}
                  </button>
                ))}
              </span>
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
