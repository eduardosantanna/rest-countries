import {
  ContrieService,
  ICountrieData,
} from '@/services/ApiCountries/ContrieService'
import { Home } from '@/templates/Home/Home'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await new ContrieService().getAllContries()

  if (result instanceof Error) return { props: { notFound: true } }

  return {
    props: {
      result: [...result],
    },
  }
}

export default function HomeRoot({ result }: { result: ICountrieData[] }) {
  return (
    <>
      <Home dataCountries={result} />
    </>
  )
}
