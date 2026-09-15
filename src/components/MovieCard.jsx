import { FiMessageCircle, FiStar } from 'react-icons/fi'

function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <div className="poster">
        <img className="poster-image" src={movie.image} alt={`Poster ${movie.title}`} />
        <span className="badge badge-media">{movie.mediaType}</span>
        <span className="badge badge-quality">{movie.quality ?? 'WEB-DL'}</span>
        <div className="poster-meta">
          <span className="poster-rating"><FiStar aria-hidden="true" /> {movie.rating}</span>
          <span><FiMessageCircle aria-hidden="true" /> {movie.comments}</span>
        </div>
      </div>
      <h2 className="movie-title">{movie.title} ({movie.year})</h2>
    </article>
  )
}

export default MovieCard
