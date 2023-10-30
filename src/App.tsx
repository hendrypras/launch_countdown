import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CountdownPage, HomePage } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countdown" element={<CountdownPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
