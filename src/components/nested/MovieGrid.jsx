import MovieCard from './MovieCard'

export default function NestedMovieGrid({ movies }) {
  return (
    <div className="movie-grid" aria-label="Daftar film versi nested components">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  )
}
