import React from 'react';
import { Link } from 'react-router-dom';
import SearchByName from './SearchByName';

const alcoholTypes = ['Light_rum', 'Applejack', 'Gin', 'Dark_rum', 'Sweet_Vermouth', 'Scotch', 'Strawberry_schnapps', 'Apricot_brandy', 'Triple_sec', 'Southern_Comfort', 'Tequila', 'Vodka', 'Red_wine', 'Rum', 'Cider']

function NavBar() {
   
  const [whatUserTypes, setWhatUserTypes] = React.useState('')

  function handleChange(event){
    setWhatUserTypes(event.target.value)
  } 

  return (
    <>
      <header>
        <nav className='navbar is-dark'>
          <div className='container'>
            <div className='navbar-brand'>
              <p>🍸 <b>Cocktails</b></p>
              
              <Link to='/' className='navbar-item'>
                {' '}
                Home
              </Link>
              <Link to='/cocktails' className='navbar-item'>
                All The Cocktails
              </Link>
              <div className='field'>
                <input
                  className='navbar-item'
                  placeholder='Search Cocktail'
                  name='search'
                  onChange={handleChange}
                  value={whatUserTypes}
                ></input>
              </ div>
              <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </nav>
      </header>
      {!whatUserTypes ? (
        <></>
      ) : (
        <section className='section'> 
          <div className='container'>
            <div className='columns is-multiline'>
              <SearchByName key={whatUserTypes} userSearches={whatUserTypes} />

            </div>
          </div>
        </section>)}
    </>
  )
}

export default NavBar;
