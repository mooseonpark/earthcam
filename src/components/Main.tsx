import React from 'react';
import { Link } from 'react-router-dom';
import japan from '../assets/japan.png';
import thailand from '../assets/thailand.png';
import usa from '../assets/usa.png';
import taiwan from '../assets/taiwan.png';
import finland from '../assets/finland.png';
import videoBg from '../assets/video.mp4';

type Props = {};

const Main = (props: Props) => {
	return (
		<div className="main">
			<div className="overlay"></div>
			<h1 id="writing" />
			<div className="countries">
				<Link to="/japan">
					<img src={japan} alt="japan" />
				</Link>
				<Link to="/thailand">
					<img src={thailand} alt="japan" />
				</Link>
				<Link to="/usa">
					<img src={usa} alt="japan" />
				</Link>
				<Link to="/taiwan">
					<img src={taiwan} alt="japan" />
				</Link>
				<Link to="/finland">
					<img src={finland} alt="japan" />
				</Link>
			</div>
			<video src={videoBg} autoPlay loop muted />
		</div>
	);
};

export default Main;
