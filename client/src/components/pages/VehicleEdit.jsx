import React, { useState } from 'react'
import api from '../../api'
import { Link } from 'react-router-dom'

export default function VehicleEdit(props) {
  const user = JSON.parse(localStorage.getItem('user'))
  // console.log(user)

  const [editVIN, setEditVIN] = useState({
    vin: user.VIN_ids[0].VIN,
  })

  function handleChange(e) {
    setEditVIN({
      ...editVIN,
      [e.target.name]: e.target.value,
    })
  }

  function handleClick(e) {
    e.preventDefault()

    let newVIN = { vin: editVIN.vin }
    // console.log(newVIN)
    api
      .editVINDetails(newVIN)
      .then(result => {
        console.log('success, VIN undated')
        props.history.push('/profile')
      })
      .catch(err => setEditVIN({ ...editVIN, message: err.toString() }))
  }

  return (
    <div className="VehicleEdit">
      <h2> Edit the VIN </h2>

      <form className="Profile__form-ProfileDetails form">
        <label> VIN: </label>
        <input
          type="text"
          name="vin"
          value={editVIN.vin}
          onChange={handleChange}
        />

        <div className="form-div__btn-container form-div__btn-container-add-margin">
          <div className="form-div__btn btn-margin">
            <button onClick={e => handleClick(e)}> Save </button>
          </div>
          <div className="form-div__btn">
            <Link to="/profile">
              <button> Back to Profile </button>
            </Link>
          </div>
        </div>
      </form>
      {editVIN.message && (
        <div className="info info-danger">{editVIN.message}</div>
      )}
    </div>
  )
}
