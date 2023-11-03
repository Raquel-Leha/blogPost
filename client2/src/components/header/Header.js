import { NavLink } from "react-router-dom";
import "./Header.css";
import hat from "../../assets/pngwing.com.png";

function Header() {
  return (
    <header>
      <nav className="div-nav">
        <button>
          <NavLink
            
            to="/posts"
          >
            Inicio
          </NavLink>
        </button>

        <button>
          <NavLink to="/about" className="#d9b44a px-4 py-1 rounded-sm">
            Sobre mí
          </NavLink>
        </button>

        <img src={hat} className="image" alt="cubiertos"></img>

        <button>
          <NavLink to="/recetas-saladas">Mis recetas saladas</NavLink>
        </button>

        <button>
          <NavLink to="/recetas-dulces">Mis recetas dulces</NavLink>
        </button>
      </nav>
    </header>
  );
}

export default Header;
