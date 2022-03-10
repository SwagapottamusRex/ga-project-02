import React from 'react';

import AlcoholType from './AlcoholType';



const alcoholTypes = ['Light_rum', 'Applejack', 'Gin', 'Dark_rum', 'Sweet_Vermouth', 'Scotch', 'Strawberry_schnapps', 'Apricot_brandy', 'Triple_sec', 'Southern_Comfort', 'Tequila', 'Vodka', 'Red_wine', 'Rum', 'Cider']
function Cocktails(){

  const [whatUserTypes, setWhatUserTypes] = React.useState('')

  function handleChange(event){
    setWhatUserTypes(event.target.value)
  } 


  return (
    <>
      
      <section className='section'>
        <div className='container'>
          <input
            className='input'
            placeholder='Search Cocktail'
            name='search'
            onChange={handleChange}
            value={whatUserTypes}
          ></input>
          <div className='columns is-multiline'>
            {alcoholTypes.map((alcohol) => {
              return <AlcoholType key={alcohol} alcohol={alcohol} userSearches={whatUserTypes}/>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Cocktails;
