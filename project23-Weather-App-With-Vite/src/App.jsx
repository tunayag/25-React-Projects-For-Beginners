import React, { useState } from 'react'
import { useEffect } from 'react';
import Weather from "./Weather"
import Loading from './Loading';
import Input from './Input';


function App() {
  const [weather, setWeather] = useState([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState("Rome")
  const [search, setSearch] = useState("")
  const [error, setError] = useState("")


  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=571019376aa5e43c95907cb790330875`)
      const data = await response.json()
      setLoading(false);
      setWeather(data)
      console.log(data)
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData()
  }, [query])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }


  if (weather.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchData()}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <>
      {!loading && weather ? (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          </form>
          <h1>Weather App</h1>
          <Weather
            weather={weather}
          />
        </div>
      ) :
        !loading && !weather && <h2>City not found.</h2>
      }
    </>

  )
}

export default App