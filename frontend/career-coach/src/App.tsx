import { AllRoutes } from './routes/AllRoutes'
import { CareerProvider } from './context/CareerContext'
import { NavBar } from './components/NavBar'


function App() {
  return (
    <>
    <CareerProvider>
      <NavBar />
      <AllRoutes />
    </CareerProvider>
    </>
  )
}

export default App
