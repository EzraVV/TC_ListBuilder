import React, { useState } from 'react'
import FactionDropdown from './components/FactionDropdown'
import WarbandNameInput from './components/WarbandNameInput'
import CurrencyInputs from './components/CurrencyInputs'
import './App.css'

function App() {
  const [showPopup, setShowPopup] = useState(true)
  const [faction, setFaction] = useState(null)x 
  const [warbandName, setWarbandName] = useState('')
  const [ducats, setDucats] = useState('')
  const [glory, setGlory] = useState('')

  function handleSave() {
    const warbandData = {
      faction,
      warbandName,
      ducats,
      glory,
    }

    const blob = new Blob([JSON.stringify(warbandData, null, 2)], {
      type: 'application/json',
    })

    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${warbandName}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  function handleUpload(event) {
    const file = event.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result)
        setFaction(data.faction || null)
        setWarbandName(data.warbandName || '')
        setDucats(data.ducats || '')
        setGlory(data.glory || '')
        alert('Warband loaded successfully!')
      } catch (err) {
        alert('Invalid file format.')
      }
    }
    reader.readAsText(file)
  }

  return (
    <div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Choose Your Faction</h2>
            <FactionDropdown faction={faction} setFaction={setFaction} />

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
            <label htmlFor="upload-warband" className="upload-label">
              Upload Warband
            </label>
            <input
              type="file"
              id="upload-warband"
              accept=".json"
              onChange={handleUpload}
              className="upload-input"
            />

            <div className="popupButton">
              <button onClick={handleSave}>Save/Export</button>
              <button onClick={() => setShowPopup(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
