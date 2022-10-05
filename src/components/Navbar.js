import "../styles/navbar.css"
import Pdf from "../assets/documents/MatteoLarrode_Resume.pdf"

export default function Navbar() {
    return (
        <nav className="navigation">
            <div
                className="navigation-menu">
                <ul>
                    <li>
                        <a href="https://github.com/MatteoLarrode" target="_blank" rel="noreferrer" className="button" id="btn-navbar">Portfolio</a>
                    </li>
                    <li>
                        <a href={Pdf} target="_blank" rel="noreferrer" className="button" id="btn-resume">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
