import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home-page"
import PostPage from "./pages/post-page"
import Navbar from "./components/navbar/navbar"


function App() {

  return (
    <div>
      <Navbar/> 
      <Routes>
        <Route path = { '/' } element = { <HomePage/>} />
        <Route path = { '/post' } element = { <PostPage/>} />
      </Routes>
    </div>
  )
}

export default App
