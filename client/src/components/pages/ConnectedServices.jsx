import React from 'react'
import { Link } from 'react-router-dom'

export default function ConnectedServices() {
  return (
    <div className="ConnectedServices">
      <p> km: </p>
      <p> climate controle: </p>

      <div className="ConnectedServices__battery">
        <p> battery status: </p>
      </div>
      <div>
        <p> temperatur: </p>
      </div>

      <form className="Profile__form-ProfileDetails form">
        <label> route planner: </label>
        <div className="form-div__btn">
          <a
            href="https://chargemap.com/map"
            target="_blank"
            rel="noopener noreferrer"
          >
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
