import React, { useState } from 'react';

function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (dob) {
      const dobDate = new Date(dob);
      const currentDate = new Date();

      const ageInMilliseconds = currentDate - dobDate;
      const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));

      setAge(ageInYears);
    } else {
      setAge(null);
    }
  };

  return (
    <div className="age-calculator" style={{ textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Age Calculator</h1>
      <h3>Enter your date of birth</h3>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <button
        onClick={calculateAge}
        style={{
          backgroundColor: '#007afd',
          color: 'white',
          padding: '10px',
          border: 'none',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Calculate Age
      </button>
      {age !== null && (
        <p>Your age is {age} years.</p>
      )}
    </div>
  );
}

export default AgeCalculator;
