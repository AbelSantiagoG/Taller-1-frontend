import '../styles/Header.css'

export default function Header(){
    return(
        <header className='header'>
            <a href="#" className="logo">
                <img src="../src/assets/images/omnitrix.png" alt="Omnitrix logo" />
                <h2> Ben 10</h2>
            </a>
            <nav>
                <a href="#" className="nav-link">
                    Inicio
                </a>
                <a href="" className="nav-link">
                    Capítulos
                </a>
                <a href="" className="nav-link">
                    Películas
                </a>
            </nav>
        </header>
    )
}