import {
  ContrieService,
  ICountrieData,
} from '@/services/ApiCountries/ContrieService'
import { DetailCountry } from '@/templates/DetailCountry/DetailCountry'
import { GetServerSideProps } from 'next'

interface ICountrieNameRoot {
  result: ICountrieData
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { countrieName } = query
  const result = await new ContrieService().getCountryByName(
    countrieName as string
  )
  if (result instanceof Error) return { props: { notFound: true } }

  return {
    props: {
      result,
    },
  }
}

const CountrieNameRoot: React.FC<ICountrieNameRoot> = ({ result }) => {
  return (
    <>
      <DetailCountry dataCountry={result} />
    </>
  )
}

export default CountrieNameRoot
