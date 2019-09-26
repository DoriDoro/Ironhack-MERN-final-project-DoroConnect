import React from 'react'
import { Link } from 'react-router-dom'

export default function ConnectedServices() {
  return (
    <div>
      <p> battery status: </p>

      <p> km: </p>
      <p> driver history: </p>
      <p> horn/lights: </p>
      <p> temperatur: </p>
      <p> climate controle: </p>
      <form className="Profile__form-ProfileDetails form">
        <label> route planner: </label>
        <div className="form-div__btn">
          <a href="https://chargemap.com/map">
            <button> ChargeMaps </button>
          </a>
        </div>
        <div className="form-div__btn">
          <Link to="/profile">
            <button> Back to Profile </button>
          </Link>
        </div>
      </form>
    </div>
  )
}
