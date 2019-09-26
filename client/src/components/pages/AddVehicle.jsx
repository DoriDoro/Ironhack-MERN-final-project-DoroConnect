import React from 'react'
import { Link } from 'react-router-dom'

export default function AddVehicle() {
  return (
    <div>
      <h2> Add a new Vehicle </h2>

      <form className="Profile__form-ProfileDetails form">
        <label> VIN: </label>
        <input type="text" name="vin" />

        <div className="form-div__btn">
          <Link to="/profile">
            <button> Add Vehicle </button>
          </Link>
        </div>
      </form>
    </div>
  )
}
