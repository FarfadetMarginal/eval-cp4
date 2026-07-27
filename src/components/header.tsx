import { NavLink } from "react-router-dom";
import '../styles/header.scss'


export default function Header() {                                                                                    
    return (
        <>
            <header>
                <a href="/">Kasa</a>
                <nav>
                    <ul>
                        <li><NavLink to="/">Accueil</NavLink></li>
                        <li><NavLink to="/aboutme">À propos</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
