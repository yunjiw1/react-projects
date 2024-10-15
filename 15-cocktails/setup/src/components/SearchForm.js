import React, { useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, []);

  function searchCocktail() {
    setSearchTerm(searchValue.current.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='filter'>
            Search Your Favorite Cocktail
          </label>
          <input type='text' id="filter" name="filter" ref={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </div>
  )
}

export default SearchForm
