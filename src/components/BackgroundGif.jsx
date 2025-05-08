import './BackgroundGif.css';

const BackgroundGif = ({ gifUrl, opacity = 0.7 }) => {
	return (
		<div className="background-gif-container" style={{ opacity }}>
			<div className="gif-wrapper">
				<iframe
					src={gifUrl}
					className="giframe"
					allowFullScreen
					title="Background animation"
				></iframe>
			</div>
		</div>
	);
};

export default BackgroundGif;
