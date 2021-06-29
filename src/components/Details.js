import React from 'react';

export default function Details(props) {
  return (
    <div className="tax-breakdowns">
      <div>
        <h4>Tax Bracket</h4>
        <p>{props.bracket}</p>
      </div>
      <p>$0</p>
    </div>
  );
}
