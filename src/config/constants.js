const DEVELOPMENT_API_URL = 'http://localhost:5000';

const PRODUCTION_API_URL = 'https://statistics-backend.onrender.com';

export const API_URL =
	process.env.NODE_ENV === 'development'
		? DEVELOPMENT_API_URL
		: PRODUCTION_API_URL;
