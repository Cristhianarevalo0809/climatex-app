import { SearchIcon } from 'lucide-react';
import { useState } from 'react';
import '../components/Search.css';

function Search({ setCoords, setCity }) {
	const [value, setValue] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		setCoords({ lat: 0, lon: 0 }); // Limpia coordenadas para buscar por ciudad
		setCity(value);
		setValue('');
		e.currentTarget.reset();
	};

	return (
		<form onSubmit={handleSubmit} className="search-form">
			<SearchIcon className="search-icon" />
			<input
				className="search-input"
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder="Buscar ciudad..."
			/>
		</form>
	);
}

export default Search;
