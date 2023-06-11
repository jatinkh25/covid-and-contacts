import axios from 'axios'
import { COVID_API } from './constants'

// Create an instance of Axios with a base URL for making COVID API requests
export const covidAPI = axios.create({
  baseURL: COVID_API, // The base URL for the COVID API
})
