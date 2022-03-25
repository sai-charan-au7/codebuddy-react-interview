import { useState } from 'react';
import { InputText } from 'primereact/inputtext';

function Step2(props) {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    address,
    setAddress,
    // activeIndex,
    setActiveIndex,
    handleSave,
  } = props;
  const [firstNameError, setFirstNameError] = useState('');
  const [addressError, setAddressError] = useState('');

  return (
    <div className="w-full flex align-center justify-center content-center items-center">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <InputText
              placeholder="First Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              min={2}
              max={50}
            />
            <p className="text-red-500 text-xs italic">{firstNameError}</p>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <InputText
              placeholder="Last Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              min={0}
              max={50}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address
            </label>
            <InputText
              placeholder="Address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              min={10}
              max={100}
              id="address"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
            <p className="text-red-500 text-xs italic">{addressError}</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
              type="button"
              label="back"
              onClick={() => {
                setActiveIndex(index => index - 1);
              }}
            >
              Back
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
              type="button"
              label="Save"
              onClick={() => handleSave()}
              disabled={firstName.length < 2 || address.length < 10}
            >
              Save
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
              type="button"
              label="next"
              onClick={() => {
                if (firstName.length < 2) {
                  setFirstNameError('First name is required');
                } else if (address.length < 10) {
                  setAddressError('Address is required');
                } else {
                  setFirstNameError('');
                  setActiveIndex(index => index + 1);
                }
              }}
              disabled={firstName.length < 2 || address.length < 10}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Step2;
