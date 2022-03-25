import { useState } from 'react';
// import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { Checkbox } from 'primereact/checkbox';

function Step3(props) {
  const countryCode = [
    { name: 'India (+91)', code: '91' },
    { name: 'America (+1)', code: '1' },
  ];
  const {
    setCountryCodeValue,
    countryCodeValue,
    phoneNumber,
    setPhoneNumber,
    acceptTermsAndCondition,
    setAcceptTermsAndCondition,
    // activeIndex,
    setActiveIndex,
    handleSave,
    handleSubmit,
  } = props;
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [acceptTermsAndConditionError, setAcceptTermsAndConditionError] = useState('');
  const handleSubmits = () => {
    if (phoneNumber.length < 10) {
      setPhoneNumberError('Phone number is not valid');
    } else if (!acceptTermsAndCondition) {
      setAcceptTermsAndConditionError('Please accept terms and conditions');
    } else {
      setPhoneNumberError('');
    }

    handleSubmit();
  };

  return (
    <div className="w-full flex align-center justify-center content-center items-center">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="countryCode">
              Phone Number
            </label>
            <div className="mb-4 flex flex-row">
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="countryCode"
                value={countryCodeValue}
                onChange={e => setCountryCodeValue(e.target.value)}
              >
                {countryCode.map(item => (
                  <option key={item.code} value={item.code}>
                    {item.name}
                  </option>
                ))}
              </select>
              <InputMask
                id="basic"
                mask="99999-99999"
                value={phoneNumber}
                placeholder="99-999999"
                onChange={e => setPhoneNumber(e.value)}
              />
              <p className="text-red-500 text-xs italic">{phoneNumberError}</p>
            </div>
          </div>
          <div className="mb-6 flex flex-row gap-4  ">
            <Checkbox
              inputId="binary"
              checked={acceptTermsAndCondition}
              onChange={e => setAcceptTermsAndCondition(e.checked)}
            />
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="acceptTermsAndCondition"
            >
              Accept Terms and Condition
            </label>
          </div>
          <div className="mb-6">
            <p className="text-red-500 text-xs italic">{acceptTermsAndConditionError}</p>
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
              disabled={phoneNumber === '' || !acceptTermsAndCondition}
            >
              Save
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
              type="button"
              label="next"
              onClick={() => {
                handleSave();
                handleSubmits();
              }}
              disabled={phoneNumber === '' || !acceptTermsAndCondition}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Step3;
