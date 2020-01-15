import React, { useEffect, useState } from 'react';
import API from './service'

import './global.css'
import './sideBar.css'
import './App.css'
import './main.css'

import DevItem from './Components/DevItem'
import DevForm from './Components/devForm'

function App() {
  const [devs, setDevs] = useState([])
  
  useEffect(() => {
    (async function loadDevs() {
      const res = await API.get('/devs')
      setDevs(res.data)
    })()
  }, [])

  async function handleAddSubmit(data) {
    const res = await API.post('/devs', data)
    setDevs([...devs, res.data])
  }


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm 
          onSubmit={handleAddSubmit}
        />
      </aside>

      <main>
        <ul>  
          {devs.map(e => {
            return (
              <DevItem  
                key={e._id}
                e = {e}
              />
            )
          })}
        </ul> 
      </main>
    </div>
  );
}

export default App;
