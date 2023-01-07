import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

// const Container = styled.div`
// 	position: absolute;
// `;

const Japan = () => {
	return (
		<div className="">
			<Link to="/">home</Link>
			<ReactPlayer
				className="react-player"
				url={
					'https://www.youtube.com/watch?v=QOjmvL3e7Lc&ab_channel=TokyoLiveCamera'
				}
				width="100vw"
				height="100vh"
				loop={true}
				playing={true}
				muted={true}
				controls={false}
			/>
		</div>
	);
};

export default Japan;
