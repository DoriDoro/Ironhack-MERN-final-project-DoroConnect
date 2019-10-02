import React from 'react'
import { Link } from 'react-router-dom'
// import { useLocation } from 'react-use'

export default function VehicleDetails(props) {
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(props.match.params.VIN, user)

  const singleVIN = props.match.params.VIN

  function getSelectedVIN() {
    const resultSelectedVIN = user.VIN_ids.filter(v => v.VIN === singleVIN)
    // console.log(`here`, resultSelectedVIN[0])

    return resultSelectedVIN[0]
  }

  return (
    <div>
      <h2> Vehicle Details </h2>

      <form className="Profile__form-ProfileDetails form">
        <label> VIN: </label>
        <input type="text" name="vin" value={getSelectedVIN().VIN} disabled />

        <div className="form-div__btn-container form-div__btn-container-add-margin">
          <div className="form-div__btn btn-margin">
            <Link to={`/edit-vehicle/${getSelectedVIN()}`}>
              <button> Edit VIN </button>
            </Link>
          </div>
          <div className="form-div__btn">
            <Link to="/profile">
              <button> Delete VIN </button>
            </Link>
          </div>
        </div>

        <label> Pairing Code: </label>
        <input
          type="text"
          name="pairingCode"
          value={getSelectedVIN().proofOfOwnership}
          disabled
        />

        <label> Color: </label>
        <input
          type="text"
          name="color"
          value={getSelectedVIN().color}
          disabled
        />

        <label> PS: </label>
        <input type="text" name="ps" value={getSelectedVIN().ps} disabled />

        <label> kW battery: </label>
        <input
          type="text"
          name="battery"
          value={getSelectedVIN().kWBattery}
          disabled
        />

        <div className="form-div__btn">
          <Link to="/profile">
            <button> Back to Profile </button>
          </Link>
        </div>
      </form>
    </div>
  )
}
