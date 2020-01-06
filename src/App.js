import React from 'react';
import {Route} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import MyListings from './components/MyListings';
import CreateListing from './components/CreateListing';
import EditListing from './components/EditListing';

const App = () => {
	return (
		<div className='App'>
			<Route exact path='/' component={SignIn}/>
			<Route path='/signup' component={SignUp}/>
			
			{/* these routes will be private */}
			<Route path='/dashboard' component={MyListings}/>
			<Route path='/create' component={CreateListing}/>
			<Route path='/edit' component={EditListing}/>
		</div>
	);
};

export default App;
