import React, { useState } from 'react'
import "./camara.css";

export const Camara = () => {

    const [playing, setPlaying] = useState(false);
    const HEIGHT = 500;
    const WIDTH = 500;

    const startVideo = () => {
        setPlaying(true);
        navigator.getUserMedia(
            {
                video:true,

            },
            (stream) => {
                let video = document.getElementsByClassName('app__videoFeed2')[0];
                if(video){
                    video.srcObject = stream;
                }
            },
            (err) => console.error(err)
        );
     };


    const stopVideo = () => {
        setPlaying(false);
        let video = document.getElementsByClassName('app__videoFeed2')[0];
        video.srcObject.getTracks()[0].stop();
     };

    return (
        <div className='app1'>
            <div className='app__container2'>
                <video height={HEIGHT}
                        width={WIDTH}
                        muted
                        autoPlay
                        className='app__videoFeed2'
                ></video>
            </div>

            <div className="app__input2">
                {playing ? (
                    <button onClick={stopVideo}>Stop</button>
                ) : (
                    <button onClick={startVideo}>Start</button>
                )}
            </div>






        </div>
    )
}
