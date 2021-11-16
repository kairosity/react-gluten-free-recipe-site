import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

// styles
import './RecipeList.css'

export default function RecipeList({recipes}) {

    const { mode } = useTheme()

    if(recipes.length === 0){
        return <div className='error'><h2>No recipes to load...</h2></div>
    }
    return (
        <div className='recipe-list'>
            {
            recipes.map((recipe) => (
                <div key={recipe.id} className={`card ${mode}`}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make.</p>
                    <p>{recipe.method.substring(0, 100)}...</p>
                    <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                </div>
            )) 
            }   
        </div>
    )
}
