import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router'

// styles
import './Recipe.css'

export default function Recipe() {

    const { id } = useParams()
    const {data: recipe, isPending, error} = useFetch(`http://localhost:3000/recipes/${id}`)
    return (
        <div className='recipe'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>...Loading</p>}
            {recipe && (
                <>
                    <h2 className='page-title'>{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to make.</p>
                    <ul>
                        {recipe.ingredients.map((ingredient) => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                    <p className='method'>{recipe.method}</p>
                </>
                
            )}
        </div>
    )
}