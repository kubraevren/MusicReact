import React from 'react'
import '../css/Home.css'
function HomeCard({ isim, aciklama, resim }) {
  return (
    <div className='card'>
   {  <img src={resim} alt={isim} />}
      <h2>{isim}</h2>
      <p>{aciklama}</p>
      
    </div>
  )
}


export default HomeCard 