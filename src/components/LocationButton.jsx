import { MapPlus } from 'lucide-react';
import '../components/LocationButton.css';

function locationButton({ setCoords, setError }) {
	const handleLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setCoords({
						lat: position.coords.latitude,
						lon: position.coords.longitude,
					});
					setCity(''); // Limpia la ciudad para forzar el uso de coordenadas
				},
				(err) => {
					setError('Debes permitir tu ubicación para continuar');
					console.error(err);
				},
			);
		} else {
			setError('Geolocalización no soportada en tu navegador');
		}
	};

	return (
		<button onClick={handleLocation} className="location">
			<MapPlus className="location-icon" />
		</button>
	);
}

export default locationButton;
