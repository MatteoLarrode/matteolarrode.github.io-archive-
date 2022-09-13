import "../styles/navbar.css"

export default function Navbar() {
    return (
        <nav className="navigation">
            <div
                className="navigation-menu">
                <ul>
                    <li>
                        <a href="https://github.com/MatteoLarrode" className="button" id="btn-navbar">Portfolio</a>
                    </li>
                    <li>
                        <a href="/contact" className="button" id="btn-navbar">Contact</a>
                    </li>
                    <li>
                        <a href="/resume" className="button" id="btn-resume">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
