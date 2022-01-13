import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile
} from 'firebase/auth';
import { db } from '../firebase.config';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';

function SignUp() {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: ''
	});

	// * We destructure form data for later use of email and password separatly

	const { name, email, password } = formData;

	const navigate = useNavigate();

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value // * Will be either id='email' or id='password'
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			const auth = getAuth();
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;

			updateProfile(auth.currentUser, {
				displayName: name
			});

			const formDataCopy = { ...formData };
			delete formDataCopy.password;
			formDataCopy.timestamp = serverTimestamp();

			await setDoc(doc(db, 'users', user.uid), formDataCopy);

			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className='pageContainer'>
				<header>
					<p className='pageHeader'>Welcome back!</p>
				</header>
				<main>
					<form onSubmit={onSubmit}>
						<input
							className='nameInput'
							type='text'
							name='name'
							id='name'
							placeholder='Name'
							value={name}
							onChange={onChange}
							autoComplete='current-name'
						/>
						<input
							className='emailInput'
							type='email'
							name='email'
							id='email'
							placeholder='Email'
							value={email}
							onChange={onChange}
							autoComplete='current-email'
						/>
						<div className='passwordInputDiv'>
							<input
								className='passwordInput'
								type={showPassword ? 'text' : 'password'}
								name='password'
								id='password'
								placeholder='Password'
								value={password}
								onChange={onChange}
								autoComplete='current-password'
							/>
							<img
								src={visibilityIcon}
								alt='Show password'
								className='showPassword'
								onClick={() => setShowPassword((prevState) => !prevState)}
							/>
						</div>
						<Link to='/forgot-password' className='forgotPasswordLink'>
							Forgot password
						</Link>
						<div className='signUpBar'>
							<p className='signUpText'>Sign Up</p>
							<button className='signUpButton'>
								<ArrowRightIcon fill='#fff' width='34px' height='34px' />
							</button>
						</div>
					</form>
					{/* Google OAuth */}
					<Link to='/sign-in' className='registerLink'>
						Sign In Instead
					</Link>
				</main>
			</div>
		</>
	);
}

export default SignUp;
