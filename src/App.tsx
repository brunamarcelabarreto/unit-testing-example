import { useState } from "react"

function App() {
  const [newItem, setNewItem ] = useState('');
  const [list, setList] = useState(['Bruna', 'Diego', 'João']);

  function addToList() {
      setList(state => [...state, newItem]);
  }

  return (
    <>
      <input placeholder='New Item' value={newItem} onChange={e => setNewItem(e.target.value)} />
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}

export default App
