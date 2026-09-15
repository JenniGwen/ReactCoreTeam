import MovieMeta from './movie/MovieMeta'
import MoviePoster from './movie/MoviePoster'
import Badge from '../ui/Badge'

export default function NestedMovieCard({
  title,
  year,
  mediaType,
  image,
  rating,
  comments,
  quality = 'WEB-DL',
}) {
  return (
    <article className="movie-card">
      <MoviePoster src={image} alt={`Poster ${title}`}>
        <Badge variant="media">{mediaType}</Badge>
        <Badge variant="quality">{quality}</Badge>
        <MovieMeta rating={rating} comments={comments} />
      </MoviePoster>

      <h2 className="movie-title">{title} ({year})</h2>
    </article>
  )
}
