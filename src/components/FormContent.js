import React, { useState, useEffect } from 'react';

export default function FormContent() {
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');
  const [income, setIncome] = useState(0);

  function _onChangeCountry(event) {
    setCountry(event.target.value);
    console.log(event.target.value);
  }

  function _onChangeYear(event) {
    setYear(event.target.value);
    console.log('YEAR', event.target.value);
  }

  function _onInputIncome(event) {
    setIncome(event.target.value);
  }

  return (
    <>
      <label htmlFor="country" select={country}>
        Select your country of residence *
      </label>
      <select name="country" id="country" onChange={_onChangeCountry}>
        <option value="australia">Australia</option>
        <option value="vietnam">Vietnam</option>
      </select>

      <label htmlFor="year">Select an income year *</label>
      <select name="year" id="year" onChange={_onChangeYear}>
        <option value="2020 - 2021">2020 - 2021</option>
        <option value="2019 - 2020">2019 - 2020</option>
      </select>

      <label>
        Enter your total taxable income for the income year *
        <input type="number" placeholder="Amount" onInput={_onInputIncome} />
      </label>
    </>
  );
}
