import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

function Glassmorphism() {

  return (
<div className="flex flex-col relative justify-center min-h-screen bg-gradient-to-r from-mypurple from-10% via-sky-500 via-50% to-emerald-600 to-80% ">
<div className="absolute h-1/2 w-1/2 top-10 rounded-xl overflow-hidden bg-white shadow-xl drop-shadow-2xl">
<div className='flex items-center bg-emerald-600 h-full drop-shadow-lg	'>
    <p className='mx-5	md:text-6xl sm:text-sm'>Optimize your online presence with our expertise</p>
  </div>
</div>
  <div className="absolute right-1 inline-grid	 h-1/2 w-1/2 rounded-xl overflow-hidden shadow-xl">
    <div className="absolute top-0  w-full h-full"></div>
    <div className="self-center	justify-self-center	">
      <div className="p-2.5 justify-center items-center">
      <Player
  autoplay
  loop
  src="/static/98988-seo-rating.json"
  className="player-container"
>
  <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
</Player>
      </div>
    </div>
  </div>
</div>

  );
}

export default Glassmorphism;

