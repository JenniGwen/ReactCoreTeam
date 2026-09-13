// `children` bikin poster ini bisa diisi badge / meta apa pun dari parent.
// in this case diisi dengan span mediaType and web download

export default function MoviePoster({src, alt, children}){
    return(
        <div className="poster">
            <img className="poster-image" src={src} alt={alt} />
            {children}
        </div>
    )
}