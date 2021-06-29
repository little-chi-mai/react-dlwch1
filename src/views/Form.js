import React, { useState } from 'react';

import Warning from '../components/Warning';
import Details from '../components/Details';

export default function Form(props) {
  const [country, setCountry] = useState('Australia');
  const [year, setYear] = useState('2020 - 2021');
  const [income, setIncome] = useState(0);
  const [isForm, setIsForm] = useState(false);

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
    console.log('INCOME', event.target.value);
  }

  function _onSubmit(event) {
    event.preventDefault();
    setIsForm(false);
    // history.push('/result');
    console.log('Country', country);
    console.log('Year', year);
    console.log('Income', income);
  }

  if (isForm) {
    return (
      <div>
        <div className="background">
          <h1>Tax-o-tron</h1>
          <p>The free and simple online tax calculator.</p>
        </div>
        <div className="calculator">
          <form onSubmit={_onSubmit} action="/result">
            <h2>Calculate your tax</h2>
            <Warning />
            <label htmlFor="country" select={country}>
              Select your country of residence *
            </label>
            <select
              value={country}
              name="country"
              id="country"
              onChange={_onChangeCountry}
            >
              <option value="australia">Australia</option>
              <option value="vietnam">Vietnam</option>
            </select>

            <label value={year} htmlFor="year">
              Select an income year *
            </label>
            <select name="year" id="year" onChange={_onChangeYear}>
              <option value="2020 - 2021">2020 - 2021</option>
              <option value="2019 - 2020">2019 - 2020</option>
            </select>

            <label>
              Enter your total taxable income for the income year *
              <input
                type="number"
                placeholder="Amount"
                onChange={_onInputIncome}
                value={income}
              />
            </label>
            <button>Calculate</button>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <div className="result">
            <h2>Your tax results</h2>
            <label htmlFor="country" select={country}>
              Select your country of residence *
            </label>
            <select
              disabled
              value={country}
              name="country"
              id="country"
              onChange={_onChangeCountry}
            >
              <option value="australia">Australia</option>
              <option value="vietnam">Vietnam</option>
            </select>

            <label htmlFor="year">Select an income year *</label>
            <select
              value={year}
              disabled
              name="year"
              id="year"
              onChange={_onChangeYear}
            >
              <option value="2020 - 2021">2020 - 2021</option>
              <option value="2019 - 2020">2019 - 2020</option>
            </select>

            <label>
              Enter your total taxable income for the income year *
              <input
                type="number"
                placeholder="Amount"
                onChange={_onInputIncome}
                value={income}
                disabled
              />
            </label>
            <button onClick={() => setIsForm(true)}>
              Go back to previous screen
            </button>
          </div>
          <div>
            <p>Your estimated tax is:</p>
            <p>$13217</p>
            <p>Breakdown</p>
            <Details bracket="$0 - $18,200" />
            <Details bracket="$18,201 - $45,000" />
            <Details bracket="$45,001 - $120,000" />
            <Details bracket="$120,001 - $180,000" />
            <Details bracket="$180,000+" />
          </div>
        </div>
      </div>
    );
  }
}
