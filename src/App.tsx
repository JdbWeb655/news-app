import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./shared/Navbar"
import Home from "./pages/Home"
import Search from "./pages/Search"
import NewsDetail from "./pages/NewsDetail"
import Favorites from "./pages/Favorites"


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/news" element={<NewsDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
