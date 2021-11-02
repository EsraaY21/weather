import { useState, useEffect } from 'react';

export const useDataFetch = (city) => {
const [state, setState] = useState({});
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);

useEffect(() => {
const fetchCoords = async () => {
try {
setLoading(true);
setError(false);
const coords = await API.fetchCoords(city);
} catch (error) {
setError(true);
}
};
}, [city]);

return { state, loading, error };
};

export default APIFunctions;

<div>
{weatherData.loading ? (
<CgSpinner className="animate-spin" />
) : (
<WeatherDetails searchNewCity={onSearchNewCity} />
)}
</div>
);
}

export default App;

////////////

import useFetch from './hooks/useFetch';

function App() {
const city = 'london';
const { loading, error, data } = useFetch(city);

console.log(loading);
console.log(error);
console.log(data);
