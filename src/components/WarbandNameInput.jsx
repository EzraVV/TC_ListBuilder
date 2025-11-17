import React from 'react'

function WarbandNameInput({ warbandName, setWarbandName }) {
  return (
    <div className="warband-name-field">
      <label htmlFor="warband">Warband Name</label>
      <input
        id="warband"
        type="text"
        value={warbandName}
        onChange={(e) => setWarbandName(e.target.value)}
        placeholder="Enter warband name"
      />
    </div>
  )
}

export default WarbandNameInput
