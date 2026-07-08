import React from 'react'

function RoutePanel({route, reasoning}) {
  return (
    <div className='card'>
      <h2>Recomended Route</h2>
      <h1>{route}</h1>
      <p>{reasoning}</p>
    </div>
  )
}

export default RoutePanel
