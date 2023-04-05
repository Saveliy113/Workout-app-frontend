import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	Link,
	Route,
	RouterProvider,
	createBrowserRouter
} from 'react-router-dom';

import Home from './components/screens/home/Home';

import './assets/styles/index.scss';
import Router from './routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>
);
