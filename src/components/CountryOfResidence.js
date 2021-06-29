import React from 'react';

function CountryOfResidence() {
  return (
    <>
      <label htmlFor="residence">Select your country of residence *</label>
      <select name="residence" id="residence">
        <option value="australia">Australia</option>
      </select>
    </>
  );
}

export default CountryOfResidence;
