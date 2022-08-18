import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import aud1 from "../Musics/b1a.mp3"
import bd1 from "../Musics/b1.mp4"
import aud2 from "../Musics/kva.mp3"
import bd2 from "../Musics/kv.mp4"

const Video = () => {
    return (
        <>
            {/* <audio src="../Musics/a1.mp3" controls

            ></audio> */}
            {/* <audio autoPlay loop controls>
                    <source src={aud} type="audio/wav" />
            </audio> */}
            {/* <iframe src='https://www.youtube.com/embed/RNay7ot3RI8?autoplay=1&mute=1'></iframe> */}
            <video autoPlay loop muted className='w-100'>
                <source src={bd1} type="video/mp4"></source>
            </video>
            <div className='border border-primary'>
            <ReactAudioPlayer
                    src={aud1}
                    autoPlay
                    controls
                    className='w-100 mt-0'
                    style={{ "height": "50px" ,border:"10px solid skyblue" ,borderRadius:"2rem"}}
                />
            </div>

            <video autoPlay loop muted className='w-100'>
                <source src={bd2} type="video/mp4"></source>
            </video>
            <div className='border border-primary'>
            <ReactAudioPlayer
                    src={aud2}
                    controls
                    className='w-100 mt-0'
                    style={{ "height": "50px" ,border:"10px solid skyblue" ,borderRadius:"2rem"}}
                />
            </div>
  


        </>
    )
}
export default Video;