import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Search from "./pages/Search"
import NewsDetail from "./pages/NewsDetail"


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/news" element={<NewsDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
