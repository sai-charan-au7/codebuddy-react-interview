import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import './StepsDemo.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const Home = () => {
  const navigate = useNavigate();

  const onSubmit = () => navigate('/posts');
  const [localdata, setLocalData] = useState(
    useEffect(() => {
      const data = localStorage.getItem('codebuddy');
      setLocalData(data);
    }, []),
  );

  const [activeIndex, setActiveIndex] = useState(localStorage.getItem('activeIndex') || 0);
  const [emailId, setEmailId] = useState(localdata ? localdata.emailId : '');
  const [password, setPassword] = useState(localdata ? localdata.password : '');
  const [firstName, setFirstName] = useState(localdata ? localdata.firstName : '');
  const [lastName, setLastName] = useState(localdata ? localdata.lastName : '');
  const [address, setAddress] = useState(localdata ? localdata.address : '');
  const countryCode = [
    { name: 'India (+91)', code: '+91' },
    { name: 'America (+1)', code: '+1' },
  ];
  const [countryCodeValue, setCountryCodeValue] = useState(
    localdata ? localdata.countryCodeValue : '',
  );
  const [phoneNumber, setPhoneNumber] = useState('activeIndex' || 0);
  const [acceptTermsAndCondition, setAcceptTermsAndCondition] = useState(
    localdata ? localdata.acceptTermsAndCondition : false,
  );

  const toast = useRef(null);
  const items = [
    {
      label: 'Step 1',
    },
    {
      label: 'Step 2',
    },
    {
      label: 'Step 3',
    },
  ];
  const handleSave = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Saved',
      detail: 'Form Saved',
    });
    localStorage.setItem('codebuddy', {
      emailId,
      password,
      firstName,
      lastName,
      address,
      countryCodeValue,
      phoneNumber,
      acceptTermsAndCondition,
    });
    localStorage.setItem('activeIndex', activeIndex);
  };

  const handleSubmit = () => {
    const method = {
      method: 'POST',
      body: JSON.stringify({
        emailId,
        password,
        firstName,
        lastName,
        address,
        countryCodeValue,
        phoneNumber,
      }),
    };
    const url = 'https://codebuddy.review/submit';
    fetch(url, method)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        localStorage.removeItem('codebuddy');
        localStorage.removeItem('activeIndex');
        window.location.href = '/posts';
      })
      .catch(err => console.log(err));
  };

  return (
    <main>
      <div className="px-8">
        <div className="steps-demo">
          <Toast ref={toast} />
          <Steps
            model={items}
            activeIndex={activeIndex}
            // onSelect={e => setActiveIndex(e.index)}
            readOnly
          />
        </div>
        {activeIndex === 0 && (
          <Step1
            onSubmit={onSubmit}
            toast={toast}
            emailId={emailId}
            setEmailId={setEmailId}
            password={password}
            setPassword={setPassword}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            handleSave={handleSave}
          />
        )}
        {activeIndex === 1 && (
          <Step2
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            address={address}
            setAddress={setAddress}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            handleSave={handleSave}
          />
        )}
        {activeIndex === 2 && (
          <Step3
            countryCode={countryCode}
            setCountryCodeValue={setCountryCodeValue}
            countryCodeValue={countryCodeValue}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            acceptTermsAndCondition={acceptTermsAndCondition}
            setAcceptTermsAndCondition={setAcceptTermsAndCondition}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            handleSave={handleSave}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </main>
  );
};

export default Home;
