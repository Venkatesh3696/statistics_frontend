import './App.css';
import Dashboard from './pages/Dashboard';
import { API_URL } from './config/constants';

const monthsData = [
	{ month: 'January', monthNumber: '01' },
	{ month: 'February', monthNumber: '02' },
	{ month: 'March', monthNumber: '03' },
	{ month: 'April', monthNumber: '04' },
	{ month: 'May', monthNumber: '05' },
	{ month: 'June', monthNumber: '06' },
	{ month: 'July', monthNumber: '07' },
	{ month: 'August', monthNumber: '08' },
	{ month: 'September', monthNumber: '09' },
	{ month: 'October', monthNumber: '10' },
	{ month: 'November', monthNumber: '11' },
	{ month: 'December', monthNumber: '12' },
];

function App() {
	return (
		<>
			<Dashboard
				monthsData={monthsData}
				API_URL={API_URL}
			/>
		</>
	);
}

export default App;
