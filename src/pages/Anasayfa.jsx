import React from 'react'
import HomeCard from '../components/HomeCard'
import '../css/Home.css'

function Home() {
  return (
    <div>


      <div className="card-container">
        <HomeCard isim={"Spotify"} resim={"https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
        <HomeCard isim={"Şimdi"} resim={"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
        <HomeCard isim={"Sizinle"} resim={"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />




      </div>




    </div>
  )
}

export default Home