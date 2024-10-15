import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import Error from './Error'
import { useParams, Link } from 'react-router-dom'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState(null);

  const fetchCocktail = async () => {
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      setCocktail(data.drinks);
      console.log(data.drinks);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCocktail();
  }, [id])
  
  if (loading) {
    return <Loading />
  }
  if (cocktail[0] === undefined) {
    return <Error />
  }

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>Back Home</Link>
      <h2 className='seciton-title'> {cocktail[0].strDrink} </h2>
    
      <div className='drink'>
        <img src={cocktail[0].strDrinkThumb} alt={cocktail[0].strDrink}/>
        <div className='drink-info'>
          <p><span className='drink-data'>Name:</span>{cocktail[0].strDrink}</p>
          <p><span className='drink-data'>Category:</span>{cocktail[0].strCategory}</p>
          <p><span className='drink-data'>Info:</span>{cocktail[0].strAlcoholic}</p>
          <p><span className='drink-data'>Glass:</span>{cocktail[0].strGlass}</p>
          <p><span className='drink-data'>Instructions:</span>{cocktail[0].strInstructions}</p>
          <p><span className='drink-data'>Ingredients:</span>{cocktail[0].strIngredient1}</p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
