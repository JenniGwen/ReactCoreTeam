import MovieCard from './MovieCard'

function MovieGrid({ movies }) {
  return (
    <div className="movie-grid" aria-label="Daftar film versi single component">
      {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  )
}

export default MovieGrid
