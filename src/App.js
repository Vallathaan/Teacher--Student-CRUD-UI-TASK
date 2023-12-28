import React from 'react'
import { DataProvider } from './Context/DataContext'
import Wrapper from './component/Wrapper'


function App() {
  return (
    <div>
      <DataProvider>
        <Wrapper />
      </DataProvider>
    </div>
  )
}

export default App