import axios from 'axios'

export const ApiContries = axios.create({
  baseURL: 'https://restcountries.com/v2'
})