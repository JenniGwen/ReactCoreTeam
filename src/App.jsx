import './App.css'
import Navbar from './components/Navbar'
import { movies } from './data/movies'
import MovieGrid from './components/MovieGrid'

function App() {
  return (
    <div>
      <Navbar/>
      <MovieGrid movies = {movies}/>
    </div>
  )
}

export default App
