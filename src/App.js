import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
	Authenticate,
	Homepage,
	SingleCampaign,
	AddSubscriber,
	Campaigns,
	Subscribers,
	Logout,
	AddCampaign
} from './pages';
import Layout from 'components/layout';
import './App.css';

import { ProtectedRoute, AuthRoute, NotFound } from 'components/routes';

function App() {
	const [ authenticated, setAuthenticated ] = useState(false);

	const onAuthenticatedHandle = (user) => {
		setAuthenticated(user ? true : false);
	};

	const onLogoutHandle = () => {
		setAuthenticated(false);
	};

	return (
		<div className='App'>
			<BrowserRouter>
				<Layout authenticated={authenticated}>
					<Routes>
						<Route
							path='/'
							exact
							element={
								<ProtectedRoute authenticated={authenticated}>
									<Homepage />
								</ProtectedRoute>
							}
						/>
						<Route
							path='/authenticate'
							exact
							element={
								<AuthRoute authenticated={authenticated}>
									<Authenticate onAuthenticated={onAuthenticatedHandle} />
								</AuthRoute>
							}
						/>
						<Route
							path='/subscribers'
							exact
							element={
								<ProtectedRoute authenticated={authenticated}>
									<Subscribers />
								</ProtectedRoute>
							}
						/>
						<Route
							path='/campaigns'
							exact
							element={
								<ProtectedRoute authenticated={authenticated}>
									<Campaigns />
								</ProtectedRoute>
							}
						/>
						<Route
							path='/add-subscriber'
							exact
							element={
								<ProtectedRoute authenticated={authenticated}>
									<AddSubscriber />
								</ProtectedRoute>
							}
						/>

						<Route
							path='/add-campaign'
							exact
							element={
								<ProtectedRoute authenticated={authenticated}>
									<AddCampaign />
								</ProtectedRoute>
							}
						/>
						<Route
							path='/campaign/:id'
							exact
							element={
								<ProtectedRoute authenticated={authenticated}>
									<SingleCampaign />
								</ProtectedRoute>
							}
						/>
						<Route
							path='/logout'
							exact
							element={
								<ProtectedRoute authenticated={authenticated}>
									<Logout logoutHandle={onLogoutHandle} />
								</ProtectedRoute>
							}
						/>
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</div>
	);
}

export default App;
