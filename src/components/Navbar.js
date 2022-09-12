import "../styles/navbar.css"

export default function Navbar() {
    return (
        <nav className="navigation">
            <a href="/" className="brand-name">
                Matteo Larrode
            </a>
            <div
                className="navigation-menu">
                <ul>
                    <li>
                        <a href="/portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    <li>
                        <a href="/contact">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
