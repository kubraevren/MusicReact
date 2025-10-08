import React from 'react'
import '../css/MusicCard.css'
import { useDispatch, useSelector } from 'react-redux';
import { sarkiCal } from '../Slices/PlayerSlice';
import { sarkiyiOynatDurdur, sesiDegistir, ilerlemeGuncelle } from '../Slices/PlayerSlice';

function MusicCard({ song, singer, music, image, id }) {

  const { oynuyorMu, oynayanSarkiId, sarkiIlerlemesi } = useSelector(state => state.player);

  const dispatch = useDispatch();

  const handlePlay = () => {
    dispatch(sarkiCal({ title: song, url: music, id }));
  };

  const deneme = oynayanSarkiId === id;
  return (
    <div>
      <div className='Musicard'>

        <img src={image} alt={song} style={{ width: "100%", borderRadius: "8px" }} />
        <h1>{song}</h1>
        <h3>{singer}</h3>

        <button
          className={`play-pause-btn ${deneme && oynuyorMu ? "playing" : "paused"}`}
          onClick={() => {
            if (deneme) {
              // Aynı şarkıysa sadece oynat/durdur
              dispatch(sarkiyiOynatDurdur());
            } else {
              // Farklı şarkıysa yeni şarkıyı başlat
              handlePlay();
            }
          }}
        >
          {deneme && oynuyorMu ? "⏸" : "▶"}
        </button>
        








      </div>
    </div>
  )
}

export default MusicCard


/* <audio controls src={music}></audio>*/