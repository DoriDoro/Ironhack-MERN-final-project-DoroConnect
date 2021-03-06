import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../api'

export default function AddVehicle(props) {
  const [addVehicle, setAddVehicle] = useState({
    vin: '',
  })

  function handleChange(e) {
    setAddVehicle({
      ...addVehicle,
      [e.target.name]: e.target.value,
    })
  }

  function handleClick(e) {
    e.preventDefault()

    let newVIN = {
      vin: addVehicle.vin,
    }

    api
      .addVehicle(newVIN)
      .then(result => {
        console.log('VIN added')
        props.history.push('/profile')
      })
      .catch(err => setAddVehicle({ message: err.toString() }))
  }

  return (
    <div className="AddVehicle">
      <h2> Add a new Vehicle </h2>
      <p>Please enter a new vehicle identification number to your account.</p>

      <form className="Profile__form-ProfileDetails form">
        <label> VIN: </label>
        <input
          type="text"
          name="vin"
          value={addVehicle.vin}
          onChange={handleChange}
        />

        <div className="form-div__btn-container form-div__btn-container-add-margin">
          <div className="form-div__btn btn-margin">
            <Link to="/profile">
              <button onClick={e => handleClick(e)}> Add Vehicle </button>
            </Link>
          </div>
          <div className="form-div__btn">
            <Link to="/profile">
              <button> Back to Profile </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}
