import { BrowserRouter, Route, Routes } from "react-router"
import Header from "./features/shared/components/Header"
import Pages from "./features/AllPages/Pages"

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="/home" element={<Pages />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
