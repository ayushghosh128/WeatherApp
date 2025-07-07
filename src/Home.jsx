import React from 'react'

const Home = () => {
  return (
    <div className='container min-h-screen bg-blue-300'>
      <div className="weather">
        <div className="search">
            <input type="text" placeholder='Enter City Name' />
        </div>
      </div>
    </div>
  )
}

export default Home
