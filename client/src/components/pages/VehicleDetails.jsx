import React from 'react'
import api from '../../api'
import { Link } from 'react-router-dom'

export default function VehicleDetails(props) {
  const user = JSON.parse(localStorage.getItem('user'))
  // console.log(props.match.params.VIN, user)
  // console.log(`--------- user`, user)

  const singleVIN = props.match.params.VIN
  // console.log(singleVIN)

  function getSelectedVIN() {
    const resultSelectedVIN = user.VIN_ids.filter(v => v.VIN === singleVIN)
    // console.log(`here`, resultSelectedVIN[0]) // the object with all info about the VIN_ids of the VIN for this route
    // console.log('second: ', resultSelectedVIN[0]._id)
    // console.log(`----`, resultSelectedVIN)
    return resultSelectedVIN[0]
  }

  function onHandleDelete(e) {
    e.preventDefault()
    let getSelected_id = getSelectedVIN()._id

    api
      .deleteVehicle(getSelected_id)
      .then(updatedUser => {
        console.log('Deletion successfull')
        // console.log(getSelected_id)
        localStorage.setItem('user', JSON.stringify(updatedUser))

        props.history.push('/profile')
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h2> Vehicle Details </h2>

      <form className="Profile__form-ProfileDetails form">
        <label> VIN: </label>
        <input type="text" name="vin" value={getSelectedVIN().VIN} disabled />

        <div className="form-div__btn-container form-div__btn-container-add-margin">
          <div className="form-div__btn">
            <Link to="/profile">
              <button onClick={e => onHandleDelete(e)}> Delete VIN </button>
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
