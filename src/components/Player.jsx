import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sarkiyiOynatDurdur, sesiDegistir, ilerlemeGuncelle } from '../Slices/PlayerSlice';
import '../css/MusicCard.css';
import '../css/Player.css';

function Player() {

    const dispatch = useDispatch();

    const { calanSarki, oynuyorMu, sarkiIlerlemesi, ses } = useSelector(state => state.player);

    const musicRef = useRef(null);



    const handlePlay = () => {
        musicRef.current.play()
    }


    useEffect(() => {
        if (!musicRef.current) return;
        if (oynuyorMu) handlePlay();
        else musicRef.current.pause();
    }, [oynuyorMu, calanSarki]);



    useEffect(() => {
        if (musicRef.current) musicRef.current.volume = ses;
    }, [ses])




    useEffect(() => {
        const audio = musicRef.current;
        if (!audio) return;

        const sesGuncelle = () => {
            const ilerleme = (audio.currentTime);
            dispatch(ilerlemeGuncelle(ilerleme));

        };

        // Şarkı bittiğinde çağrılacak fonksiyon
        const handleEnded = () => {
            dispatch(sarkiyiOynatDurdur()); // oynuyorMu'yu false yap
        };


        audio.addEventListener('timeupdate', sesGuncelle);
        audio.addEventListener('ended', handleEnded); // 👈 ÖNEMLİ: Şarkı bitince

        return () => {
            audio.removeEventListener('timeupdate', sesGuncelle);
            audio.removeEventListener('ended', handleEnded); // 👈 Cleanup
        };
    }, [calanSarki, dispatch])



    return (
        <>


            {calanSarki && (
                <div className={`player ${oynuyorMu ? "active" : "hidden"}`}>
                    <p>🎵 {calanSarki.title}</p>
                    <button onClick={() => dispatch(sarkiyiOynatDurdur())}>
                        {oynuyorMu ? "⏸" : "▶"}
                    </button>
                    <input
                        type="range"
                        min="0" max="1" step="0.01"
                        value={ses}
                        onChange={(e) => dispatch(sesiDegistir(Number(e.target.value)))}
                    />
                    <audio ref={musicRef} src={calanSarki.url}></audio>

                    <progress value={sarkiIlerlemesi} max={musicRef.current?.duration || 0}></progress>
                </div>
            )
            }
        </>
    );
}

export default Player