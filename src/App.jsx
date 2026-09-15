import './App.css'
import Navbar from './components/Navbar'
import { movies } from './data/movies'
import MovieGrid from './components/MovieGrid'
import NestedMovieGrid from './components/nested/MovieGrid'

function App() {
  return (
    <>
      <Navbar />

      <main className="showcase">
        <section className="showcase-section" aria-labelledby="single-component-title">
          <header className="section-heading">
            <span className="section-tag">Versi 1</span>
            <div>
              <h1 id="single-component-title">Single Component</h1>
              <p>Semua isi kartu ditulis langsung di dalam MovieCard.</p>
            </div>
          </header>
          <MovieGrid movies={movies} />
        </section>

        <section className="showcase-section" aria-labelledby="nested-component-title">
          <header className="section-heading">
            <span className="section-tag section-tag-nested">Versi 2</span>
            <div>
              <h1 id="nested-component-title">Nested Components</h1>
              <p>Poster, badge, dan metadata dipisah menjadi komponen kecil.</p>
            </div>
          </header>
          <NestedMovieGrid movies={movies} />
        </section>
      </main>
    </>
  )
}

export default App
