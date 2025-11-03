import { useState } from 'react'

function FactionDropdown() {
  const [selectedFaction, setSelectedFaction] = useState(null)

  const factions = [
    { factionID: 1, name: 'Trench Pilgrims' },
    { factionID: 2, name: 'The Principality of New Antioch' },
    { factionID: 3, name: 'The Iron Sultanate' },
    { factionID: 4, name: 'Heretic Legion' },
    { factionID: 5, name: 'The Cult of the Black Grail' },
    { factionID: 6, name: 'The Court of the Seven-Headed Serpent' },
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
          You selected: <strong>{selectedFaction.name}</strong>
        </p>
      )}
    </>
  )
}

export default FactionDropdown
