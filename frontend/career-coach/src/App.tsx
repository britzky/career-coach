import { AllRoutes } from './routes/AllRoutes'
import { CareerProvider } from './context/CareerContext'

function App() {
  return (
    <>
    <CareerProvider>
      <AllRoutes />
    </CareerProvider>
    </>
  )
}

export default App
