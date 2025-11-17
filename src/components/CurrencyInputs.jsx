import React from 'react'

function CurrencyInputs({ ducats, setDucats, glory, setGlory }) {
  return (
    <div className="currency-row">
      <div className="currency-field">
        <label htmlFor="ducats">Ducats</label>
        <input
          id="ducats"
          type="number"
          value={ducats}
          onChange={(e) => setDucats(e.target.value)}
          placeholder="0"
          min="0"
        />
      </div>

      <div className="currency-field">
        <label htmlFor="glory">Glory</label>
        <input
          id="glory"
          type="number"
          value={glory}
          onChange={(e) => setGlory(e.target.value)}
          placeholder="0"
          min="0"
        />
      </div>
    </div>
  )
}

export default CurrencyInputs
