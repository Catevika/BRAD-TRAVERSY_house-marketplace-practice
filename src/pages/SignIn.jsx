import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';

function SignIn() {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	// * We destructure form data for later use of email and password separatly

	const { email, password } = formData;

	const navigate = useNavigate();

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value // * Will be either id='email' or id='password'
		}));
	};

	return (
		<>
			<div className='pageContainer'>
				<header>
					<p className='pageHeader'>Welcome back!</p>
				</header>
				<main>
					<form>
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
						<div className='signInBar'>
							<p className='signInText'>Sign In</p>
							<button className='signInButton'>
								<ArrowRightIcon fill='#fff' width='34px' height='34px' />
							</button>
						</div>
					</form>
					{/* Google OAuth */}
					<Link to='/sign-up' className='registerLink'>
						Sign Up Instead
					</Link>
				</main>
			</div>
		</>
	);
}

export default SignIn;
