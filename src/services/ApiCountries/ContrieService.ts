import { type } from "os"
import { ApiContries } from "./config"

type TCurrencie = {
  name: string
  code: string
  symbol: string
}

type TLanguages = {
  name: string
}

export interface ICountrieData {
  name: string
  topLevelDomain: string[]
  capital: string
  subregion: string
  region: string
  population: number
  nativeName: string
  currencies: TCurrencie[]
  languages: TLanguages[]
  flags: {
    png: string
    svg: string
  }
  borders: string[] | undefined
}

class ContrieService {
  public async getAllContries(): Promise<ICountrieData[] | Error> {
    try {
      const { data } = await ApiContries.get('/all')
      if (data) return data
      return new Error('Error on find all contries')
    } catch (error) {
      return new Error((error as { message: string }).message || 'Error on find all contries')
    }
  }

  public async getAllContriesByRegion(filter: string): Promise<ICountrieData[] | Error> {
    try {
      const { data } = await ApiContries.get(`/region/${filter}`)
      if (data) return data
      return new Error('Error on find all contries')
    } catch (error) {
      return new Error((error as { message: string }).message || 'Error on find all contries')
    }
  }

  public async getCountryByName(countryName: string): Promise<ICountrieData | Error> {
    try {
      const { data } = await ApiContries.get(`/name/${countryName}`)
      if (data) return data[0]
      return new Error('Error on find country')
    } catch (error) {
      return new Error((error as { message: string }).message || 'Error on find country')
    }
  }

  public async getCountryByCode(codeCountry: string): Promise<ICountrieData | Error> {
    try {
      const { data } = await ApiContries.get(`/alpha/${codeCountry}`)
      if (data) return data
      return new Error('Error on find country')
    } catch (error) {
      return new Error((error as { message: string }).message || 'Error on find country')
    }
  }
}

export { ContrieService }