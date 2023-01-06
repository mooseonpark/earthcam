import { useState } from 'react';
import ReactPlayer from 'react-player';
import './App.css';
import videoBg from '../src/assets/video.mp4';

function App() {
	return (
		<div className="main">
			<div className="overlay"></div>
			<h2>Refresh your brain here!</h2>
			<video src={videoBg} autoPlay loop muted />
			{/* <ReactPlayer
				className="react-player"
				url={
					'https://www.youtube.com/watch?v=UCG1aXVO8H8&ab_channel=TaitungAmazing'
				}
				width="100vw"
				height="100vh"
				loop={true}
				playing={true}
				muted={true}
				controls={false}
			/> */}
			{/* <ReactPlayer
				className="react-player"
				url={
					'https://www.youtube.com/watch?v=1OTZ9rjFv78&ab_channel=%E6%A1%83%E5%9C%92%E6%99%BA%E6%85%A7%E6%97%85%E9%81%8A%E9%9B%B2TaoyuanTravel'
				}
				// width="100vw"
				// height="100vh"
				loop={true}
				playing={true}
				muted={true}
				controls={false}
			/> */}
		</div>
	);
}

export default App;
