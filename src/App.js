import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from '~/components/Layout';
import { Fragment } from 'react';

function App() {
	return (
		<Router>
			<div className="">
				<Routes>
					{publicRoutes.map((route, index) => {
						const Page = route.component;
						const Layout =
							route.layout === null
								? Fragment
								: route.layout
								? route.layout
								: DefaultLayout;
						return (
							<Route
								key={index}
								path={route.path}
								element={
									<Layout>
										<Page />
									</Layout>
								}
							/>
						);
					})}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
