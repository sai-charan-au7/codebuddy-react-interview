import { useState } from 'react';

function Step1(props) {
  const { emailId, setEmailId, password, setPassword, activeIndex, setActiveIndex, handleSave } =
    props;
  const [emailIdError, setEmailIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const handleEmaildIdChange = e => {
    const id = e.target.value;
    setEmailId(id);
    if (id.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      setEmailIdError('');
    } else {
      setEmailIdError('Please enter valid email id');
    }
  };

  // password Must contain minimum 2 capital letters, 2 small letter, 2 numbers and 2 special characters
  const handlePasswordChange = e => {
    const passwords = e.target.value;
    setPassword(passwords);
    if (passwords.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
      setPasswordError('');
    } else {
      setPasswordError(
        'Password Must contain minimum 2 capital letters, 2 small letter, 2 numbers and 2 special characters',
      );
    }
  };

  return (
    <div className="w-full flex align-center justify-center content-center items-center">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emailId">
              Email Id
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="emailId"
              type="email"
              placeholder="Email Id"
              value={emailId}
              onChange={e => handleEmaildIdChange(e)}
            />
            <p className="text-red-500 text-xs italic">{emailIdError}</p>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => handlePasswordChange(e)}
            />
            <p className="text-red-500 text-xs italic">{passwordError}</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
              type="button"
              label="back"
              onClick={() => {
                setActiveIndex(index => index - 1);
              }}
              disabled={activeIndex === 0}
            >
              Back
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
              type="button"
              label="Save"
              onClick={() => handleSave()}
              disabled={emailIdError || passwordError}
            >
              Save
            </button>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              label="Next"
              onClick={() => {
                setActiveIndex(index => index + 1);
              }}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Step1;
