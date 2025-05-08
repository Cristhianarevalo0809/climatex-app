import { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './components/search';
import LocationButton from './components/locationButton';
import WeatherInfo from './components/WeatherInfo';
import BackgroundGif from './components/BackgroundGif';
import './App.css';
import { AlertCircle } from 'lucide-react';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const API_KEY = '756d5fe5f3f4a1ec1e722cbf6e65fb34';
const options = '&units=metric&lang=es';

function App() {
	const [weather, setWeather] = useState({});
	const [city, setCity] = useState('Colombia');
	const [error, setError] = useState(null);
	const [coords, setCoords] = useState({ lat: 0, lon: 0 });

	useEffect(() => {
		getWeatherByCity();
	}, [city, coords]);

	const getWeatherByCity = async () => {
		setError(null);
		const { lat, lon } = coords;

		try {
			const res = await axios.get(
				`${BASE_URL}${
					lat !== 0 && lon !== 0 ? `lat=${lat}&lon=${lon}` : `q=${city}`
				}&appid=${API_KEY}${options}`,
			);

			const timeOptions = {
				hour: '2-digit',
				minute: '2-digit',
			};

			setWeather({
				name: res.data.name,
				country: res.data.sys.country,
				temp: Math.ceil(res.data.main.temp),
				description: res.data.weather[0].description,
				humidity: res.data.main.humidity,
				wind: res.data.wind.speed,
				pressure: res.data.main.pressure,
				visibility: res.data.visibility,
				feels_like: Math.ceil(res.data.main.feels_like),
				clouds: res.data.clouds.all,
				sunrise: new Date(res.data.sys.sunrise * 1000).toLocaleTimeString(
					[],
					timeOptions,
				),
				sunset: new Date(res.data.sys.sunset * 1000).toLocaleTimeString(
					[],
					timeOptions,
				),
				icon: res.data.weather[0].icon,
			});
		} catch (err) {
			if (err.response?.status === 404) {
				setError('Ciudad no encontrada');
			}
			console.error(err.response?.data?.message || err.message);
		}
	};

	return (
		<div className="container">
			<BackgroundGif gifUrl="https://gifer.com/embed/FYmy" opacity={0.6} />

			<div className="content-wrapper">
				<div className="card">
					<div className="card-header">
						<Search setCity={setCity} setCoords={setCoords} />
						<LocationButton setCoords={setCoords} setError={setError} />
					</div>

					<div className="card_body">
						{error && (
							<div className="error-message">
								<AlertCircle className="error-icon" />
								<span>{error}</span>
							</div>
						)}

						{weather.name && <WeatherInfo weather={weather} />}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
