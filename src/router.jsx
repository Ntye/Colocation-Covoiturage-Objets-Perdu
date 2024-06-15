/* eslint-disable react-refresh/only-export-components */
import { Navigate, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import App from "./App.jsx"
import Loading from './components/Loading.jsx'

const LazyApp = lazy(() => import('./App.jsx'))


const router = createBrowserRouter ([
	{
		path: '/',
		element: <App/>
	},
	{
		path: 'home',
		element: (
			<Suspense fallback={<Loading/>}>
				<LazyApp />
			</Suspense>
		),
	}
])

export default router