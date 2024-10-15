import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'

const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

function App() {

  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [attr, setAttr] = useState('name')

  const fetchRandom = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPerson(data.results[0]);
      console.log(data.results[0]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  const mouseOver = async (e) => {
    if (e.target.dataset.label) {
      setAttr(e.target.dataset.label)
    }
  }

  useEffect(() => {
    fetchRandom();
  }, []);
 
  const info = {
    "picture": person.picture.large,
    "name": person.name.first + " " + person.name.last,
    "email": person.email,
    "street": person.location.street.name,
    "age": (new Date).getFullYear() - (new Date(person.dob)).getFullYear(),
    "phone": person.phone,
    "password": person.login.password,
  }

  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='container'>
        <img src={info["picture"]} alt={info["name"]} />
        <p className='user-title'>My {attr} is</p>
        <p className='user-value'>{info[attr]}</p>
        <div className='values-list'>
          <button className='icon' data-label="name" onMouseEnter={mouseOver}>
            <FaUser className='icon' />
          </button>
          <button className='icon' data-label="email" onMouseEnter={mouseOver}>
            <FaEnvelopeOpen className='icon' />
          </button>
          <button className='icon' data-label="age" onMouseEnter={mouseOver}>
            <FaCalendarTimes className='icon' />
          </button>
          <button className='icon' data-label="street" onMouseEnter={mouseOver}>
            <FaMap className='icon' />
          </button>
          <button className='icon' data-label="phone" onMouseEnter={mouseOver}>
            <FaPhone className='icon' />
          </button>
          <button className='icon' data-label="password" onMouseEnter={mouseOver}>
            <FaLock className='icon' />
          </button>
        </div>
        <button className='btn btn-primay' onClick={fetchRandom}>Random User</button>
      </div>
    </main>
  );
}

export default App
