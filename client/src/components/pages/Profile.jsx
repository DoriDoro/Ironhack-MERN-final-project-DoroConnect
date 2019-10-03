import React from 'react'
import { Link } from 'react-router-dom'

export default function Profile() {
  // const [countVIN, setCountVIN] = useState({
  //   vin: '',
  //   message: null,
  // })
  // console.log('heres')

  const user = JSON.parse(localStorage.getItem('user'))
  // console.log(user)
  // the details of the user is stored in 'user' from req.user in auth.js file

  return (
    <div className="Profile">
      <h2> Welcome to your profile </h2>

      <div className="form__div-container">
        <form className="Profile__form-ProfileDetails form">
          <label> First Name: </label>
          <input type="text" name="firstName" value={user.firstName} disabled />

          <label> Last Name: </label>
          <input type="text" name="lastName" value={user.lastName} disabled />

          <label> Email: </label>
          <input type="email" name="email" value={user.email} disabled />

          <label> Phone: </label>
          <input
            type="phone"
            name="phone"
            value={
              user.phone ? user.phone : ''
            } /* set the default value to '' */
            disabled
          />

          <label> Address: </label>
          <input
            type="text"
            name="address"
            value={user.address ? user.address : ''}
            disabled
          />

          <div className="form-div__btn">
            <Link to={`/edit-profile/${user._id}`}>
              <button> Edit Profile </button>
            </Link>
          </div>
        </form>

        <form className="Profile__form-ProfileDetails form">
          <div className="form-div__btn">
            <Link to="/add-vehicle">
              <button> Add Vehicle </button>
            </Link>
          </div>

          {user.VIN_ids.map((vin, i) => (
            <div key={i} className="Profile__vehicle-container">
              <label> Vehicle {i + 1}: </label>
              <input type="text" name="vin" value={vin.VIN} disabled />

              <div className="form-div__btn-container">
                <div className="form-div__btn btn-margin">
                  <Link to={`/services/${vin.VIN}`}>
                    <button> ConnectedServices </button>
                  </Link>
                </div>
                <div className="form-div__btn">
                  <Link to={`/vehicle-details/${vin.VIN}`}>
                    <button> Vehicle Details </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </form>
      </div>
    </div>
  )
}
