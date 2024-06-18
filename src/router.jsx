/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from './components/Loading.jsx'
// import Login from './pages/Login.jsx'

const LazyLogin = lazy(() => import('./pages/Login.jsx'))

const LazyGeneral = lazy(() => import('./interfaces/general/component/GeneralInterface.jsx'))
const LazyGeneralLanding = lazy(() => import('./interfaces/general/pages/Landing.jsx'))

const LazyLocation = lazy(() => import('./interfaces/location/component/LocationInterface.jsx'))
const LazyLocationLanding = lazy(() => import('./interfaces/location/pages/Landing.jsx'))

const LazyCarPooling = lazy(() => import('./interfaces/carpooling/component/CarInterface.jsx'))
const LazyCarPoolingLanding = lazy(() => import('./interfaces/carpooling/pages/Landing.jsx'))


const router = createBrowserRouter ([
	{
		path: "/",
		element: (
			<Suspense fallback={<Loading/>}>
				<LazyGeneral/>
			</Suspense>
		),
		children:[
			{
				path: '/',
				element: (
					<Suspense fallback={<Loading/>}>
						<LazyGeneralLanding/>
					</Suspense>
				)
			},
			{
				path: '/login',
				element: (
					<Suspense fallback={<Loading/>}>
						<LazyLogin/>
					</Suspense>
				)
			}
		]
	},
	{
		path: "/car-pooling",
		element: (
			<Suspense fallback={<Loading/>}>
				<LazyCarPooling/>
			</Suspense>
		),
		children:[
			{
				path: '/car-pooling',
				element: (
					<Suspense fallback={<Loading/>}>
						<LazyCarPoolingLanding/>
					</Suspense>
				)
			}
		]
	},
	{
		path: "/location",
		element: (
			<Suspense fallback={<Loading/>}>
				<LazyLocation/>
			</Suspense>
		),
		children:[
			{
				path: '/location',
				element: (
					<Suspense fallback={<Loading/>}>
						<LazyLocationLanding/>
					</Suspense>
				)
			}
		]
	}
])

export default router