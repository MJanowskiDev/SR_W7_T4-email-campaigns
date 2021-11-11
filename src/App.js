import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Authenticate, Homepage, SingleCampaign, SingleSubscriber, Campaigns, Subscribers } from './pages';
import './App.css';

import { ProtectedRoute, AuthRoute } from 'components/routes';

const authenticated = true;

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
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
								<Authenticate />
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
						path='/subscriber/:id'
						exact
						element={
							<ProtectedRoute authenticated={authenticated}>
								<SingleSubscriber />
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
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
