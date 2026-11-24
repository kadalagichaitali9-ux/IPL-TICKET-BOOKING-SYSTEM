import { useState } from "react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="site-header">
            <nav className="nav container" aria-label="Main navigation">
                <a className="brand" href="#home" onClick={closeMenu}>
                    <span className="brand-mark" aria-hidden="true">IPL</span>
                    <span>IPL TICKETS</span>
                </a>
                <button
                    className="menu-toggle"
                    type="button"
                    aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
                    aria-expanded={isMenuOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
                <ul
                    className={`nav-links${isMenuOpen ? " is-open" : ""}`}
                    id="primary-navigation"
                >
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#matches" onClick={closeMenu}>Matches</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
