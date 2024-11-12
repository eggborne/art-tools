import { Link } from "react-router-dom";
import style from './NavList.module.css';


const NavList = () => {

  return (
    <nav className={style.NavList}>
      <ul>
        <li><Link to="/mixer">Color Mixer</Link></li>
      </ul>
    </nav>
  )
};

export default NavList;
