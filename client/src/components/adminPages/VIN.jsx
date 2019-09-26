import React, { useEffect, useState } from 'react'
import api from '../../api'

export default function Countries() {
  const [vins, setVins] = useState([])
  useEffect(() => {
    api
      .getCountries()
      .then(vins => {
        setVins(vins)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="Countries">
      <h2>List of countries</h2>
      {vins.map(v => (
        <li key={v._id}>{v.name}</li>
      ))}
    </div>
  )
}
