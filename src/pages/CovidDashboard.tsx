/* eslint-disable @typescript-eslint/no-explicit-any */
import { Line } from 'react-chartjs-2'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useAppSelector, useCountryCovidData, useMonthWiseCovidData } from '../hooks'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import { Spinner } from '../components'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Monthwise Covid Statistics',
    },
  },
}

const CovidDashboard = () => {
  const {
    data: countryCovidData,
    isLoading: isCountriesDataLoading,
    isError: isCountriesDataError,
  } = useCountryCovidData()
  const {
    data: monthWiseCovidData,
    isLoading: isMonthWiseCovidDataLoading,
    isError: isMonthWiseCovidDataError,
  } = useMonthWiseCovidData()

  const isSidebarOpen = useAppSelector((state) => state.sidebar.isSidebarOpen)

  if (isCountriesDataLoading || isMonthWiseCovidDataLoading) {
    return <Spinner /> // Show spinner while data is loading
  }

  if (isCountriesDataError || isMonthWiseCovidDataError) {
    return (
      <div className="container px-4 py-8 mx-auto">
        <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-bold">Error fetching COVID-19 data</h2>
          <p className="text-red-500">
            There was an issue retrieving the data from the API. Please try again later.
          </p>
        </div>
      </div>
    ) // Show error message if there's an error fetching data
  }

  const lineChartData = {
    labels: Object.keys(monthWiseCovidData?.cases || {}),
    datasets: [
      {
        label: 'Total Cases',
        data: Object.values(monthWiseCovidData?.cases || {}),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Total Deaths',
        data: Object.values(monthWiseCovidData?.deaths || {}),
        fill: false,
        borderColor: 'rgb(250, 50, 50)',
        tension: 0.1,
      },
      {
        label: 'Total Recovered',
        data: Object.values(monthWiseCovidData?.recovered || {}),
        fill: false,
        borderColor: 'rgb(50, 250, 50)',
        tension: 0.1,
      },
    ],
  }

  const customIcon = new Icon({
    iconUrl: '/mapPin.png',
    iconSize: [38, 38],
  })

  return (
    <div>
      <h2>Worldwide Cases</h2>
      <Line data={lineChartData} options={options} />

      <h2>Country-wise Cases</h2>

      <MapContainer
        center={[0, 0]}
        zoom={2}
        scrollWheelZoom={false}
        className={isSidebarOpen ? 'z-negative' : 'z-0'}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {countryCovidData?.map((country: any) => (
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            icon={customIcon}
          >
            <Popup>
              <div>
                <h3>{country.country}</h3>
                <p>Total Active Cases: {country.active}</p>
                <p>Total Recovered: {country.recovered}</p>
                <p>Total Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default CovidDashboard
