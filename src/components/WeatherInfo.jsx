import {
	MapPin,
	Droplets,
	CircleGauge,
	Wind,
	Eye,
	Cloud,
	Thermometer,
} from 'lucide-react';
import '../components/WeatherInfo.css';

function WeatherInfo({ weather }) {
	return (
		<div className="card-info">
			<h1 className="card-title">
				<MapPin className="card-icon" /> {weather.name},{' '}
				<span className="card-span">{weather.country}</span>
			</h1>

			<img
				className="card-img"
				src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
				alt="{weather.description}"
			/>

			<h1 className="card-temp">{weather.temp}°C</h1>
			<p className="card-description">
				<q>{weather.description}</q>
			</p>

			<div className="card-details">
				<p className="card-details-item">
					<Droplets className="card-details-icon" />
					<span className="card-details-item-text">
						Humedad
						<span className="card-details-item-value">{weather.humidity}%</span>
					</span>
				</p>
				{/*  */}
				<p className="card-details-item">
					<CircleGauge className="card-details-icon" />
					<span className="card-details-item-text">
						Presion
						<span className="card-details-item-value">
							{weather.pressure} hpa
						</span>
					</span>
				</p>
				<p className="card-details-item">
					<Eye className="card-details-icon" />
					<span className="card-details-item-text">
						Visibilidad
						<span className="card-details-item-value">
							{weather.visibility}Km
						</span>
					</span>
				</p>
				<p className="card-details-item">
					<Wind className="card-details-icon" />
					<span className="card-details-item-text">
						Viento
						<span className="card-details-item-value">{weather.wind}Km/h</span>
					</span>
				</p>
				<p className="card-details-item">
					<Cloud className="card-details-icon" />
					<span className="card-details-item-text">
						Nubes
						<span className="card-details-item-value">{weather.clouds}%</span>
					</span>
				</p>
				<p className="card-details-item">
					<Thermometer className="card-details-icon" />
					<span className="card-details-item-text">
						Sensacion
						<span className="card-details-item-value">
							{weather.feels_like}ºC
						</span>
					</span>
				</p>
			</div>
		</div>
	);
}

export default WeatherInfo;
