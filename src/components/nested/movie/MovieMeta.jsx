import { FiMessageCircle, FiStar } from 'react-icons/fi'

export default function MovieMeta({ rating, comments }) {
  return (
    <div className="poster-meta">
      <span className="poster-rating"><FiStar aria-hidden="true" /> {rating}</span>
      <span><FiMessageCircle aria-hidden="true" /> {comments}</span>
    </div>
  )
}
