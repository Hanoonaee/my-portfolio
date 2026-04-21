import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Hanoona
      </a>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="/hanoona_resume_...pdf" className="resume-btn" target="_blank">
        Resume
      </a>
    </nav>
  );
}

export default Navbar;