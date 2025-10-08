import React, { useState } from 'react'
import '../css/Projeler.css'



function Projelerim({ projeResmi, projeIsmi, aciklama }) {
  

  return (
    <div>



      <div className='projeKarti'>
        <img src={projeResmi} />

        <h1>{projeIsmi}</h1>

        <p>{aciklama}</p>


      </div>

      <br />






    </div>
  )
}

export default Projelerim