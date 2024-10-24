import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Statistics from '../components/Statistics';
import ChartStatistics from '../components/ChartStatistics';
import { API_URL } from '../config/constants';

console.log({ API_URL });

const Dashboard = ({ monthsData }) => {
	const [search, setSearch] = useState('');
	const [month, setMonth] = useState('03');
	const [fetchedData, setFetchedData] = useState([]);
	const [pagesData, setPagesData] = useState({ currentPage: 1 });

	const [loading, setLoading] = useState(false);

	const onChangeSearch = (e) => {
		setSearch(e.target.value);
	};

	const onChangeMonth = (e) => {
		setMonth(e.target.value);
	};

	const fetchAndSetData = () => {
		const page = pagesData.currentPage;
		const queryString = `?month=${month}&search=${search}&page=${page}`;
		setLoading(true);
		axios.get(`${API_URL}/transactions/${queryString}`).then((response) => {
			setFetchedData(response.data.data);
			console.log('here is last', response);
			const info = {
				currentPage: response.data.current_page,
				perPage: response.data.per_page,
				lastPage: response.data.last_page,
			};
			console.log(info);

			setLoading(false);
		});
	};

	useEffect(() => {
		fetchAndSetData();
	}, [search, month]);

	const renderTable = () => {
		return (
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Price</th>
						<th>Description</th>
						<th>Category</th>
						<th>Sold</th>
						<th>Image</th>
						<th>date of sale</th>
					</tr>
				</thead>
				<tbody>
					{fetchedData.length !== 0 ? (
						fetchedData.map((each) => {
							return (
								<tr key={each.id}>
									<td>{each.id}</td>
									<td>{each.title}</td>
									<td>{each.price}</td>
									<td>{each.description}</td>
									<td>{each.category}</td>
									<td>
										{each.sold === 1 ? 'Sold' : 'unsold'}
									</td>
									<td>
										<img
											className='image'
											alt={each.title}
											src={each.image}
										/>
									</td>
									<td>{Date(each.dateOfSale)}</td>
								</tr>
							);
						})
					) : (
						<h1>No matches found</h1>
					)}
				</tbody>
			</table>
		);
	};

	return (
		<div className='dashboard-container '>
			<h1>Transactions Dashboard</h1>
			<div className='controllers-container'>
				<input
					type='search'
					placeholder='search transactions'
					value={search}
					onChange={onChangeSearch}
				/>
				<select
					value={month}
					onChange={onChangeMonth}
				>
					{monthsData.map((eachMonth) => {
						return (
							<option
								key={eachMonth.monthNumber}
								value={eachMonth.monthNumber}
							>
								{eachMonth.month}
							</option>
						);
					})}
				</select>
			</div>
			<div>{loading ? <p>Loading ...</p> : renderTable()}</div>
			<hr />
			<Statistics
				month={month}
				monthsData={monthsData}
				API_URL={API_URL}
			/>
			<hr />
			<ChartStatistics
				month={month}
				monthsData={monthsData}
				API_URL={API_URL}
			/>
		</div>
	);
};

export default Dashboard;
