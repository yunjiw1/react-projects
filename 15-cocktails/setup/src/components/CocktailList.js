import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {cocktails, loading} = useGlobalContext();

  if (loading) {
    return <Loading />
  }

  if (!cocktails || cocktails.length < 1) {
    return <h2 className='section-title'>no cocktails matched your search criteria</h2>
  }

  return (
    <section className='section'>
      <h2 className='section-title'>Cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map(c => <Cocktail cocktail={c} />)}
      </div>
    </section>
  )
}

export default CocktailList
