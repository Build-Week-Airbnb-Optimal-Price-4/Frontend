import React from 'react';
import {Route} from 'react-router-dom';
import {PrivateRoute} from './components/PrivateRoute';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import PageNotFound from './components/PageNotFound';
import MyListings from './components/MyListings';
import CreateListing from './components/CreateListing';
import EditListing from './components/EditListing';

const App = () => {
	return (
		<div className='App'>
			<Route exact path='/' component={SignIn}/>
			<Route path='/signup' component={SignUp}/>

			<Route path='/pagenotfound' component={PageNotFound}/>
			
			{/* these routes will be private */}
			<Route path='/dashboard' component={MyListings}/>
			<Route path='/create' component={CreateListing}/>
			<Route path='/edit' component={EditListing}/>
		</div>
	);
};

export default App;
