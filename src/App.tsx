import { useState } from 'react';
import ReactPlayer from 'react-player';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Japan from './components/Japan';
import Thailand from './components/Thailand';
import Usa from './components/Usa';
import Taiwan from './components/Taiwan';
import Finland from './components/Finland';
import Main from './components/Main';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/japan" element={<Japan />} />
				<Route path="/thailand" element={<Thailand />} />
				<Route path="/usa" element={<Usa />} />
				<Route path="/taiwan" element={<Taiwan />} />
				<Route path="/finland" element={<Finland />} />
			</Routes>
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
		</>
	);
}

export default App;
