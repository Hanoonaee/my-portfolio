
import  './Navbar.css';
function Navbar(){
  return(
    <nav className='navbar'>
      <h2 className='logo'>H</h2>

      <ul className='nav-links'>
        <li><a href="#aboutt">About</a></li>
        <li><a href="#skill">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contacts">Contact</a></li>
      </ul>
    </nav>
  );
} 
export default Navbar;