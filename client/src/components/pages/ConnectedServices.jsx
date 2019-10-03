import React from 'react'
import { Link } from 'react-router-dom'

export default function ConnectedServices() {
  return (
    <div className="ConnectedServices">
      <h2> Connected Services: </h2>

      <div className="form__div-container">
        <form className="Profile__form-ProfileDetails form">
          <label> total millage: </label>
          <input type="text" name="km" disabled value="50km" />

          <label> battery status: </label>
          <input type="text" name="battery" value="50%" disabled />

          <label> temperature: </label>
          <input type="text" name="temp" value="20°C" disabled />

          <div className="form-div__btn">
            <Link to="/profile">
              <button> Back to Profile </button>
            </Link>
          </div>
        </form>

        <form className="Profile__form-ProfileDetails form">
          <div className="form-div__btn">
            <button>
              {' '}
              <a
                href="https://chargemap.com/map"
                target="_blank"
                rel="noopener noreferrer"
              >
                route planner: ChargeMaps
              </a>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
