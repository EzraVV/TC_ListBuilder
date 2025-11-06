import { useState } from 'react'
import TP_Logo from '../Images/TP_Logo.png'
import NA_Logo from '../Images/NA_Logo.png'
import IS_Logo from '../Images/IS_Logo.png'
import HL_Logo from '../Images/HL_Logo.png'
import BG_Logo from '../Images/BG_Logo.png'
import C_Logo from '../Images/C_Logo.png'

function FactionDropdown() {
  const [selectedFaction, setSelectedFaction] = useState(null)

  const factions = [
    { factionID: 1, name: 'Trench Pilgrims', icon: TP_Logo },
    {
      factionID: 2,
      name: 'The Principality of New Antioch',
      icon: NA_Logo,
    },
    { factionID: 3, name: 'The Iron Sultanate', icon: IS_Logo },
    { factionID: 4, name: 'Heretic Legion', icon: HL_Logo },
    {
      factionID: 5,
      name: 'The Cult of the Black Grail',
      icon: BG_Logo,
    },
    {
      factionID: 6,
      name: 'The Court of the Seven-Headed Serpent',
      icon: C_Logo,
    },
  ]

  function handleChange(event) {
    const id = parseInt(event.target.value)
    const faction = factions.find((f) => f.factionID === id)
    setSelectedFaction(faction)
  }

  return (
    <>
      <select onChange={handleChange}>
        <option value="">Select a faction</option>
        {factions.map((faction) => (
          <option key={faction.factionID} value={faction.factionID}>
            {faction.name}
          </option>
        ))}
      </select>

      {selectedFaction && (
        <p>
          <strong>{selectedFaction.name}</strong> <br />
          <br />
          <img
            src={selectedFaction.icon}
            alt={selectedFaction.name}
            style={{ width: '100px', height: 'auto' }}
          />
        </p>
      )}
    </>
  )
}

export default FactionDropdown
