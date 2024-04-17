import { AllRoutes } from './routes/AllRoutes'
import { CareerProvider } from './context/CareerContext'
import { ProgressProvider } from './context/ProgressContex/ProgressContext'
import { NavBar } from './components/NavBar'


function App() {
  return (
    <>
      <CareerProvider>
        <ProgressProvider>
          <NavBar />
          <AllRoutes />
        </ProgressProvider>
      </CareerProvider>
    </>
  )
}

export default App
