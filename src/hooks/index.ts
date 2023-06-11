import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../redux/store'
import { useQuery } from 'react-query'
import { covidAPI } from '../utils/apis'
import { useEffect } from 'react'

// Custom hook to get the Redux dispatch function
export const useAppDispatch = () => useDispatch<AppDispatch>()

// Custom hook to access the Redux store's state
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// Function to fetch country-wise COVID-19 data
const getCountryCovidData = async () => {
  const response = await covidAPI.get('/countries')
  return response.data
}

// Custom hook to use the country-wise COVID-19 data query
export function useCountryCovidData() {
  return useQuery(['covid', 'country'], getCountryCovidData)
}

// Function to fetch month-wise COVID-19 data
const getMonthWiseCovidData = async () => {
  const response = await covidAPI.get('/historical/all?lastdays=all')
  return response.data
}

// Custom hook to use the month-wise COVID-19 data query
export function useMonthWiseCovidData() {
  return useQuery(['covid', 'monthwise'], getMonthWiseCovidData)
}

// Custom hook to handle outside click events
export const useOutsideClick = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    const handleOutsideClick = (event: MouseEvent) => handleClick(event)
    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [ref, callback])
}
