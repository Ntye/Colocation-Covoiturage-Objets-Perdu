import NavbarComb from './components/NavBar.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <NavbarComb />

      <Outlet/>
    </div>
  )
}

export default App
