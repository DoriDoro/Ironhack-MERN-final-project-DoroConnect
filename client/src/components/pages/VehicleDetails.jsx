import React from 'react'
import { Link } from 'react-router-dom'

export default function VehicleDetails() {
  return (
    <div>
      <h2> Vehicle Details </h2>

      <form className="Profile__form-ProfileDetails form">
        <label> VIN: </label>
        <input type="text" name="vin" />

        <label> Pairing Code: </label>
        <input type="password" name="pairingCode" />

        <label> Color: </label>
        <input type="text" name="color" />

        <label> PS: </label>
        <input type="text" name="ps" />

        <label> kW battery: </label>
        <input type="number" name="battery" />

        <div className="form-div__btn">
          <Link to="/profile">
            <button> Back to Profile </button>
          </Link>
        </div>
      </form>
    </div>
  )
}
