import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Explore from './pages/Explore';
import Offers from './pages/Offers';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Explore />}></Route>
					<Route path='/offers' element={<Offers />}></Route>
					<Route path='/profile' element={<SignIn />}></Route>
					<Route path='/sign-in' element={<SignIn />}></Route>
					<Route path='/sign-up' element={<SignUp />}></Route>
					<Route path='/forgot-password' element={<ForgotPassword />}></Route>
				</Routes>
				<Navbar />
			</Router>
		</>
	);
}

export default App;
