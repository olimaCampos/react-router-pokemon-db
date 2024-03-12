import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const setActiveClass = ({ isActive }) => isActive ? 'active' : ''

	return (
		<nav>
      <div className='d-flex gap-2'>
        <NavLink to="/" className={setActiveClass}>
          Inicio
        </NavLink>
        <NavLink to="/pokemons" className={setActiveClass}>
          Pokemons
        </NavLink>
      </div>
		</nav>
	);
};

export default Navbar;