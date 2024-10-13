import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const proxyUrl = 'https://corsproxy.io/?';
const url = 'https://course-api.com/react-tours-project'
const finalUrl = proxyUrl + encodeURIComponent(url);

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {
    try {
      setLoading(true);
      const response = await fetch(finalUrl);
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const removeTour = (id) => {
    setTours(tours.filter((t) => t.id !== id));
  }
  
  useEffect(() => {
    fetchTours();
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}

export default App
