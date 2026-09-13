export default function Navbar(){
    return(
        <header className="navbar">
            {/* pencet ini balik home */}
            <a href="/" className="nav-menu">CINELAB</a> 

            <nav>
                <a href="/" className="nav-item nav-item-active">Movies</a>
                <a href="/" className="nav-item">TV Series</a>
                <a href="/" className="nav-item">Genre</a>
            </nav>
        </header>
    )
}