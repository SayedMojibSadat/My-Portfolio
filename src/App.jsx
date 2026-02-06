import { BrowserRouter, Route, Routes } from "react-router" 
import Header from "./features/shared/components/Header"
import Pages from "./features/AllPages/Pages"
import { ThemeProvider } from "./features/themContext/ThemeContext"
import ThemeSettings from "./features/themSetting/ThemeSettings"

function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <BrowserRouter>
        <ThemeProvider>
          <ThemeSettings />
          <Header />
          <Routes>
            <Route path="/" element={<Pages />} />
            <Route path="/home" element={<Pages />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App