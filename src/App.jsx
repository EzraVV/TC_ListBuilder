import React, { useState } from 'react'
import FactionDropdown from './components/FactionDropdown'
import WarbandNameInput from './components/WarbandNameInput'
import CurrencyInputs from './components/CurrencyInputs'
import './App.css'

function App() {
  const [showPopup, setShowPopup] = useState(true)
  const [warbandName, setWarbandName] = useState('')
  const [ducats, setDucats] = useState('')
  const [glory, setGlory] = useState('')

  return (
    <div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Choose Your Faction</h2>
            <FactionDropdown />
            <WarbandNameInput
              warbandName={warbandName}
              setWarbandName={setWarbandName}
            />
            <CurrencyInputs
              ducats={ducats}
              setDucats={setDucats}
              glory={glory}
              setGlory={setGlory}
            />

            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
