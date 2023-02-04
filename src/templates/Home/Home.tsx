import { CardCountrie } from '@/components/CardCountrie/CardCountrie'
import { FilterByRegion } from '@/components/FilterByRegion/FilterByRegion'
import { Header } from '@/components/Header/Header'
import { SearchBar } from '@/components/SearchBar/SearchBar'
import {
  ContrieService,
  ICountrieData,
} from '@/services/ApiCountries/ContrieService'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import * as styles from './styles.css'

interface IHomeProps {
  dataCountries: ICountrieData[]
}

export const Home: React.FC<IHomeProps> = ({ dataCountries }) => {
  const regions: string[] = [
    'All',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ]

  const router = useRouter()

  const [limit, setLimit] = useState(12)
  const [controlPaginate, setControlPaginate] = useState(12)
  const [stopObserver, setStopObserver] = useState(false)
  const [countriesList, setCountriesList] = useState([] as ICountrieData[])
  const [countriesListTotal, setCountriesListTotal] = useState([
    ...dataCountries,
  ])
  const [countriesListFilter, setCountriesListFilter] = useState(
    [] as ICountrieData[]
  )
  const [searchBar, setSearchBar] = useState('')
  const elementObserver = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (searchBar.length > 0) {
      setStopObserver(true)
      setCountriesListFilter([
        ...countriesListTotal.filter((countrie) => {
          return countrie.name.toLowerCase().includes(searchBar.toLowerCase())
        }),
      ])
    } else if (searchBar.length === 0) {
      setStopObserver(false)
      setCountriesList((oldState) => [
        ...oldState,
        ...countriesListTotal
          .slice(limit - controlPaginate, limit)
          .filter((countrie) => {
            for (let i = 0; i < oldState.length; i++) {
              if (oldState[i].name === countrie.name) return false
            }
            return countrie
          }),
      ])
    }
  }, [countriesListTotal, limit, controlPaginate, searchBar])

  useEffect(() => {
    if (stopObserver) return
    const iObserver = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          if (limit + 12 > countriesListTotal.length) {
            setControlPaginate(countriesListTotal.length - limit)
            setLimit(countriesListTotal.length)
            setStopObserver(true)
          } else {
            setLimit((oldLimit) => oldLimit + 12)
          }
        }
      })
    })
    const { current } = elementObserver
    iObserver.observe(current as Element)
    return () => {
      iObserver.unobserve(current as Element)
    }
  })

  const findDataByContinent = async (e: string) => {
    if (e !== 'All') {
      const result = await new ContrieService().getAllContriesByRegion(e)
      if (result instanceof Error) return console.log(result.message)
      setCountriesList([])
      setLimit(12)
      setControlPaginate(12)
      setCountriesListTotal(result)
      return
    }
    setCountriesListTotal([...dataCountries])
    setLimit(12)
    setControlPaginate(12)
    setCountriesList([])
  }

  return (
    <>
      <Header />
      <main className={styles.containerMain}>
        <section className={styles.containerSection}>
          <div className={styles.containerSearchAndFilterRegion}>
            <SearchBar
              valueInput={searchBar}
              onChange={(value) => setSearchBar(value)}
            />
            <FilterByRegion onChange={(e) => findDataByContinent(e)}>
              {regions.map((region) => (
                <option value={region} key={Math.random()}>
                  {region}
                </option>
              ))}
            </FilterByRegion>
          </div>
        </section>
        <section className={styles.containerListCard}>
          {!searchBar &&
            countriesList.map((countrie) => (
              <CardCountrie
                onClick={() => router.push(`/detail/${countrie.name}`)}
                key={Math.random()}
                countrieData={countrie}
              />
            ))}

          {searchBar &&
            countriesListFilter.map((countrie) => (
              <CardCountrie
                onClick={() => router.push(`/detail/${countrie.name}`)}
                key={Math.random()}
                countrieData={countrie}
              />
            ))}
        </section>
        <div ref={elementObserver}></div>
      </main>
    </>
  )
}
