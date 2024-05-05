import React from 'react'
import allergy from '../../assets/allergy.png'
import './Why.css'
const Why = () => {
  return (
    <section className=' why__bg'>
      <div className='section__container ' >
          <h1 className='title'>Why occurs that illness</h1>
          <div className='why__container'>
          <div className='hero__container '>
            <div className='hero__card'>
              <span><img src={allergy} alt='icon'/></span>
              <h4>Reason 1</h4>
              <p>
                Enim excepteur nisi labore deserunt labore dolore aute ut esse commodo nisi id magna.
              </p>
            </div>
            <div className='hero__card'>
              <span><img src={allergy} alt='icon'/></span>
              <h4>Reason 2</h4>
              <p>
                Enim excepteur nisi labore deserunt labore dolore aute ut esse commodo nisi id magna.
              </p>
            </div>
            <div className='hero__card'>
              <span><img  src={allergy} alt='icon'/></span>
              <h4>Reason 3</h4>
              <p>
                Enim excepteur nisi labore deserunt labore dolore aute ut esse commodo nisi id magna.
              </p>
            </div>
          </div>
          </div>
      </div>
    </section>

  )
}

export default Why


