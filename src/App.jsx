import { BrowserRouter, Route, Routes } from "react-router" // توجه: در ورژن‌های جدید react-router-dom است
import Header from "./features/shared/components/Header"
import Pages from "./features/AllPages/Pages"
import { ThemeProvider } from "./features/themContext/ThemeContext"
import ThemeSettings from "././features/components/ThemeSettings"

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