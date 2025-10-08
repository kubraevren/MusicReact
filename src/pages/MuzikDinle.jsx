import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getMusic } from "../Slices/MuzikSlice"
import MusicCard from '../components/MusicCard';
import '../css/MusicCard.css'

function MuzikDinle() {


  const [inputText, setInputText] = useState("");

  const { items } = useSelector((state) => state.music)

  const dispatch = useDispatch();


  const handleChange = () => {
    dispatch(getMusic(inputText));
  }



  return (
    <div>
      <div className="input-container">

        <input type='text'
          id='input'
          placeholder='Şarkıcı giriniz:  '
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleChange();
            }
          }}
        />
        <button onClick={handleChange}>Gönder</button>

       
      </div>

     
      <div className="MusicCardContainer">

        {items.map((music) => (


          <MusicCard song={music.trackName}
            key={music.trackId}
            id={music.trackId}
            singer={music.artistName}
            music={music.previewUrl}
            image={music.artworkUrl100.replace("100x100bb", "500x500bb")} />
        ))}


      </div>

    </div>
  )
}

export default MuzikDinle