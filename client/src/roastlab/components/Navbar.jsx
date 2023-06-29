import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate()

    const onLogout = () =>{
        // console.log('logout')
        navigate('/login',{
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark p-3" style={{backgroundColor:'#454545'}}>
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                PetroStocks
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) =>`nav-item nav-link ${ isActive ? 'active' : '' }`} 
                        to="/inicio"
                    >
                        Inicio
                    </NavLink>
                    <NavLink 
                        className={({isActive}) =>`nav-item nav-link ${ isActive ? 'active' : '' }`}
                        to="/add"
                    >
                        Agregar
                    </NavLink>
                    <NavLink 
                        className={({isActive}) =>`nav-item nav-link ${ isActive ? 'active' : '' }`}
                        to="/search"
                    >
                        Inventario
                    </NavLink>
                    <NavLink 
                        className={({isActive}) =>`nav-item nav-link ${ isActive ? 'active' : '' }`}
                        to="/venta"
                    >
                        Venta
                    </NavLink>
                    <NavLink 
                        className={({isActive}) =>`nav-item nav-link ${ isActive ? 'active' : '' }`}
                        to="/registro"
                    >
                        Registro
                    </NavLink>
                    <NavLink 
                        className={({isActive}) =>`nav-item nav-link ${ isActive ? 'active' : '' }`}
                        to="/graphs"
                    >
                        Graficas
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        Admin
                    </span>

                    <button
                        className='nav-item nav-link btn'
                        onClick={ onLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}