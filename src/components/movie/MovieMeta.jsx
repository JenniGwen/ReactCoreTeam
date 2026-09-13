export default function MovieMeta({rating, comments}){
    return(
        <div className="poster-meta">
            <span className="poster-rating">{rating}</span>
            <span>{comments} comments</span>
        </div>
    )
}
