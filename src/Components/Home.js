import React from 'react';

const Home = () => {
  return (
    <section className='hero is-fullheight-with-navbar is-warning'>
      <div className='hero-body'>
        <div className='container'>
          <p className='title has-text-centered'>
            <span>🍸</span> Cocktails
          </p>
          <p className='subtitle has-text-centered'><b> The #1 stop for all your drink recipies!</b></p>
        </div>
      </div>
      <div>
        <h2 className='title has-text-centered'>About Us</h2>
        <hr />
        <div className='columns'>
          <div className='column is-half'>
            <figure className='image'>
              <img src='#' alt='hh' />
            </figure>
            <div className='container'>
              <h1 className='title'> Karim Ali </h1>
            </div>
          </div>
          <div className='column is-half'>
            <figure className='image'>
              <img src='#' alt='#' />
            </figure>
            <div className='container'>
              <h1 className='title'> Oscar Dial </h1>
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default Home;
