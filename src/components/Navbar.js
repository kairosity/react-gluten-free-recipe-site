import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

// styles
import './Navbar.css'

// components
import Searchbar from './Searchbar'


export default function Navbar() {

    const { color, changeColor } = useTheme()

    return (
        <div className='navbar' style={{ backgroundColor: color}}>
            <nav>
                <Link to='/' className='brand'>
                    <h1>Gluten Free Cooking</h1>
                </Link>
                <Searchbar />
                <Link to='/create'>
                    Create New Recipe
                </Link>
            </nav>
        </div>
    )
}
