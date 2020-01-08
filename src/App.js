import React from 'react';
import {Route} from 'react-router-dom';
import {PrivateRoute} from './components/PrivateRoute';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import PageNotFound from './components/PageNotFound';
import MyListings from './components/MyListings';
import CreateListing from './components/CreateListing';
import EditListing from './components/EditListing';
import Listing from './components/Listing';

const App = () => {
	return (
		<div className='App'>
			<Route exact path='/' component={SignIn}/>
			<Route path='/signup' component={SignUp}/>
			
			<Route path='/pagenotfound' component={PageNotFound}/>
			
			<PrivateRoute path='/dashboard' component={MyListings}/>
			<PrivateRoute path='/create' component={CreateListing}/>
			<PrivateRoute path='/edit' component={EditListing}/>
			<PrivateRoute path='/listing/:id' component={Listing}/>
		</div>
	);
};

export default App;
